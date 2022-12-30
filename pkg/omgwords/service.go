package omgwords

import (
	"context"
	"errors"

	"github.com/rs/zerolog/log"
	"github.com/samber/lo"
	"github.com/twitchtv/twirp"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/domino14/liwords/pkg/apiserver"
	"github.com/domino14/liwords/pkg/config"
	"github.com/domino14/liwords/pkg/cwgame"
	"github.com/domino14/liwords/pkg/entity"
	"github.com/domino14/liwords/pkg/omgwords/stores"
	"github.com/domino14/liwords/pkg/user"
	"github.com/domino14/liwords/rpc/api/proto/ipc"
	pb "github.com/domino14/liwords/rpc/api/proto/omgwords_service"
	"github.com/domino14/macondo/gen/api/proto/macondo"
)

type OMGWordsService struct {
	userStore     user.Store
	cfg           *config.Config
	gameStore     *stores.GameDocumentStore
	metadataStore *stores.DBStore
	gameEventChan chan *entity.EventWrapper
}

// NewGameService creates a Twirp GameService
func NewOMGWordsService(u user.Store, cfg *config.Config, gs *stores.GameDocumentStore,
	ms *stores.DBStore) *OMGWordsService {
	return &OMGWordsService{
		userStore:     u,
		cfg:           cfg,
		gameStore:     gs,
		metadataStore: ms}
}

func (gs *OMGWordsService) failIfSessionDoesntOwn(ctx context.Context, gameID string) error {
	sess, err := apiserver.GetSession(ctx)
	if err != nil {
		return err
	}
	owns, err := gs.metadataStore.GameOwnedBy(ctx, gameID, sess.UserUUID)
	if err != nil {
		return err
	}
	if !owns {
		return twirp.NewError(twirp.InvalidArgument, "user does not own this game")
	}
	return nil
}

func (gs *OMGWordsService) SetEventChannel(c chan *entity.EventWrapper) {
	gs.gameEventChan = c
}

