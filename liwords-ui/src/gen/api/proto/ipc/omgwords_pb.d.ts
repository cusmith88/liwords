// messages related to the omgwords game, used mainly by IPC
// note: omgwords is the crossword board game, and includes variants dogworms,
// superomgwords, etc etc

// @generated by protoc-gen-es v0.2.1
// @generated from file ipc/omgwords.proto (package ipc, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {BotRequest_BotCode, ChallengeRule, GameEvent, GameHistory, PlayState} from "../macondo/macondo_pb.js";

/**
 * @generated from enum ipc.GameEndReason
 */
export declare enum GameEndReason {
  /**
   * NONE: the game has not yet ended!
   *
   * @generated from enum value: NONE = 0;
   */
  NONE = 0,

  /**
   * TIME: one person timed out (and lost)
   *
   * @generated from enum value: TIME = 1;
   */
  TIME = 1,

  /**
   * WENT_OUT: game ended regularly, with one person having zero tiles on their
   * rack.
   *
   * @generated from enum value: STANDARD = 2;
   */
  STANDARD = 2,

  /**
   * 6 consecutive zeroes ends the game.
   *
   * @generated from enum value: CONSECUTIVE_ZEROES = 3;
   */
  CONSECUTIVE_ZEROES = 3,

  /**
   * @generated from enum value: RESIGNED = 4;
   */
  RESIGNED = 4,

  /**
   * Aborted games are aborted by mutual agreement.
   *
   * @generated from enum value: ABORTED = 5;
   */
  ABORTED = 5,

  /**
   * @generated from enum value: TRIPLE_CHALLENGE = 6;
   */
  TRIPLE_CHALLENGE = 6,

  /**
   * CANCELLED means the game never started. Game start signal was not sent.
   *
   * @generated from enum value: CANCELLED = 7;
   */
  CANCELLED = 7,

  /**
   * FORCE_FORFEIT is a way to force an opponent to take a loss if they left a
   * game early without resigning.
   *
   * @generated from enum value: FORCE_FORFEIT = 8;
   */
  FORCE_FORFEIT = 8,
}

/**
 * @generated from enum ipc.GameMode
 */
export declare enum GameMode {
  /**
   * @generated from enum value: REAL_TIME = 0;
   */
  REAL_TIME = 0,

  /**
   * @generated from enum value: CORRESPONDENCE = 1;
   */
  CORRESPONDENCE = 1,
}

/**
 * @generated from enum ipc.RatingMode
 */
export declare enum RatingMode {
  /**
   * @generated from enum value: RATED = 0;
   */
  RATED = 0,

  /**
   * @generated from enum value: CASUAL = 1;
   */
  CASUAL = 1,
}

/**
 * @generated from enum ipc.GameType
 */
export declare enum GameType {
  /**
   * @generated from enum value: NATIVE = 0;
   */
  NATIVE = 0,

  /**
   * @generated from enum value: ANNOTATED = 1;
   */
  ANNOTATED = 1,

  /**
   * @generated from enum value: BOT_VS_BOT = 2;
   */
  BOT_VS_BOT = 2,
}

/**
 * @generated from message ipc.ClientGameplayEvent
 */
export declare class ClientGameplayEvent extends Message<ClientGameplayEvent> {
  /**
   * @generated from field: ipc.ClientGameplayEvent.EventType type = 1;
   */
  type: ClientGameplayEvent_EventType;

  /**
   * @generated from field: string game_id = 2;
   */
  gameId: string;

  /**
   * position coordinates, like H8 or G10. Only matters for TILE_PLACEMENT.
   *
   * @generated from field: string position_coords = 3;
   */
  positionCoords: string;

  /**
   * tiles that are being played (or exchanged). The `.` character is used
   * for thru, and lowercase characters are used for blanks.
   *
   * @generated from field: string tiles = 4;
   */
  tiles: string;

  constructor(data?: PartialMessage<ClientGameplayEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ClientGameplayEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientGameplayEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientGameplayEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientGameplayEvent;

  static equals(a: ClientGameplayEvent | PlainMessage<ClientGameplayEvent> | undefined, b: ClientGameplayEvent | PlainMessage<ClientGameplayEvent> | undefined): boolean;
}

/**
 * @generated from enum ipc.ClientGameplayEvent.EventType
 */
export declare enum ClientGameplayEvent_EventType {
  /**
   * @generated from enum value: TILE_PLACEMENT = 0;
   */
  TILE_PLACEMENT = 0,

