// messages related to the omgwords game, used mainly by IPC
// note: omgwords is the crossword board game, and includes variants dogworms,
// superomgwords, etc etc

// @generated by protoc-gen-es v1.1.0
// @generated from file ipc/omgwords.proto (package ipc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { BotRequest_BotCode, ChallengeRule as ChallengeRule$1, GameEvent as GameEvent$1, GameHistory, PlayState as PlayState$1 } from "../macondo/macondo_pb.js";

/**
 * @generated from enum ipc.GameEndReason
 */
export const GameEndReason = proto3.makeEnum(
  "ipc.GameEndReason",
  [
    {no: 0, name: "NONE"},
    {no: 1, name: "TIME"},
    {no: 2, name: "STANDARD"},
    {no: 3, name: "CONSECUTIVE_ZEROES"},
    {no: 4, name: "RESIGNED"},
    {no: 5, name: "ABORTED"},
    {no: 6, name: "TRIPLE_CHALLENGE"},
    {no: 7, name: "CANCELLED"},
    {no: 8, name: "FORCE_FORFEIT"},
  ],
);

/**
 * @generated from enum ipc.GameMode
 */
export const GameMode = proto3.makeEnum(
  "ipc.GameMode",
  [
    {no: 0, name: "REAL_TIME"},
    {no: 1, name: "CORRESPONDENCE"},
  ],
);

/**
 * @generated from enum ipc.RatingMode
 */
export const RatingMode = proto3.makeEnum(
  "ipc.RatingMode",
  [
    {no: 0, name: "RATED"},
    {no: 1, name: "CASUAL"},
  ],
);

/**
 * @generated from enum ipc.GameType
 */
export const GameType = proto3.makeEnum(
  "ipc.GameType",
  [
    {no: 0, name: "NATIVE"},
    {no: 1, name: "ANNOTATED"},
    {no: 2, name: "BOT_VS_BOT"},
  ],
);

/**
 * @generated from enum ipc.PlayState
 */
export const PlayState = proto3.makeEnum(
  "ipc.PlayState",
  [
    {no: 0, name: "PLAYING"},
    {no: 1, name: "WAITING_FOR_FINAL_PASS"},
    {no: 2, name: "GAME_OVER"},
    {no: 3, name: "UNSTARTED"},
  ],
);

/**
 * @generated from enum ipc.ChallengeRule
 */
export const ChallengeRule = proto3.makeEnum(
  "ipc.ChallengeRule",
  [
    {no: 0, name: "ChallengeRule_VOID"},
    {no: 1, name: "ChallengeRule_SINGLE"},
    {no: 2, name: "ChallengeRule_DOUBLE"},
    {no: 3, name: "ChallengeRule_FIVE_POINT"},
    {no: 4, name: "ChallengeRule_TEN_POINT"},
    {no: 5, name: "ChallengeRule_TRIPLE"},
  ],
);

/**
 * @generated from message ipc.ClientGameplayEvent
 */