func (gs *OMGWordsService) CreateBroadcastGame(ctx context.Context, req *pb.CreateBroadcastGameRequest) (
	*pb.CreateBroadcastGameResponse, error) {

	sess, err := apiserver.GetSession(ctx)
	if err != nil {
		return nil, err
	}

	players := req.PlayersInfo
	if len(players) != 2 {
		return nil, twirp.NewError(twirp.InvalidArgument, "need two players")
	}
	if players[0].Nickname == players[1].Nickname {
		return nil, twirp.NewError(twirp.InvalidArgument, "player nicknames must be unique")
	}
	if players[0].Nickname == "" || players[1].Nickname == "" {
		return nil, twirp.NewError(twirp.InvalidArgument, "player nicknames must not be blank")
	}
	if !players[0].First || players[1].First {
		return nil, twirp.NewError(twirp.InvalidArgument, "only first player must be marked as first")
	}

	if req.Rules == nil {
		return nil, twirp.NewError(twirp.InvalidArgument, "no rules")
	}
	if req.Lexicon == "" {
		return nil, twirp.NewError(twirp.InvalidArgument, "lexicon is empty")
	}
	unfinished, err := gs.metadataStore.OutstandingGames(ctx, sess.UserUUID)
	if err != nil {
		return nil, err
	}
	log.Debug().Int("unfinished", len(unfinished)).Str("userID", sess.UserUUID).Msg("unfinished-anno-games")
	if len(unfinished) > 0 {
		return nil, twirp.NewError(twirp.InvalidArgument, "please finish or delete your unfinished games before starting a new one")
	}

	// We can just make the user ID the same as the nickname, as it
	// doesn't matter in this case
	mcplayers := []*ipc.GameDocument_MinimalPlayerInfo{
		{Nickname: players[0].Nickname, RealName: players[0].FullName, UserId: "internal-" + players[0].Nickname},
		{Nickname: players[1].Nickname, RealName: players[1].FullName, UserId: "internal-" + players[1].Nickname},
	}

	// Create an untimed game:
	cwgameRules := cwgame.NewBasicGameRules(
		req.Lexicon, req.Rules.BoardLayoutName, req.Rules.LetterDistributionName,
		cwgame.Variant(req.Rules.VariantName), []int{0, 0}, 0, 0, true,
	)

	g, err := cwgame.NewGame(gs.cfg, cwgameRules, mcplayers)
	if err != nil {
		return nil, err
	}
	// Overwrite the type (NewGame assumes this is a native game)
	g.Type = ipc.GameType_ANNOTATED

	qd := &entity.Quickdata{PlayerInfo: req.PlayersInfo}
	g.CreatedAt = timestamppb.Now()

	// Create a legacy game request. Sadly, we need this for now in order to
	// get the old game paths to work properly. In the future we should use
	// the GameDocument as the single source of truth for as many things as possible.
	greq := &ipc.GameRequest{
		Lexicon:            req.Lexicon,
		Rules:              req.Rules,
		InitialTimeSeconds: 0,
		IncrementSeconds:   0,
		ChallengeRule:      macondo.ChallengeRule(req.ChallengeRule),
		GameMode:           ipc.GameMode_REAL_TIME,
		RatingMode:         ipc.RatingMode_CASUAL,
		RequestId:          "dummy",
		MaxOvertimeMinutes: 0,
		OriginalRequestId:  "dummy",
	}

	if err = gs.metadataStore.CreateAnnotatedGame(ctx, sess.UserUUID, g.Uid, true, qd, greq); err != nil {
		return nil, err
	}
	if err = gs.gameStore.SetDocument(ctx, g); err != nil {
		// If we can't add the document to the game store, delete
		// the annotated game we just created it. Not the best pattern, but
		// we have different data stores.
		if derr := gs.metadataStore.DeleteAnnotatedGame(ctx, g.Uid); derr != nil {
			log.Err(derr).Msg("deleting-annotated-game")
		}
		return nil, err
	}

	// We should also send a new game event on the channel.
	err = announceGameCreation(g, req.PlayersInfo, gs.gameEventChan)
	if err != nil {
		log.Err(err).Msg("broadcasting-game-creation")
	}
	return &pb.CreateBroadcastGameResponse{
		GameId: g.Uid,
	}, nil
}

func (gs *OMGWordsService) SendGameEvent(ctx context.Context, req *pb.AnnotatedGameEvent) (
	*pb.GameEventResponse, error) {
	err := gs.failIfSessionDoesntOwn(ctx, req.Event.GameId)
	if err != nil {
		return nil, err
	}
	err = handleEvent(ctx, req.UserId, req.Event, gs.gameStore, gs.gameEventChan)
	if err != nil {
		return nil, err
	}

	return &pb.GameEventResponse{}, nil
}

// UpdateGameDocument updates a game document for an annotated game. It doesn't
// really have meaning outside annotated games, as players should instead use an
// individual event update call.
func (gs *OMGWordsService) ReplaceGameDocument(ctx context.Context, req *pb.ReplaceDocumentRequest) (*pb.GameEventResponse, error) {

	if req.Document == nil {
		return nil, errors.New("nil game document")
	}
	gid := req.Document.Uid

	err := gs.failIfSessionDoesntOwn(ctx, gid)
	if err != nil {
		return nil, err
	}

	// Just willy-nilly update the thing. Kind of scary.
	err = gs.gameStore.UpdateDocument(ctx, &stores.MaybeLockedDocument{GameDocument: req.Document})
	if err != nil {
		return nil, err
	}
	// And send an event.
	evt := &ipc.GameDocumentEvent{
		Doc: req.Document,
	}
	wrapped := entity.WrapEvent(evt, ipc.MessageType_OMGWORDS_GAMEDOCUMENT)
	wrapped.AddAudience(entity.AudGameTV, gid)
	gs.gameEventChan <- wrapped

	return &pb.GameEventResponse{}, nil
}