  /**
   * @generated from enum value: PASS = 1;
   */
  PASS = 1,

  /**
   * @generated from enum value: EXCHANGE = 2;
   */
  EXCHANGE = 2,

  /**
   * @generated from enum value: CHALLENGE_PLAY = 3;
   */
  CHALLENGE_PLAY = 3,

  /**
   * @generated from enum value: RESIGN = 4;
   */
  RESIGN = 4,
}

/**
 * A GameRules is just the name of a board layout + the name of a letter
 * distribution. These must exist in a database or file somewhere.
 *
 * @generated from message ipc.GameRules
 */
export declare class GameRules extends Message<GameRules> {
  /**
   * @generated from field: string board_layout_name = 1;
   */
  boardLayoutName: string;

  /**
   * @generated from field: string letter_distribution_name = 2;
   */
  letterDistributionName: string;

  /**
   * If blank, variant is classic, otherwise it could be some other game
   * (a is worth 100, dogworms, etc.)
   *
   * @generated from field: string variant_name = 3;
   */
  variantName: string;

  constructor(data?: PartialMessage<GameRules>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameRules";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameRules;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameRules;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameRules;

  static equals(a: GameRules | PlainMessage<GameRules> | undefined, b: GameRules | PlainMessage<GameRules> | undefined): boolean;
}

/**
 * @generated from message ipc.GameRequest
 */
export declare class GameRequest extends Message<GameRequest> {
  /**
   * @generated from field: string lexicon = 1;
   */
  lexicon: string;

  /**
   * @generated from field: ipc.GameRules rules = 2;
   */
  rules?: GameRules;

  /**
   * @generated from field: int32 initial_time_seconds = 3;
   */
  initialTimeSeconds: number;

  /**
   * @generated from field: int32 increment_seconds = 4;
   */
  incrementSeconds: number;

  /**
   * @generated from field: macondo.ChallengeRule challenge_rule = 5;
   */
  challengeRule: ChallengeRule;

  /**
   * @generated from field: ipc.GameMode game_mode = 6;
   */
  gameMode: GameMode;

  /**
   * @generated from field: ipc.RatingMode rating_mode = 7;
   */
  ratingMode: RatingMode;

  /**
   * @generated from field: string request_id = 8;
   */
  requestId: string;

  /**
   * @generated from field: int32 max_overtime_minutes = 9;
   */
  maxOvertimeMinutes: number;

  /**
   * @generated from field: bool player_vs_bot = 10;
   */
  playerVsBot: boolean;

  /**
   * @generated from field: string original_request_id = 11;
   */
  originalRequestId: string;

  /**
   * @generated from field: macondo.BotRequest.BotCode bot_type = 12;
   */
  botType: BotRequest_BotCode;

  constructor(data?: PartialMessage<GameRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameRequest;

  static equals(a: GameRequest | PlainMessage<GameRequest> | undefined, b: GameRequest | PlainMessage<GameRequest> | undefined): boolean;
}

/**
 * GameMetaEvent defines how we serialize meta events to the database.
 *
 * @generated from message ipc.GameMetaEvent
 */
export declare class GameMetaEvent extends Message<GameMetaEvent> {
  /**
   * @generated from field: string orig_event_id = 1;
   */
  origEventId: string;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: ipc.GameMetaEvent.EventType type = 3;
   */
  type: GameMetaEvent_EventType;

  /**
   * the player that performed the event.
   *
   * @generated from field: string player_id = 4;
   */
  playerId: string;

  /**
   * @generated from field: string game_id = 5;
   */
  gameId: string;

  /**
   * how long should this event remain active, in milliseconds?
   *
   * @generated from field: int32 expiry = 6;
   */
  expiry: number;

  constructor(data?: PartialMessage<GameMetaEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameMetaEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameMetaEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameMetaEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameMetaEvent;

  static equals(a: GameMetaEvent | PlainMessage<GameMetaEvent> | undefined, b: GameMetaEvent | PlainMessage<GameMetaEvent> | undefined): boolean;
}

/**
 * @generated from enum ipc.GameMetaEvent.EventType
 */
export declare enum GameMetaEvent_EventType {
  /**
   * These are "original events"
   *
   * @generated from enum value: REQUEST_ABORT = 0;
   */
  REQUEST_ABORT = 0,

