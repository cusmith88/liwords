import {
  GameEvent,
  GameEvent_Type,
} from '../../gen/api/proto/macondo/macondo_pb';

export type Turn = {
  events: Array<GameEvent>;
  // index in the overall GameEvent array.
  firstEvtIdx: number;
};

export const gameEventsToTurns = (evts: Array<GameEvent>) => {
  // Compute the turns based on the game events.
  const turns = new Array<Turn>();
  let lastTurn: Turn = {
    events: new Array<GameEvent>(),
    firstEvtIdx: 0,
  };
  evts.forEach((evt, idx) => {
    let playersDiffer = false;
    if (lastTurn.events.length !== 0) {
      playersDiffer = lastTurn.events[0].playerIndex !== evt.playerIndex;
    }

    if (
      (lastTurn.events.length !== 0 && playersDiffer) ||
      evt.type === GameEvent_Type.TIME_PENALTY ||
      evt.type === GameEvent_Type.END_RACK_PENALTY
    ) {
      // time to add a new turn.
      turns.push(lastTurn);
      lastTurn = {
        events: new Array<GameEvent>(),
        firstEvtIdx: idx,
      };
    }
    lastTurn.events.push(evt);
  });
  if (lastTurn.events.length > 0) {
    turns.push(lastTurn);
  }
  return turns;
};
