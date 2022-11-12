// @generated by protoc-gen-es v0.2.1
// @generated from file tournament_service/tournament_service.proto (package tournament_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {GameEndReason, GameRequest} from "../ipc/omgwords_pb.js";
import type {RoundControl, TournamentGameEndedEvent, TournamentGameResult} from "../ipc/tournament_pb.js";

/**
 * @generated from enum tournament_service.TType
 */
export declare enum TType {
  /**
   * A Standard tournament
   *
   * @generated from enum value: STANDARD = 0;
   */
  STANDARD = 0,

  /**
   * A new "clubhouse"
   *
   * @generated from enum value: CLUB = 1;
   */
  CLUB = 1,

  /**
   * A club session or child tournament.
   *
   * @generated from enum value: CHILD = 2;
   */
  CHILD = 2,

  /**
   * A legacy tournament
   *
   * @generated from enum value: LEGACY = 3;
   */
  LEGACY = 3,
}

/**
 * @generated from message tournament_service.StartRoundRequest
 */
export declare class StartRoundRequest extends Message<StartRoundRequest> {
  /**
   * @generated from field: string tournament_id = 1;
   */
  tournamentId: string;

  /**
   * @generated from field: int32 round = 2;
   */
  round: number;

  constructor(data?: PartialMessage<StartRoundRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.StartRoundRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StartRoundRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StartRoundRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StartRoundRequest;

  static equals(a: StartRoundRequest | PlainMessage<StartRoundRequest> | undefined, b: StartRoundRequest | PlainMessage<StartRoundRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.NewTournamentRequest
 */
export declare class NewTournamentRequest extends Message<NewTournamentRequest> {
  /**
   * If slug is not assigned, a random ID will be chosen.
   *
   * @generated from field: string slug = 1;
   */
  slug: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: repeated string director_usernames = 4;
   */
  directorUsernames: string[];

  /**
   * @generated from field: tournament_service.TType type = 5;
   */
  type: TType;

  constructor(data?: PartialMessage<NewTournamentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.NewTournamentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewTournamentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewTournamentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewTournamentRequest;

  static equals(a: NewTournamentRequest | PlainMessage<NewTournamentRequest> | undefined, b: NewTournamentRequest | PlainMessage<NewTournamentRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentMetadata
 */
export declare class TournamentMetadata extends Message<TournamentMetadata> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * description is the markdown information for the tournament on the
   * right-hand side
   *
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: string slug = 4;
   */
  slug: string;

  /**
   * @generated from field: tournament_service.TType type = 5;
   */
  type: TType;

  /**
   * a caption that shows up for the tournament in various places.
   *
   * @generated from field: string disclaimer = 6;
   */
  disclaimer: string;

  /**
   * tile_style if set is default
   *
   * @generated from field: string tile_style = 7;
   */
  tileStyle: string;

  /**
   * board_style if set is default
   *
   * @generated from field: string board_style = 8;
   */
  boardStyle: string;

  /**
   * for clubs (not tournaments) we want to be able to hard-code settings
   * if the following parameter is set.
   *
   * @generated from field: ipc.GameRequest default_club_settings = 9;
   */
  defaultClubSettings?: GameRequest;

  /**
   * When setting the game request, some clubs would like some parameters
   * to be more freeform (for example, lexicon option or time setting).
   * The following parameter is a list of field names that are freeform.
   * The acceptable values are:
   * lexicon, time, challenge_rule, rating_mode, variant_name
   *
   * @generated from field: repeated string freeform_club_setting_fields = 10;
   */
  freeformClubSettingFields: string[];

  /**
   * a simple password for this tournament. Without it you can't see what is
   * happening. Likely front-end only implementation, although password
   * will be at least hashed. For clubs that want to be more private.
   *
   * @generated from field: string password = 11;
   */
  password: string;

  /**
   * a url to a logo in the metadata card, disclaimer card and center square.
   *
   * @generated from field: string logo = 12;
   */
  logo: string;

  /**
   * an override color for the gradient in the tournament info
   *
   * @generated from field: string color = 13;
   */
  color: string;

  /**
   * @generated from field: bool private_analysis = 14;
   */
  privateAnalysis: boolean;

  /**
   * irl_mode allows tournament mode to be used for pairings for an
   * over-the-board tournament, and will not enforce that usernames
   * are registered on the site.
   *
   * @generated from field: bool irl_mode = 15;
   */
  irlMode: boolean;

  constructor(data?: PartialMessage<TournamentMetadata>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentMetadata";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentMetadata;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentMetadata;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentMetadata;

  static equals(a: TournamentMetadata | PlainMessage<TournamentMetadata> | undefined, b: TournamentMetadata | PlainMessage<TournamentMetadata> | undefined): boolean;
}

/**
 * @generated from message tournament_service.SetTournamentMetadataRequest
 */
export declare class SetTournamentMetadataRequest extends Message<SetTournamentMetadataRequest> {
  /**
   * @generated from field: tournament_service.TournamentMetadata metadata = 1;
   */
  metadata?: TournamentMetadata;

  /**
   * set_only_specified sets only the specified fields,
   * and not the entire metadata.
   * non-zero-value fields will be treated as "specified"
   *
   * @generated from field: bool set_only_specified = 2;
   */
  setOnlySpecified: boolean;

  constructor(data?: PartialMessage<SetTournamentMetadataRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.SetTournamentMetadataRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetTournamentMetadataRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetTournamentMetadataRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetTournamentMetadataRequest;

  static equals(a: SetTournamentMetadataRequest | PlainMessage<SetTournamentMetadataRequest> | undefined, b: SetTournamentMetadataRequest | PlainMessage<SetTournamentMetadataRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.SingleRoundControlsRequest
 */
export declare class SingleRoundControlsRequest extends Message<SingleRoundControlsRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * @generated from field: ipc.RoundControl round_controls = 4;
   */
  roundControls?: RoundControl;

  constructor(data?: PartialMessage<SingleRoundControlsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.SingleRoundControlsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SingleRoundControlsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SingleRoundControlsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SingleRoundControlsRequest;

  static equals(a: SingleRoundControlsRequest | PlainMessage<SingleRoundControlsRequest> | undefined, b: SingleRoundControlsRequest | PlainMessage<SingleRoundControlsRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.PairRoundRequest
 */
export declare class PairRoundRequest extends Message<PairRoundRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * @generated from field: bool preserve_byes = 4;
   */
  preserveByes: boolean;

  /**
   * @generated from field: bool delete_pairings = 5;
   */
  deletePairings: boolean;

  constructor(data?: PartialMessage<PairRoundRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.PairRoundRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PairRoundRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PairRoundRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PairRoundRequest;

  static equals(a: PairRoundRequest | PlainMessage<PairRoundRequest> | undefined, b: PairRoundRequest | PlainMessage<PairRoundRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentDivisionRequest
 */
export declare class TournamentDivisionRequest extends Message<TournamentDivisionRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  constructor(data?: PartialMessage<TournamentDivisionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentDivisionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentDivisionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentDivisionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentDivisionRequest;

  static equals(a: TournamentDivisionRequest | PlainMessage<TournamentDivisionRequest> | undefined, b: TournamentDivisionRequest | PlainMessage<TournamentDivisionRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentPairingRequest
 */
export declare class TournamentPairingRequest extends Message<TournamentPairingRequest> {
  /**
   * @generated from field: string player_one_id = 1;
   */
  playerOneId: string;

  /**
   * @generated from field: string player_two_id = 2;
   */
  playerTwoId: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * If player_one_id and player_two_id are the same, we should specify what
   * we want the result to be (BYE, FORFEIT_LOSS, VOID)
   *
   * @generated from field: ipc.TournamentGameResult self_play_result = 4;
   */
  selfPlayResult: TournamentGameResult;

  constructor(data?: PartialMessage<TournamentPairingRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentPairingRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentPairingRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentPairingRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentPairingRequest;

  static equals(a: TournamentPairingRequest | PlainMessage<TournamentPairingRequest> | undefined, b: TournamentPairingRequest | PlainMessage<TournamentPairingRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentPairingsRequest
 */
export declare class TournamentPairingsRequest extends Message<TournamentPairingsRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: repeated tournament_service.TournamentPairingRequest pairings = 3;
   */
  pairings: TournamentPairingRequest[];

  constructor(data?: PartialMessage<TournamentPairingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentPairingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentPairingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentPairingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentPairingsRequest;

  static equals(a: TournamentPairingsRequest | PlainMessage<TournamentPairingsRequest> | undefined, b: TournamentPairingsRequest | PlainMessage<TournamentPairingsRequest> | undefined): boolean;
}

/**
 * TournamentResultOverrideRequest is sent when a score needs to be edited
 * or added by a director. Note that player one and player two need to be
 * the players that went first and second, respectively; otherwise,
 * we will not be able to accurately track firsts/seconds.
 *
 * @generated from message tournament_service.TournamentResultOverrideRequest
 */
export declare class TournamentResultOverrideRequest extends Message<TournamentResultOverrideRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: string player_one_id = 3;
   */
  playerOneId: string;

  /**
   * @generated from field: string player_two_id = 4;
   */
  playerTwoId: string;

  /**
   * @generated from field: int32 round = 5;
   */
  round: number;

  /**
   * @generated from field: int32 player_one_score = 6;
   */
  playerOneScore: number;

  /**
   * @generated from field: int32 player_two_score = 7;
   */
  playerTwoScore: number;

  /**
   * @generated from field: ipc.TournamentGameResult player_one_result = 8;
   */
  playerOneResult: TournamentGameResult;

  /**
   * @generated from field: ipc.TournamentGameResult player_two_result = 9;
   */
  playerTwoResult: TournamentGameResult;

  /**
   * @generated from field: ipc.GameEndReason game_end_reason = 10;
   */
  gameEndReason: GameEndReason;

  /**
   * @generated from field: bool amendment = 11;
   */
  amendment: boolean;

  /**
   * @generated from field: int32 game_index = 12;
   */
  gameIndex: number;

  constructor(data?: PartialMessage<TournamentResultOverrideRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentResultOverrideRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentResultOverrideRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentResultOverrideRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentResultOverrideRequest;

  static equals(a: TournamentResultOverrideRequest | PlainMessage<TournamentResultOverrideRequest> | undefined, b: TournamentResultOverrideRequest | PlainMessage<TournamentResultOverrideRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentStartRoundCountdownRequest
 */
export declare class TournamentStartRoundCountdownRequest extends Message<TournamentStartRoundCountdownRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string division = 2;
   */
  division: string;

  /**
   * @generated from field: int32 round = 3;
   */
  round: number;

  /**
   * @generated from field: bool start_all_rounds = 4;
   */
  startAllRounds: boolean;

  constructor(data?: PartialMessage<TournamentStartRoundCountdownRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentStartRoundCountdownRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentStartRoundCountdownRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentStartRoundCountdownRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentStartRoundCountdownRequest;

  static equals(a: TournamentStartRoundCountdownRequest | PlainMessage<TournamentStartRoundCountdownRequest> | undefined, b: TournamentStartRoundCountdownRequest | PlainMessage<TournamentStartRoundCountdownRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentResponse
 */
export declare class TournamentResponse extends Message<TournamentResponse> {
  constructor(data?: PartialMessage<TournamentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentResponse;

  static equals(a: TournamentResponse | PlainMessage<TournamentResponse> | undefined, b: TournamentResponse | PlainMessage<TournamentResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.NewTournamentResponse
 */
export declare class NewTournamentResponse extends Message<NewTournamentResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string slug = 2;
   */
  slug: string;

  constructor(data?: PartialMessage<NewTournamentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.NewTournamentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewTournamentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewTournamentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewTournamentResponse;

  static equals(a: NewTournamentResponse | PlainMessage<NewTournamentResponse> | undefined, b: NewTournamentResponse | PlainMessage<NewTournamentResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.GetTournamentMetadataRequest
 */
export declare class GetTournamentMetadataRequest extends Message<GetTournamentMetadataRequest> {
  /**
   * User must provide the ID, or the slug (but not both)
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string slug = 2;
   */
  slug: string;

  constructor(data?: PartialMessage<GetTournamentMetadataRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.GetTournamentMetadataRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTournamentMetadataRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTournamentMetadataRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTournamentMetadataRequest;

  static equals(a: GetTournamentMetadataRequest | PlainMessage<GetTournamentMetadataRequest> | undefined, b: GetTournamentMetadataRequest | PlainMessage<GetTournamentMetadataRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.GetTournamentRequest
 */
export declare class GetTournamentRequest extends Message<GetTournamentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<GetTournamentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.GetTournamentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTournamentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTournamentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTournamentRequest;

  static equals(a: GetTournamentRequest | PlainMessage<GetTournamentRequest> | undefined, b: GetTournamentRequest | PlainMessage<GetTournamentRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.FinishTournamentRequest
 */
export declare class FinishTournamentRequest extends Message<FinishTournamentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<FinishTournamentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.FinishTournamentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FinishTournamentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FinishTournamentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FinishTournamentRequest;

  static equals(a: FinishTournamentRequest | PlainMessage<FinishTournamentRequest> | undefined, b: FinishTournamentRequest | PlainMessage<FinishTournamentRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.TournamentMetadataResponse
 */
export declare class TournamentMetadataResponse extends Message<TournamentMetadataResponse> {
  /**
   * @generated from field: tournament_service.TournamentMetadata metadata = 1;
   */
  metadata?: TournamentMetadata;

  /**
   * directors are not part of the metadata. We decided to make those
   * individually addable/removable (See AddDirectors)
   *
   * @generated from field: repeated string directors = 2;
   */
  directors: string[];

  constructor(data?: PartialMessage<TournamentMetadataResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.TournamentMetadataResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TournamentMetadataResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TournamentMetadataResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TournamentMetadataResponse;

  static equals(a: TournamentMetadataResponse | PlainMessage<TournamentMetadataResponse> | undefined, b: TournamentMetadataResponse | PlainMessage<TournamentMetadataResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.RecentGamesRequest
 */
export declare class RecentGamesRequest extends Message<RecentGamesRequest> {
  /**
   * tournament id
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: int32 num_games = 2;
   */
  numGames: number;

  /**
   * @generated from field: int32 offset = 3;
   */
  offset: number;

  constructor(data?: PartialMessage<RecentGamesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.RecentGamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecentGamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecentGamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecentGamesRequest;

  static equals(a: RecentGamesRequest | PlainMessage<RecentGamesRequest> | undefined, b: RecentGamesRequest | PlainMessage<RecentGamesRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.RecentGamesResponse
 */
export declare class RecentGamesResponse extends Message<RecentGamesResponse> {
  /**
   * @generated from field: repeated ipc.TournamentGameEndedEvent games = 1;
   */
  games: TournamentGameEndedEvent[];

  constructor(data?: PartialMessage<RecentGamesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.RecentGamesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecentGamesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecentGamesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecentGamesResponse;

  static equals(a: RecentGamesResponse | PlainMessage<RecentGamesResponse> | undefined, b: RecentGamesResponse | PlainMessage<RecentGamesResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.UnstartTournamentRequest
 */
export declare class UnstartTournamentRequest extends Message<UnstartTournamentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<UnstartTournamentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.UnstartTournamentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnstartTournamentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnstartTournamentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnstartTournamentRequest;

  static equals(a: UnstartTournamentRequest | PlainMessage<UnstartTournamentRequest> | undefined, b: UnstartTournamentRequest | PlainMessage<UnstartTournamentRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.UncheckInRequest
 */
export declare class UncheckInRequest extends Message<UncheckInRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<UncheckInRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.UncheckInRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UncheckInRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UncheckInRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UncheckInRequest;

  static equals(a: UncheckInRequest | PlainMessage<UncheckInRequest> | undefined, b: UncheckInRequest | PlainMessage<UncheckInRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.CheckinRequest
 */
export declare class CheckinRequest extends Message<CheckinRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  constructor(data?: PartialMessage<CheckinRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.CheckinRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckinRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckinRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckinRequest;

  static equals(a: CheckinRequest | PlainMessage<CheckinRequest> | undefined, b: CheckinRequest | PlainMessage<CheckinRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.ExportTournamentRequest
 */
export declare class ExportTournamentRequest extends Message<ExportTournamentRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string format = 2;
   */
  format: string;

  constructor(data?: PartialMessage<ExportTournamentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.ExportTournamentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportTournamentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportTournamentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportTournamentRequest;

  static equals(a: ExportTournamentRequest | PlainMessage<ExportTournamentRequest> | undefined, b: ExportTournamentRequest | PlainMessage<ExportTournamentRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.ExportTournamentResponse
 */
export declare class ExportTournamentResponse extends Message<ExportTournamentResponse> {
  /**
   * @generated from field: string exported = 1;
   */
  exported: string;

  constructor(data?: PartialMessage<ExportTournamentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.ExportTournamentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportTournamentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportTournamentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportTournamentResponse;

  static equals(a: ExportTournamentResponse | PlainMessage<ExportTournamentResponse> | undefined, b: ExportTournamentResponse | PlainMessage<ExportTournamentResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.NewClubSessionRequest
 */
export declare class NewClubSessionRequest extends Message<NewClubSessionRequest> {
  /**
   * date is the date of the session
   *
   * @generated from field: google.protobuf.Timestamp date = 1;
   */
  date?: Timestamp;

  /**
   * @generated from field: string club_id = 2;
   */
  clubId: string;

  constructor(data?: PartialMessage<NewClubSessionRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.NewClubSessionRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NewClubSessionRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NewClubSessionRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NewClubSessionRequest;

  static equals(a: NewClubSessionRequest | PlainMessage<NewClubSessionRequest> | undefined, b: NewClubSessionRequest | PlainMessage<NewClubSessionRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.ClubSessionResponse
 */
export declare class ClubSessionResponse extends Message<ClubSessionResponse> {
  /**
   * Note that club sessions are tournaments in our backend. We return
   * the created tournament ID here:
   *
   * @generated from field: string tournament_id = 1;
   */
  tournamentId: string;

  /**
   * slug will look like /club/{club_name}/{date}. It should be
   * case-insensitive.
   *
   * @generated from field: string slug = 2;
   */
  slug: string;

  constructor(data?: PartialMessage<ClubSessionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.ClubSessionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClubSessionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClubSessionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClubSessionResponse;

  static equals(a: ClubSessionResponse | PlainMessage<ClubSessionResponse> | undefined, b: ClubSessionResponse | PlainMessage<ClubSessionResponse> | undefined): boolean;
}

/**
 * @generated from message tournament_service.RecentClubSessionsRequest
 */
export declare class RecentClubSessionsRequest extends Message<RecentClubSessionsRequest> {
  /**
   * club_id
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: int32 count = 2;
   */
  count: number;

  /**
   * @generated from field: int32 offset = 3;
   */
  offset: number;

  constructor(data?: PartialMessage<RecentClubSessionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.RecentClubSessionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecentClubSessionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecentClubSessionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecentClubSessionsRequest;

  static equals(a: RecentClubSessionsRequest | PlainMessage<RecentClubSessionsRequest> | undefined, b: RecentClubSessionsRequest | PlainMessage<RecentClubSessionsRequest> | undefined): boolean;
}

/**
 * @generated from message tournament_service.ClubSessionsResponse
 */
export declare class ClubSessionsResponse extends Message<ClubSessionsResponse> {
  /**
   * @generated from field: repeated tournament_service.ClubSessionResponse sessions = 1;
   */
  sessions: ClubSessionResponse[];

  constructor(data?: PartialMessage<ClubSessionsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "tournament_service.ClubSessionsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClubSessionsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClubSessionsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClubSessionsResponse;

  static equals(a: ClubSessionsResponse | PlainMessage<ClubSessionsResponse> | undefined, b: ClubSessionsResponse | PlainMessage<ClubSessionsResponse> | undefined): boolean;
}