  /**
   * Adjudication is just seen as a "nudge" on the front end.
   *
   * @generated from enum value: REQUEST_ADJUDICATION = 1;
   */
  REQUEST_ADJUDICATION = 1,

  /**
   * @generated from enum value: REQUEST_UNDO = 2;
   */
  REQUEST_UNDO = 2,

  /**
   * Are we going to implement this someday?
   *
   * @generated from enum value: REQUEST_ADJOURN = 3;
   */
  REQUEST_ADJOURN = 3,

  /**
   * And these are responses:
   * A user can accept an abort, or the client will auto-accept when time
   * expires:
   *
   * @generated from enum value: ABORT_ACCEPTED = 4;
   */
  ABORT_ACCEPTED = 4,

  /**
   * @generated from enum value: ABORT_DENIED = 5;
   */
  ABORT_DENIED = 5,

  /**
   * A user would not accept an adjudication. The client auto-accepts this
   * when time expires
   *
   * @generated from enum value: ADJUDICATION_ACCEPTED = 6;
   */
  ADJUDICATION_ACCEPTED = 6,

  /**
   * An adjudication is denied when the receiver responds positively to a
   * nudge.
   *
   * @generated from enum value: ADJUDICATION_DENIED = 7;
   */
  ADJUDICATION_DENIED = 7,

  /**
   * @generated from enum value: UNDO_ACCEPTED = 8;
   */
  UNDO_ACCEPTED = 8,

  /**
   * @generated from enum value: UNDO_DENIED = 9;
   */
  UNDO_DENIED = 9,

  /**
   * More:
   *
   * add X seconds at a time (30?) to opponent's clock
   *
   * @generated from enum value: ADD_TIME = 10;
   */
  ADD_TIME = 10,

  /**
   * Some meta events have a timer associated with them. Send this with the
   * original event id after time has expired.
   *
   * @generated from enum value: TIMER_EXPIRED = 11;
   */
  TIMER_EXPIRED = 11,
}

/**
 * A GameHistoryRefresher is sent to both players when the game starts,
 * and any observers at the time that they begin observing. It can also be sent
 * to a player who reconnects in the middle of a game.
 *
 * @generated from message ipc.GameHistoryRefresher
 */
export declare class GameHistoryRefresher extends Message<GameHistoryRefresher> {
  /**
   * The history contains all the moves, points, as well as the last known racks
   * of each player. It also implicitly contains whose turn it is at the moment,
   * by the events / turns in the history.
   * The front-end is responsible for showing all this information in a nice
   * format.
   * Note: the racks of each player should not be sent to both players, only
   * to observers. The back-end will have to be smart enough to overwrite
   * this information with a blank string before sending it. It might not
   * even be that great of a big deal, as I'm sure people can devise other ways
   * to cheat, but shrug.
   *
   * @generated from field: macondo.GameHistory history = 1;
   */
  history?: GameHistory;

  /**
   * These represent how much time each player has remaining on their clock
   * as of the "refresher", in milliseconds.
   * player1 is the player who is listed first in the game history, regardless
   * of whether they went first.
   *
   * @generated from field: int32 time_player1 = 2;
   */
  timePlayer1: number;

  /**
   * @generated from field: int32 time_player2 = 3;
   */
  timePlayer2: number;

  /**
   * @generated from field: int32 max_overtime_minutes = 4;
   */
  maxOvertimeMinutes: number;

  /**
   * outstanding_event refers to any possible outstanding game meta event that
   * has not yet been responded to or expired.
   *
   * @generated from field: ipc.GameMetaEvent outstanding_event = 5;
   */
  outstandingEvent?: GameMetaEvent;

  constructor(data?: PartialMessage<GameHistoryRefresher>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameHistoryRefresher";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameHistoryRefresher;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameHistoryRefresher;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameHistoryRefresher;

  static equals(a: GameHistoryRefresher | PlainMessage<GameHistoryRefresher> | undefined, b: GameHistoryRefresher | PlainMessage<GameHistoryRefresher> | undefined): boolean;
}

/**
 * @generated from message ipc.TournamentDataForGame
 */
export declare class TournamentDataForGame extends Message<TournamentDataForGame> {
  /**
   * The ID of the tournament
   *
   * @generated from field: string tid = 1;
   */
  tid: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * @generated from field: int32 game_index = 4;
   */
  gameIndex: number;

