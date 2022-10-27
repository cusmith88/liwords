import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import {
  GameHistory,
  PlayState,
} from '../gen/macondo/api/proto/macondo/macondo_pb';
import {
  useExaminableGameContextStoreContext,
  useExamineStoreContext,
  useGameContextStoreContext,
} from '../store/store';
import { useMountedState } from '../utils/mounted';
import { defaultGameInfo, GameMetadata } from './game_info';
import { postJsonObj, postProto, toAPIUrl } from '../api/api';
import {
  GameHistoryRequest,
  GameHistoryResponse,
} from '../gen/api/proto/game_service/game_service_pb';
import { BoardPanel } from './board_panel';
import { sortTiles } from '../store/constants';
import { alphabetFromName } from '../constants/alphabets';
import { ActionType } from '../actions/actions';
import { GameHistoryRefresher } from '../gen/api/proto/ipc/omgwords_pb';
import { PlayerCards } from './player_cards';

const doNothing = () => {};

export const Embed = () => {
  const { useState } = useMountedState();

  const [gameInfo, setGameInfo] = useState<GameMetadata>(defaultGameInfo);
  const { gameID } = useParams();
  const { gameContext: examinableGameContext } =
    useExaminableGameContextStoreContext();
  const { isExamining, handleExamineStart, handleExamineGoTo } =
    useExamineStoreContext();
  const { dispatchGameContext, gameContext } = useGameContextStoreContext();

  const gameDone =
    gameContext.playState === PlayState.GAME_OVER && !!gameContext.gameID;

  useEffect(() => {
    if (!gameID) {
      return;
    }
    // Request game API to get info about the game at the beginning.
    console.log('gonna fetch metadata, game id is', gameID);
    postJsonObj(
      'game_service.GameMetadataService',
      'GetMetadata',
      {
        gameId: gameID,
      },
      (resp) => {
        const meta = resp as GameMetadata;
        setGameInfo(meta);
        // if (meta.data.game_end_reason !== 'NONE') {
        //   // Basically if we are here, we've reloaded the page after the game
        //   // ended. We want to synthesize a new GameEnd message
        //   setGameEndMessage(endGameMessageFromGameInfo(resp.data));
        // }
        console.log(meta);
      }
    );

    const fetchGameHistory = async () => {
      const hreq = new GameHistoryRequest();
      hreq.setGameId(gameID);

      const resp = await postProto(
        GameHistoryResponse,
        'game_service.GameMetadataService',
        'GetGameHistory',
        hreq
      );
      const ghr = new GameHistoryRefresher();
      ghr.setHistory(resp.getHistory());
      dispatchGameContext({
        actionType: ActionType.RefreshHistory,
        payload: ghr,
      });
      console.log('handling start');
    };

    fetchGameHistory();
    return () => {
      setGameInfo(defaultGameInfo);
    };
  }, [gameID, dispatchGameContext]);

  useEffect(() => {
    if (gameContext.turns.length > 0) {
      handleExamineStart();
      handleExamineGoTo(0);
    }
  }, [gameContext.turns.length, handleExamineGoTo, handleExamineStart]);

  //   if (!gameHistory) {
  //     return <div>Could not load game history</div>;
  //   }
  //   if (gameHistory.getFinalScoresList().length === 0) {
  //     return <div>This game is not over.</div>;
  //   }

  const rack =
    examinableGameContext.players.find((p) => p.onturn)?.currentRack ?? '';

  const sortedRack = useMemo(() => sortTiles(rack), [rack]);
  const alphabet = useMemo(
    () =>
      alphabetFromName(gameInfo.game_request.rules.letter_distribution_name),
    [gameInfo]
  );

  if (!gameID) {
    return <div>Invalid game ID</div>;
  }

  console.log('turns', examinableGameContext.turns);
  return (
    <div className="game-container">
      <div className="game-table">
        <div className="sticky-player-card-container">
          <PlayerCards
            horizontal
            gameMeta={gameInfo}
            playerMeta={gameInfo.players}
          />
        </div>
        ;
        <div className="play-area">
          <BoardPanel
            anonymousViewer={true}
            username={''}
            board={examinableGameContext.board}
            currentRack={sortedRack}
            events={examinableGameContext.turns}
            gameID={gameID}
            sendSocketMsg={doNothing}
            sendGameplayEvent={doNothing}
            gameDone={gameDone}
            playerMeta={gameInfo.players}
            tournamentID={gameInfo.tournament_id}
            vsBot={gameInfo.game_request.player_vs_bot}
            lexicon={gameInfo.game_request.lexicon}
            alphabet={alphabet}
            challengeRule={gameInfo.game_request.challenge_rule}
            handleAcceptAbort={doNothing}
            handleAcceptRematch={doNothing}
            exitableExaminer={false}
          />
        </div>
      </div>
    </div>
  );
};