export const ClientGameplayEvent = proto3.makeMessageType(
  "ipc.ClientGameplayEvent",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ClientGameplayEvent_EventType) },
    { no: 2, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "position_coords", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tiles", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "full_rack", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "event_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from enum ipc.ClientGameplayEvent.EventType
 */
export const ClientGameplayEvent_EventType = proto3.makeEnum(
  "ipc.ClientGameplayEvent.EventType",
  [
    {no: 0, name: "TILE_PLACEMENT"},
    {no: 1, name: "PASS"},
    {no: 2, name: "EXCHANGE"},
    {no: 3, name: "CHALLENGE_PLAY"},
    {no: 4, name: "RESIGN"},
  ],
);

/**
 * A GameRules is just the name of a board layout + the name of a letter
 * distribution. These must exist in a database or file somewhere.
 *
 * @generated from message ipc.GameRules
 */
export const GameRules = proto3.makeMessageType(
  "ipc.GameRules",
  () => [
    { no: 1, name: "board_layout_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "letter_distribution_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "variant_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ipc.GameRequest
 */
export const GameRequest = proto3.makeMessageType(
  "ipc.GameRequest",
  () => [
    { no: 1, name: "lexicon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rules", kind: "message", T: GameRules },
    { no: 3, name: "initial_time_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "increment_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "challenge_rule", kind: "enum", T: proto3.getEnumType(ChallengeRule$1) },
    { no: 6, name: "game_mode", kind: "enum", T: proto3.getEnumType(GameMode) },
    { no: 7, name: "rating_mode", kind: "enum", T: proto3.getEnumType(RatingMode) },
    { no: 8, name: "request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "max_overtime_minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "player_vs_bot", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 11, name: "original_request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "bot_type", kind: "enum", T: proto3.getEnumType(BotRequest_BotCode) },
  ],
);

/**
 * GameMetaEvent defines how we serialize meta events to the database.
 *
 * @generated from message ipc.GameMetaEvent
 */
export const GameMetaEvent = proto3.makeMessageType(
  "ipc.GameMetaEvent",
  () => [
    { no: 1, name: "orig_event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(GameMetaEvent_EventType) },
    { no: 4, name: "player_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "expiry", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from enum ipc.GameMetaEvent.EventType
 */
export const GameMetaEvent_EventType = proto3.makeEnum(
  "ipc.GameMetaEvent.EventType",
  [
    {no: 0, name: "REQUEST_ABORT"},
    {no: 1, name: "REQUEST_ADJUDICATION"},
    {no: 2, name: "REQUEST_UNDO"},
    {no: 3, name: "REQUEST_ADJOURN"},
    {no: 4, name: "ABORT_ACCEPTED"},
    {no: 5, name: "ABORT_DENIED"},
    {no: 6, name: "ADJUDICATION_ACCEPTED"},
    {no: 7, name: "ADJUDICATION_DENIED"},
    {no: 8, name: "UNDO_ACCEPTED"},
    {no: 9, name: "UNDO_DENIED"},
    {no: 10, name: "ADD_TIME"},
    {no: 11, name: "TIMER_EXPIRED"},
  ],
);

/**
 * A GameHistoryRefresher is sent to both players when the game starts,
 * and any observers at the time that they begin observing. It can also be sent
 * to a player who reconnects in the middle of a game.
 *
 * @generated from message ipc.GameHistoryRefresher
 */
export const GameHistoryRefresher = proto3.makeMessageType(
  "ipc.GameHistoryRefresher",
  () => [
    { no: 1, name: "history", kind: "message", T: GameHistory },
    { no: 2, name: "time_player1", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "time_player2", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "max_overtime_minutes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "outstanding_event", kind: "message", T: GameMetaEvent },
  ],
);

/**
 * A GameDocumentEvent should eventually replace the GameHistoryRefresher. For
 * now, it will be used for annotated games.
 *
 * @generated from message ipc.GameDocumentEvent
 */
export const GameDocumentEvent = proto3.makeMessageType(
  "ipc.GameDocumentEvent",
  () => [
    { no: 1, name: "doc", kind: "message", T: GameDocument },
  ],
);

/**
 * @generated from message ipc.TournamentDataForGame
 */
export const TournamentDataForGame = proto3.makeMessageType(
  "ipc.TournamentDataForGame",
  () => [
    { no: 1, name: "tid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "division", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "game_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * Meta information about the player of a particular game.
 *
 * @generated from message ipc.PlayerInfo
 */
export const PlayerInfo = proto3.makeMessageType(
  "ipc.PlayerInfo",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "rating", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "is_bot", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "first", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message ipc.GameInfoResponse
 */
export const GameInfoResponse = proto3.makeMessageType(
  "ipc.GameInfoResponse",
  () => [
    { no: 1, name: "players", kind: "message", T: PlayerInfo, repeated: true },
    { no: 4, name: "time_control_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tournament_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "game_end_reason", kind: "enum", T: proto3.getEnumType(GameEndReason) },
    { no: 13, name: "scores", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 14, name: "winner", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "created_at", kind: "message", T: Timestamp },
    { no: 16, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "last_update", kind: "message", T: Timestamp },
    { no: 19, name: "game_request", kind: "message", T: GameRequest },
    { no: 20, name: "tournament_division", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "tournament_round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 22, name: "tournament_game_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 23, name: "type", kind: "enum", T: proto3.getEnumType(GameType) },
  ],
);

/**
 * @generated from message ipc.GameInfoResponses
 */
export const GameInfoResponses = proto3.makeMessageType(
  "ipc.GameInfoResponses",
  () => [
    { no: 1, name: "game_info", kind: "message", T: GameInfoResponse, repeated: true },
  ],
);

/**
 * InstantiateGame is an internal message passed to gamesvc in order to
 * instantiate a game.
 *
 * @generated from message ipc.InstantiateGame
 */
export const InstantiateGame = proto3.makeMessageType(
  "ipc.InstantiateGame",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "game_request", kind: "message", T: GameRequest },
    { no: 3, name: "assigned_first", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "tournament_data", kind: "message", T: TournamentDataForGame },
  ],
);

/**
 * @generated from message ipc.GameDeletion
 */
export const GameDeletion = proto3.makeMessageType(
  "ipc.GameDeletion",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ipc.ActiveGamePlayer
 */
export const ActiveGamePlayer = proto3.makeMessageType(
  "ipc.ActiveGamePlayer",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ipc.ActiveGameEntry
 */
export const ActiveGameEntry = proto3.makeMessageType(
  "ipc.ActiveGameEntry",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "player", kind: "message", T: ActiveGamePlayer, repeated: true },
    { no: 3, name: "ttl", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message ipc.ReadyForGame
 */
export const ReadyForGame = proto3.makeMessageType(
  "ipc.ReadyForGame",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The server will send back a ServerGameplayEvent to a ClientGameplayEvent.
 * The server will also send these asynchronously for opponent gameplay
 * events.
 * XXX: This message type is obsolete and will be replaced by
 * ServerOMGWordsEvent
 *
 * @generated from message ipc.ServerGameplayEvent
 */
export const ServerGameplayEvent = proto3.makeMessageType(
  "ipc.ServerGameplayEvent",
  () => [
    { no: 1, name: "event", kind: "message", T: GameEvent$1 },
    { no: 2, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_rack", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "time_remaining", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "playing", kind: "enum", T: proto3.getEnumType(PlayState$1) },
    { no: 6, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ServerOMGWordsEvent is a new event type.
 *
 * @generated from message ipc.ServerOMGWordsEvent
 */
export const ServerOMGWordsEvent = proto3.makeMessageType(
  "ipc.ServerOMGWordsEvent",
  () => [
    { no: 1, name: "event", kind: "message", T: GameEvent },
    { no: 2, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_rack", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "time_remaining", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "playing", kind: "enum", T: proto3.getEnumType(PlayState) },
    { no: 6, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The server will send back a challenge result event only in the case of
 * a challenge. In all other cases, the server will send back a
 * ServerGameplayEvent.
 * A ServerChallengeResultEvent is sent back along with a list of
 * ServerGameplayEvents, instead of trying to reconstruct and send the
 * right incremental events. The reason is that the logic is complex and
 * has many special cases, and is already fully implemented in Macondo.
 * We don't wish to re-implement it both in this repo's backend and frontend.
 * XXX: This message type is obsolete, and will be replaced by
 * OMGWordsChallengeResultEvent
 *
 * @generated from message ipc.ServerChallengeResultEvent
 */
export const ServerChallengeResultEvent = proto3.makeMessageType(
  "ipc.ServerChallengeResultEvent",
  () => [
    { no: 1, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "challenger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "challenge_rule", kind: "enum", T: proto3.getEnumType(ChallengeRule$1) },
    { no: 4, name: "returned_tiles", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ipc.OMGWordsChallengeResultEvent
 */
export const OMGWordsChallengeResultEvent = proto3.makeMessageType(
  "ipc.OMGWordsChallengeResultEvent",
  () => [
    { no: 1, name: "valid", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "challenger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "challenge_rule", kind: "enum", T: proto3.getEnumType(ChallengeRule) },
    { no: 4, name: "returned_tiles", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * GameEndedEvent is always sent from the server to both clients.
 *
 * @generated from message ipc.GameEndedEvent
 */
export const GameEndedEvent = proto3.makeMessageType(
  "ipc.GameEndedEvent",
  () => [
    { no: 1, name: "scores", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 2, name: "new_ratings", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 3, name: "end_reason", kind: "enum", T: proto3.getEnumType(GameEndReason) },
    { no: 4, name: "winner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "loser", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tie", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "rating_deltas", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 5 /* ScalarType.INT32 */} },
    { no: 9, name: "history", kind: "message", T: GameHistory },
  ],
);

/**
 * RematchStartedEvent gets sent to a game for which there is a rematch.
 * It notifies that observers of the game that a rematch has started.
 *
 * @generated from message ipc.RematchStartedEvent
 */
export const RematchStartedEvent = proto3.makeMessageType(
  "ipc.RematchStartedEvent",
  () => [
    { no: 1, name: "rematch_game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * A NewGameEvent gets sent from the server to the involved clients when a new
 * game is about to begin. It should follow a SoughtGameProcessEvent.
 *
 * @generated from message ipc.NewGameEvent
 */
export const NewGameEvent = proto3.makeMessageType(
  "ipc.NewGameEvent",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "requester_cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "accepter_cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message ipc.TimedOut
 */
export const TimedOut = proto3.makeMessageType(
  "ipc.TimedOut",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * GameEvent is an internal game event, saved in the GameDocument.
 *
 * @generated from message ipc.GameEvent
 */
export const GameEvent = proto3.makeMessageType(
  "ipc.GameEvent",
  () => [
    { no: 2, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "rack", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(GameEvent_Type) },
    { no: 5, name: "cumulative", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "row", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 7, name: "column", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "direction", kind: "enum", T: proto3.getEnumType(GameEvent_Direction) },
    { no: 9, name: "position", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "played_tiles", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 11, name: "exchanged", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 12, name: "score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "bonus", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 14, name: "end_rack_points", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 15, name: "lost_score", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 16, name: "is_bingo", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "words_formed", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 18, name: "millis_remaining", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 19, name: "player_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from enum ipc.GameEvent.Type
 */
export const GameEvent_Type = proto3.makeEnum(
  "ipc.GameEvent.Type",
  [
    {no: 0, name: "TILE_PLACEMENT_MOVE"},
    {no: 1, name: "PHONY_TILES_RETURNED"},
    {no: 2, name: "PASS"},
    {no: 3, name: "CHALLENGE_BONUS"},
    {no: 4, name: "EXCHANGE"},
    {no: 5, name: "END_RACK_PTS"},
    {no: 6, name: "TIME_PENALTY"},
    {no: 7, name: "END_RACK_PENALTY"},
    {no: 8, name: "UNSUCCESSFUL_CHALLENGE_TURN_LOSS"},
    {no: 9, name: "CHALLENGE"},
    {no: 10, name: "TIMED_OUT"},
    {no: 11, name: "RESIGNED"},
  ],
);

/**
 * @generated from enum ipc.GameEvent.Direction
 */
export const GameEvent_Direction = proto3.makeEnum(
  "ipc.GameEvent.Direction",
  [
    {no: 0, name: "HORIZONTAL"},
    {no: 1, name: "VERTICAL"},
  ],
);

/**
 * @generated from message ipc.Timers
 */
export const Timers = proto3.makeMessageType(
  "ipc.Timers",
  () => [
    { no: 1, name: "time_of_last_update", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "time_started", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "time_remaining", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 4, name: "max_overtime", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "increment_seconds", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "reset_to_increment_after_turn", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 7, name: "untimed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message ipc.MetaEventData
 */
export const MetaEventData = proto3.makeMessageType(
  "ipc.MetaEventData",
  () => [
    { no: 1, name: "events", kind: "message", T: GameMetaEvent, repeated: true },
  ],
);

/**
 * @generated from message ipc.GameBoard
 */
export const GameBoard = proto3.makeMessageType(
  "ipc.GameBoard",
  () => [
    { no: 1, name: "num_rows", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "num_cols", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "tiles", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "is_empty", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message ipc.Bag
 */
export const Bag = proto3.makeMessageType(
  "ipc.Bag",
  () => [
    { no: 1, name: "tiles", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * A GameDocument encodes the entire state of a game. It includes a history
 * of events, as well as information about the current state of the bag,
 * timers, etc. It should be possible to recreate an entire omgwords game
 * from a GameDocument state at any given time.
 *
 * @generated from message ipc.GameDocument
 */
export const GameDocument = proto3.makeMessageType(
  "ipc.GameDocument",
  () => [
    { no: 1, name: "players", kind: "message", T: GameDocument_MinimalPlayerInfo, repeated: true },
    { no: 2, name: "events", kind: "message", T: GameEvent, repeated: true },
    { no: 3, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "lexicon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "uid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "racks", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 8, name: "challenge_rule", kind: "enum", T: proto3.getEnumType(ChallengeRule) },
    { no: 9, name: "play_state", kind: "enum", T: proto3.getEnumType(PlayState) },
    { no: 10, name: "current_scores", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 11, name: "variant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "winner", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 13, name: "board_layout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "letter_distribution", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "type", kind: "enum", T: proto3.getEnumType(GameType) },
    { no: 16, name: "timers_started", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "end_reason", kind: "enum", T: proto3.getEnumType(GameEndReason) },
    { no: 18, name: "meta_event_data", kind: "message", T: MetaEventData },
    { no: 19, name: "created_at", kind: "message", T: Timestamp },
    { no: 20, name: "board", kind: "message", T: GameBoard },
    { no: 21, name: "bag", kind: "message", T: Bag },
    { no: 22, name: "scoreless_turns", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 23, name: "player_on_turn", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 24, name: "timers", kind: "message", T: Timers },
  ],
);

/**
 * @generated from message ipc.GameDocument.MinimalPlayerInfo
 */
export const GameDocument_MinimalPlayerInfo = proto3.makeMessageType(
  "ipc.GameDocument.MinimalPlayerInfo",
  () => [
    { no: 1, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "real_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "quit", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "GameDocument_MinimalPlayerInfo"},
);