  constructor(data?: PartialMessage<TournamentDataForGame>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.TournamentDataForGame";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentDataForGame;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentDataForGame;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentDataForGame;

  static equals(a: TournamentDataForGame | PlainMessage<TournamentDataForGame> | undefined, b: TournamentDataForGame | PlainMessage<TournamentDataForGame> | undefined): boolean;
}

/**
 * Meta information about the player of a particular game.
 *
 * @generated from message ipc.PlayerInfo
 */
export declare class PlayerInfo extends Message<PlayerInfo> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string nickname = 2;
   */
  nickname: string;

  /**
   * @generated from field: string full_name = 3;
   */
  fullName: string;

  /**
   * @generated from field: string country_code = 4;
   */
  countryCode: string;

  /**
   * Rating for the particular mode of the game. String because it could be
   * provisional or some other strings.
   *
   * @generated from field: string rating = 5;
   */
  rating: string;

  /**
   * @generated from field: string title = 6;
   */
  title: string;

  /**
   * string avatar_url = 7; // the UserService now offers Avatar info
   *
   * @generated from field: bool is_bot = 8;
   */
  isBot: boolean;

  /**
   * first is true if the player went first
   *
   * @generated from field: bool first = 9;
   */
  first: boolean;

  constructor(data?: PartialMessage<PlayerInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.PlayerInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlayerInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlayerInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlayerInfo;

  static equals(a: PlayerInfo | PlainMessage<PlayerInfo> | undefined, b: PlayerInfo | PlainMessage<PlayerInfo> | undefined): boolean;
}

/**
 * @generated from message ipc.GameInfoResponse
 */
export declare class GameInfoResponse extends Message<GameInfoResponse> {
  /**
   * @generated from field: repeated ipc.PlayerInfo players = 1;
   */
  players: PlayerInfo[];

  /**
   * @generated from field: string time_control_name = 4;
   */
  timeControlName: string;

  /**
   * @generated from field: string tournament_id = 6;
   */
  tournamentId: string;

  /**
   * done - is game done?
   * bool done = 9;
   *
   * @generated from field: ipc.GameEndReason game_end_reason = 11;
   */
  gameEndReason: GameEndReason;

  /**
   * @generated from field: repeated int32 scores = 13;
   */
  scores: number[];

  /**
   * @generated from field: int32 winner = 14;
   */
  winner: number;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 15;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: string game_id = 16;
   */
  gameId: string;

  /**
   * @generated from field: google.protobuf.Timestamp last_update = 18;
   */
  lastUpdate?: Timestamp;

  /**
   * @generated from field: ipc.GameRequest game_request = 19;
   */
  gameRequest?: GameRequest;

  /**
   * @generated from field: string tournament_division = 20;
   */
  tournamentDivision: string;

  /**
   * @generated from field: int32 tournament_round = 21;
   */
  tournamentRound: number;

  /**
   * a game index within a round.
   *
   * @generated from field: int32 tournament_game_index = 22;
   */
  tournamentGameIndex: number;

  /**
   * @generated from field: ipc.GameType type = 23;
   */
  type: GameType;

  constructor(data?: PartialMessage<GameInfoResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameInfoResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameInfoResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameInfoResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameInfoResponse;

  static equals(a: GameInfoResponse | PlainMessage<GameInfoResponse> | undefined, b: GameInfoResponse | PlainMessage<GameInfoResponse> | undefined): boolean;
}

/**
 * @generated from message ipc.GameInfoResponses
 */
export declare class GameInfoResponses extends Message<GameInfoResponses> {
  /**
   * @generated from field: repeated ipc.GameInfoResponse game_info = 1;
   */
  gameInfo: GameInfoResponse[];

  constructor(data?: PartialMessage<GameInfoResponses>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameInfoResponses";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameInfoResponses;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameInfoResponses;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameInfoResponses;

  static equals(a: GameInfoResponses | PlainMessage<GameInfoResponses> | undefined, b: GameInfoResponses | PlainMessage<GameInfoResponses> | undefined): boolean;
}

/**
 * InstantiateGame is an internal message passed to gamesvc in order to
 * instantiate a game.
 *
 * @generated from message ipc.InstantiateGame
 */
export declare class InstantiateGame extends Message<InstantiateGame> {
  /**
   * @generated from field: repeated string user_ids = 1;
   */
  userIds: string[];

  /**
   * @generated from field: ipc.GameRequest game_request = 2;
   */
  gameRequest?: GameRequest;

  /**
   * assigned_first is -1 if random, or the player index in user_ids otherwise
   *
   * @generated from field: int32 assigned_first = 3;
   */
  assignedFirst: number;

