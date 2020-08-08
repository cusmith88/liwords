import { Card, Tag, Button } from 'antd';
import React from 'react';
import { useStoreContext } from '../store/store';
import { timeCtrlToDisplayName, challRuleToStr } from '../store/constants';
import { RatingBadge } from './rating_badge';

export const ActiveGames = () => {
  const { lobbyContext, setRedirGame } = useStoreContext();

  const activeGameEls = lobbyContext?.activeGames.map((game) => {
    console.log('game', game);
    const [tt, tc] = timeCtrlToDisplayName(game.initialTimeSecs);

    return (
      <li key={`game${game.gameID}`} style={{ paddingTop: 20 }}>
        <Button
          onClick={(event: React.MouseEvent) => {
            setRedirGame(game.gameID);
            console.log('redirecting to', game.gameID);
          }}
          type="primary"
          style={{ marginRight: 10 }}
        >
          Watch!
        </Button>
        <RatingBadge
          rating={game.players[0].rating}
          player={game.players[0].displayName}
        />
        {'vs.  '}
        <RatingBadge
          rating={game.players[1].rating}
          player={game.players[1].displayName}
        />
        ({game.rated ? 'Rated' : 'Casual'})(
        {`${game.initialTimeSecs / 60} min`})<Tag color={tc}>{tt}</Tag>
        {challRuleToStr(game.challengeRule)}
        {` (Max OT: ${game.maxOvertimeMinutes} min.)`}
      </li>
    );
  });

  return (
    <Card title="Watch a live game!">
      <ul style={{ listStyleType: 'none' }}>{activeGameEls}</ul>
    </Card>
  );
};