func (gs *OMGWordsService) PatchGameDocument(ctx context.Context, req *pb.PatchDocumentRequest) (*pb.GameEventResponse, error) {
	if req.Document == nil {
		return nil, twirp.NewError(twirp.InvalidArgument, "nil game document")
	}
	gid := req.Document.Uid

	err := gs.failIfSessionDoesntOwn(ctx, gid)
	if err != nil {
		return nil, err
	}
	g, err := gs.gameStore.GetDocument(ctx, gid, true)
	if err != nil {
		return nil, err
	}
	err = MergeGameDocuments(g.GameDocument, req.Document)
	if err != nil {
		return nil, err
	}
	err = gs.gameStore.UpdateDocument(ctx, g)
	if err != nil {
		return nil, err
	}

	// And send an event.
	evt := &ipc.GameDocumentEvent{
		Doc: g.GameDocument,
	}
	wrapped := entity.WrapEvent(evt, ipc.MessageType_OMGWORDS_GAMEDOCUMENT)
	wrapped.AddAudience(entity.AudGameTV, gid)
	gs.gameEventChan <- wrapped

	return &pb.GameEventResponse{}, nil
}

func (gs *OMGWordsService) SetBroadcastGamePrivacy(ctx context.Context, req *pb.BroadcastGamePrivacy) (
	*pb.GameEventResponse, error) {

	return nil, nil
}

func (gs *OMGWordsService) GetGamesForEditor(ctx context.Context, req *pb.GetGamesForEditorRequest) (
	*pb.BroadcastGamesResponse, error) {

	return nil, nil
}

func (gs *OMGWordsService) GetMyUnfinishedGames(ctx context.Context, req *pb.GetMyUnfinishedGamesRequest) (
	*pb.BroadcastGamesResponse, error) {

	sess, err := apiserver.GetSession(ctx)
	if err != nil {
		return nil, err
	}

	unfinished, err := gs.metadataStore.OutstandingGames(ctx, sess.UserUUID)
	if err != nil {
		return nil, err
	}
	log.Debug().Interface("unfinished", unfinished).Str("userID", sess.UserUUID).Msg("unfinished-anno-games")

	games := lo.Map(unfinished, func(item *stores.BroadcastGame, idx int) *pb.BroadcastGamesResponse_BroadcastGame {
		return &pb.BroadcastGamesResponse_BroadcastGame{
			GameId:    item.GameUUID,
			CreatorId: item.CreatorUUID,
			Private:   item.Private,
			Finished:  item.Finished,
		}
	})

	return &pb.BroadcastGamesResponse{
		Games: games,
	}, nil
}

func (gs *OMGWordsService) GetGameDocument(ctx context.Context, req *pb.GetGameDocumentRequest) (*ipc.GameDocument, error) {
	// sess, err := apiserver.GetSession(ctx)
	// if err != nil {
	// 	log.Debug().Msg("probably-not-logged-in")
	// }
	// var userId string
	// if sess != nil {
	// 	userId = sess.UserUUID
	// }
	doc, err := gs.gameStore.GetDocument(ctx, req.GameId, false)
	if err != nil {
		return nil, err
	}
	if doc.Type == ipc.GameType_ANNOTATED {
		return doc.GameDocument, nil
	}
	// Otherwise, we need to "censor" the game document by deleting information
	// this user should not have, if they're a player in this game.
	return nil, errors.New("not implemented for non-annotated games")
}

func (gs *OMGWordsService) DeleteBroadcastGame(ctx context.Context, req *pb.DeleteBroadcastGameRequest) (*pb.DeleteBroadcastGameResponse, error) {
	gid := req.GameId
	err := gs.failIfSessionDoesntOwn(ctx, gid)
	if err != nil {
		return nil, err
	}

	done, err := gs.metadataStore.GameIsDone(ctx, gid)
	if err != nil {
		return nil, err
	}
	if done {
		return nil, twirp.NewError(twirp.InvalidArgument, "you cannot delete a game that is already done")
	}
	err = gs.metadataStore.DeleteAnnotatedGame(ctx, gid)
	if err != nil {
		return nil, err
	}
	err = gs.gameStore.DeleteDocument(ctx, gid)
	if err != nil {
		return nil, err
	}

	return &pb.DeleteBroadcastGameResponse{}, nil
}