  /**
   * @generated from field: ipc.TournamentDataForGame tournament_data = 4;
   */
  tournamentData?: TournamentDataForGame;

  constructor(data?: PartialMessage<InstantiateGame>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.InstantiateGame";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateGame;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateGame;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateGame;

  static equals(a: InstantiateGame | PlainMessage<InstantiateGame> | undefined, b: InstantiateGame | PlainMessage<InstantiateGame> | undefined): boolean;
}

/**
 * @generated from message ipc.GameDeletion
 */
export declare class GameDeletion extends Message<GameDeletion> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GameDeletion>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameDeletion";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameDeletion;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameDeletion;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameDeletion;

  static equals(a: GameDeletion | PlainMessage<GameDeletion> | undefined, b: GameDeletion | PlainMessage<GameDeletion> | undefined): boolean;
}

/**
 * @generated from message ipc.ActiveGamePlayer
 */
export declare class ActiveGamePlayer extends Message<ActiveGamePlayer> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<ActiveGamePlayer>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ActiveGamePlayer";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGamePlayer;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGamePlayer;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGamePlayer;

  static equals(a: ActiveGamePlayer | PlainMessage<ActiveGamePlayer> | undefined, b: ActiveGamePlayer | PlainMessage<ActiveGamePlayer> | undefined): boolean;
}

/**
 * @generated from message ipc.ActiveGameEntry
 */
export declare class ActiveGameEntry extends Message<ActiveGameEntry> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: repeated ipc.ActiveGamePlayer player = 2;
   */
  player: ActiveGamePlayer[];

  /**
   * time to live, in seconds
   *
   * @generated from field: int64 ttl = 3;
   */
  ttl: bigint;

  constructor(data?: PartialMessage<ActiveGameEntry>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ActiveGameEntry";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveGameEntry;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveGameEntry;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveGameEntry;

  static equals(a: ActiveGameEntry | PlainMessage<ActiveGameEntry> | undefined, b: ActiveGameEntry | PlainMessage<ActiveGameEntry> | undefined): boolean;
}

/**
 * @generated from message ipc.ReadyForGame
 */
export declare class ReadyForGame extends Message<ReadyForGame> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<ReadyForGame>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ReadyForGame";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadyForGame;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadyForGame;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadyForGame;

  static equals(a: ReadyForGame | PlainMessage<ReadyForGame> | undefined, b: ReadyForGame | PlainMessage<ReadyForGame> | undefined): boolean;
}

/**
 * The server will send back a ServerGameplayEvent to a ClientGameplayEvent.
 * The server will also send these asynchronously for opponent gameplay
 * events.
 *
 * @generated from message ipc.ServerGameplayEvent
 */
export declare class ServerGameplayEvent extends Message<ServerGameplayEvent> {
  /**
   * @generated from field: macondo.GameEvent event = 1;
   */
  event?: GameEvent;

  /**
   * @generated from field: string game_id = 2;
   */
  gameId: string;

  /**
   * @generated from field: string new_rack = 3;
   */
  newRack: string;

  /**
   * @generated from field: int32 time_remaining = 4;
   */
  timeRemaining: number;

  /**
   * @generated from field: macondo.PlayState playing = 5;
   */
  playing: PlayState;

  /**
   * the event has the nickname, but not the userid.
   *
   * @generated from field: string user_id = 6;
   */
  userId: string;

  constructor(data?: PartialMessage<ServerGameplayEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ServerGameplayEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerGameplayEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerGameplayEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerGameplayEvent;

  static equals(a: ServerGameplayEvent | PlainMessage<ServerGameplayEvent> | undefined, b: ServerGameplayEvent | PlainMessage<ServerGameplayEvent> | undefined): boolean;
}

/**
 * The server will send back a challenge result event only in the case of
 * a challenge. In all other cases, the server will send back a
 * ServerGameplayEvent.
 * A ServerChallengeResultEvent is sent back along with a list of
 * ServerGameplayEvents, instead of trying to reconstruct and send the
 * right incremental events. The reason is that the logic is complex and
 * has many special cases, and is already fully implemented in Macondo.
 * We don't wish to re-implement it both in this repo's backend and frontend.
 *
 * @generated from message ipc.ServerChallengeResultEvent
 */
export declare class ServerChallengeResultEvent extends Message<ServerChallengeResultEvent> {
  /**
   * @generated from field: bool valid = 1;
   */
  valid: boolean;

