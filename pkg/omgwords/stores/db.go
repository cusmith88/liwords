package stores

import (
	"context"

	"github.com/domino14/liwords/pkg/entity"
	"github.com/domino14/liwords/pkg/stores/common"
	"github.com/domino14/liwords/rpc/api/proto/ipc"
	"github.com/golang/protobuf/proto"
	"github.com/jackc/pgx/v4"
	"github.com/jackc/pgx/v4/pgxpool"
	"github.com/rs/zerolog/log"
)

type DBStore struct {
	dbPool *pgxpool.Pool
}

type BroadcastGame struct {
	GameUUID    string
	CreatorUUID string
	Private     bool
	Finished    bool
}

func NewDBStore(p *pgxpool.Pool) (*DBStore, error) {
	return &DBStore{dbPool: p}, nil
}

func (s *DBStore) Disconnect() {
	s.dbPool.Close()
}

func (s *DBStore) CreateAnnotatedGame(ctx context.Context, creatorUUID string, gameUUID string,
	private bool, quickdata *entity.Quickdata, req *ipc.GameRequest) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)

	_, err = tx.Exec(ctx, `
	INSERT INTO annotated_game_metadata (game_uuid, creator_uuid, private_broadcast, done)
	VALUES ($1, $2, $3, $4)`, gameUUID, creatorUUID, private, false)

	if err != nil {
		return err
	}
	// Create a fake game request. XXX this is only to make it work with the rest
	// of the system. Otherwise, metadata API doesn't work. We will have to migrate
	// this.
	request, err := proto.Marshal(req)
	if err != nil {
		return err
	}
	// Also insert it into the old games table. We will need to migrate this.
	_, err = tx.Exec(ctx, `
	INSERT INTO games (created_at, updated_at, uuid, type, quickdata, request)
	VALUES (NOW(), NOW(), $1, $2, $3, $4)
	`, gameUUID, ipc.GameType_ANNOTATED, quickdata, request)
	if err != nil {
		return err
	}
	// All other fields are blank. We will update the quickdata field with
	// necessary metadata
	if err := tx.Commit(ctx); err != nil {
		return err
	}

	return nil
}

func (s *DBStore) DeleteAnnotatedGame(ctx context.Context, uuid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	_, err = tx.Exec(ctx, `DELETE from annotated_game_metadata WHERE game_uuid = $1`, uuid)
	if err != nil {
		return err
	}
	_, err = tx.Exec(ctx, `DELETE FROM games WHERE uuid = $1`, uuid)
	if err != nil {
		return err
	}
	// All other fields are blank. We will update the quickdata field with
	// necessary metadata
	if err := tx.Commit(ctx); err != nil {
		return err
	}
	return nil
}

func (s *DBStore) MarkAnnotatedGameDone(ctx context.Context, uuid string) error {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return err
	}
	defer tx.Rollback(ctx)
	_, err = tx.Exec(ctx, `UPDATE annotated_game_metadata SET done = TRUE 
					WHERE game_uuid = $1`, uuid)
	if err != nil {
		return err
	}
	_, err = tx.Exec(ctx, `UPDATE games SET updated_at = NOW() where uuid = $1`,
		uuid)
	if err != nil {
		return err
	}
	if err := tx.Commit(ctx); err != nil {
		return err
	}
	return nil
}

// OutstandingGames returns a list of game IDs for games that are not yet done being
// annotated. The system will only allow a certain number of games to remain
// undone for an annotator.
func (s *DBStore) OutstandingGames(ctx context.Context, creatorUUID string) ([]*BroadcastGame, error) {
	tx, err := s.dbPool.BeginTx(ctx, common.DefaultTxOptions)
	if err != nil {
		return nil, err
	}
	defer tx.Rollback(ctx)

	query := `SELECT game_uuid, private_broadcast FROM annotated_game_metadata 
	WHERE creator_uuid = $1 AND done = 'f'`

	rows, err := tx.Query(ctx, query, creatorUUID)
	if err == pgx.ErrNoRows {
		log.Debug().Str("creatorUUID", creatorUUID).Msg("outstanding games - no rows match")
		return nil, nil
	}
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	games := []*BroadcastGame{}
	for rows.Next() {
		var uuid string
		var private bool
		if err := rows.Scan(&uuid, &private); err != nil {
			return nil, err
		}
		games = append(games, &BroadcastGame{
			GameUUID:    uuid,
			CreatorUUID: creatorUUID,
			Private:     private,
			Finished:    false,
		})
	}

	if err := tx.Commit(ctx); err != nil {
		return nil, err
	}
	return games, nil
}

func (s *DBStore) GameOwnedBy(ctx context.Context, gid, uid string) (bool, error) {
	var ct int
	err := s.dbPool.QueryRow(ctx, `SELECT 1 FROM annotated_game_metadata
		WHERE creator_uuid = $1 AND game_uuid = $2 LIMIT 1`, uid, gid).Scan(&ct)
	if err != nil {
		return false, err
	}
	if ct == 1 {
		return true, nil
	}
	return false, nil
}

func (s *DBStore) GameIsDone(ctx context.Context, gid string) (bool, error) {
	var done bool
	err := s.dbPool.QueryRow(ctx, `SELECT done FROM annotated_game_metadata
		WHERE game_uuid = $1`, gid).Scan(&done)
	if err != nil {
		return false, err
	}
	return done, nil
}