  /**
   * @generated from field: string challenger = 2;
   */
  challenger: string;

  /**
   * @generated from field: macondo.ChallengeRule challenge_rule = 3;
   */
  challengeRule: ChallengeRule;

  /**
   * @generated from field: string returned_tiles = 4;
   */
  returnedTiles: string;

  constructor(data?: PartialMessage<ServerChallengeResultEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ServerChallengeResultEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServerChallengeResultEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServerChallengeResultEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServerChallengeResultEvent;

  static equals(a: ServerChallengeResultEvent | PlainMessage<ServerChallengeResultEvent> | undefined, b: ServerChallengeResultEvent | PlainMessage<ServerChallengeResultEvent> | undefined): boolean;
}

/**
 * GameEndedEvent is always sent from the server to both clients.
 *
 * @generated from message ipc.GameEndedEvent
 */
export declare class GameEndedEvent extends Message<GameEndedEvent> {
  /**
   * @generated from field: map<string, int32> scores = 1;
   */
  scores: { [key: string]: number };

  /**
   * @generated from field: map<string, int32> new_ratings = 2;
   */
  newRatings: { [key: string]: number };

  /**
   * @generated from field: ipc.GameEndReason end_reason = 3;
   */
  endReason: GameEndReason;

  /**
   * The winner is not always the highest scoring player; one player can
   * time out. The end_reason should make it clear what happened.
   *
   * @generated from field: string winner = 4;
   */
  winner: string;

  /**
   * @generated from field: string loser = 5;
   */
  loser: string;

  /**
   * If it was a tie, the winner and loser above can be interchanged.
   *
   * @generated from field: bool tie = 6;
   */
  tie: boolean;

  /**
   * Time that the game ended
   *
   * @generated from field: int64 time = 7;
   */
  time: bigint;

  /**
   * @generated from field: map<string, int32> rating_deltas = 8;
   */
  ratingDeltas: { [key: string]: number };

  /**
   * Send the full game history again. This will have rack information in it.
   *
   * @generated from field: macondo.GameHistory history = 9;
   */
  history?: GameHistory;

  constructor(data?: PartialMessage<GameEndedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.GameEndedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameEndedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameEndedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameEndedEvent;

  static equals(a: GameEndedEvent | PlainMessage<GameEndedEvent> | undefined, b: GameEndedEvent | PlainMessage<GameEndedEvent> | undefined): boolean;
}

/**
 * RematchStartedEvent gets sent to a game for which there is a rematch.
 * It notifies that observers of the game that a rematch has started.
 *
 * @generated from message ipc.RematchStartedEvent
 */
export declare class RematchStartedEvent extends Message<RematchStartedEvent> {
  /**
   * rematch_game_id is the new game ID.
   *
   * @generated from field: string rematch_game_id = 1;
   */
  rematchGameId: string;

  constructor(data?: PartialMessage<RematchStartedEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.RematchStartedEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RematchStartedEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RematchStartedEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RematchStartedEvent;

  static equals(a: RematchStartedEvent | PlainMessage<RematchStartedEvent> | undefined, b: RematchStartedEvent | PlainMessage<RematchStartedEvent> | undefined): boolean;
}

/**
 * A NewGameEvent gets sent from the server to the involved clients when a new
 * game is about to begin. It should follow a SoughtGameProcessEvent.
 *
 * @generated from message ipc.NewGameEvent
 */
export declare class NewGameEvent extends Message<NewGameEvent> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  /**
   * These are the connection IDs of the requesting and accepting users.
   *
   * @generated from field: string requester_cid = 2;
   */
  requesterCid: string;

  /**
   * @generated from field: string accepter_cid = 3;
   */
  accepterCid: string;

  constructor(data?: PartialMessage<NewGameEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.NewGameEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewGameEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewGameEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewGameEvent;

  static equals(a: NewGameEvent | PlainMessage<NewGameEvent> | undefined, b: NewGameEvent | PlainMessage<NewGameEvent> | undefined): boolean;
}

/**
 * @generated from message ipc.TimedOut
 */
export declare class TimedOut extends Message<TimedOut> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<TimedOut>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.TimedOut";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimedOut;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimedOut;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimedOut;

  static equals(a: TimedOut | PlainMessage<TimedOut> | undefined, b: TimedOut | PlainMessage<TimedOut> | undefined): boolean;
}

