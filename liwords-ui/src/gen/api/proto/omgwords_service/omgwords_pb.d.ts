// @generated by protoc-gen-es v0.2.1
// @generated from file omgwords_service/omgwords.proto (package game_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {ChallengeRule, ClientGameplayEvent, GameDocument, GameRules, PlayerInfo} from "../ipc/omgwords_pb.js";

/**
 * GameEventResponse doesn't need to have any extra data. The GameEvent API
 * will still use sockets to broadcast game information.
 *
 * @generated from message game_service.GameEventResponse
 */
export declare class GameEventResponse extends Message<GameEventResponse> {
  constructor(data?: PartialMessage<GameEventResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameEventResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameEventResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameEventResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameEventResponse;

  static equals(a: GameEventResponse | PlainMessage<GameEventResponse> | undefined, b: GameEventResponse | PlainMessage<GameEventResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.TimePenaltyEvent
 */
export declare class TimePenaltyEvent extends Message<TimePenaltyEvent> {
  /**
   * @generated from field: int32 points_lost = 1;
   */
  pointsLost: number;

  constructor(data?: PartialMessage<TimePenaltyEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.TimePenaltyEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimePenaltyEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimePenaltyEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimePenaltyEvent;

  static equals(a: TimePenaltyEvent | PlainMessage<TimePenaltyEvent> | undefined, b: TimePenaltyEvent | PlainMessage<TimePenaltyEvent> | undefined): boolean;
}

/**
 * @generated from message game_service.ChallengeBonusPointsEvent
 */
export declare class ChallengeBonusPointsEvent extends Message<ChallengeBonusPointsEvent> {
  /**
   * @generated from field: int32 points_gained = 1;
   */
  pointsGained: number;

  constructor(data?: PartialMessage<ChallengeBonusPointsEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.ChallengeBonusPointsEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeBonusPointsEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeBonusPointsEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeBonusPointsEvent;

  static equals(a: ChallengeBonusPointsEvent | PlainMessage<ChallengeBonusPointsEvent> | undefined, b: ChallengeBonusPointsEvent | PlainMessage<ChallengeBonusPointsEvent> | undefined): boolean;
}

/**
 * metadata
 *
 * @generated from message game_service.CreateBroadcastGameRequest
 */
export declare class CreateBroadcastGameRequest extends Message<CreateBroadcastGameRequest> {
  /**
   * @generated from field: repeated ipc.PlayerInfo playersInfo = 1;
   */
  playersInfo: PlayerInfo[];

  /**
   * @generated from field: string lexicon = 2;
   */
  lexicon: string;

  /**
   * @generated from field: ipc.GameRules rules = 3;
   */
  rules?: GameRules;

  /**
   * @generated from field: ipc.ChallengeRule challenge_rule = 4;
   */
  challengeRule: ChallengeRule;

  /**
   * public will make this game public upon creation - i.e., findable
   * within the interface. Otherwise, a game ID is required.
   *
   * @generated from field: bool public = 5;
   */
  public: boolean;

  constructor(data?: PartialMessage<CreateBroadcastGameRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.CreateBroadcastGameRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBroadcastGameRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBroadcastGameRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBroadcastGameRequest;

  static equals(a: CreateBroadcastGameRequest | PlainMessage<CreateBroadcastGameRequest> | undefined, b: CreateBroadcastGameRequest | PlainMessage<CreateBroadcastGameRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.CreateBroadcastGameResponse
 */
export declare class CreateBroadcastGameResponse extends Message<CreateBroadcastGameResponse> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<CreateBroadcastGameResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.CreateBroadcastGameResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateBroadcastGameResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateBroadcastGameResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateBroadcastGameResponse;

  static equals(a: CreateBroadcastGameResponse | PlainMessage<CreateBroadcastGameResponse> | undefined, b: CreateBroadcastGameResponse | PlainMessage<CreateBroadcastGameResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.BroadcastGamePrivacy
 */
export declare class BroadcastGamePrivacy extends Message<BroadcastGamePrivacy> {
  /**
   * @generated from field: bool public = 1;
   */
  public: boolean;

  constructor(data?: PartialMessage<BroadcastGamePrivacy>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.BroadcastGamePrivacy";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BroadcastGamePrivacy;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BroadcastGamePrivacy;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BroadcastGamePrivacy;

  static equals(a: BroadcastGamePrivacy | PlainMessage<BroadcastGamePrivacy> | undefined, b: BroadcastGamePrivacy | PlainMessage<BroadcastGamePrivacy> | undefined): boolean;
}

/**
 * @generated from message game_service.GetGamesForEditorRequest
 */
export declare class GetGamesForEditorRequest extends Message<GetGamesForEditorRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: int32 limit = 2;
   */
  limit: number;

  /**
   * @generated from field: int32 offset = 3;
   */
  offset: number;

  /**
   * @generated from field: bool unfinished = 4;
   */
  unfinished: boolean;

  constructor(data?: PartialMessage<GetGamesForEditorRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GetGamesForEditorRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGamesForEditorRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGamesForEditorRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGamesForEditorRequest;

  static equals(a: GetGamesForEditorRequest | PlainMessage<GetGamesForEditorRequest> | undefined, b: GetGamesForEditorRequest | PlainMessage<GetGamesForEditorRequest> | undefined): boolean;
}

/**
 * Assume we can never have so many unfinished games that we'd need limits and
 * offsets. Ideally we should only have one unfinished game per authed player at
 * a time.
 *
 * @generated from message game_service.GetMyUnfinishedGamesRequest
 */
export declare class GetMyUnfinishedGamesRequest extends Message<GetMyUnfinishedGamesRequest> {
  constructor(data?: PartialMessage<GetMyUnfinishedGamesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GetMyUnfinishedGamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMyUnfinishedGamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMyUnfinishedGamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMyUnfinishedGamesRequest;

  static equals(a: GetMyUnfinishedGamesRequest | PlainMessage<GetMyUnfinishedGamesRequest> | undefined, b: GetMyUnfinishedGamesRequest | PlainMessage<GetMyUnfinishedGamesRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.BroadcastGamesResponse
 */
export declare class BroadcastGamesResponse extends Message<BroadcastGamesResponse> {
  /**
   * @generated from field: repeated game_service.BroadcastGamesResponse.BroadcastGame games = 1;
   */
  games: BroadcastGamesResponse_BroadcastGame[];

  constructor(data?: PartialMessage<BroadcastGamesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.BroadcastGamesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BroadcastGamesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BroadcastGamesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BroadcastGamesResponse;

  static equals(a: BroadcastGamesResponse | PlainMessage<BroadcastGamesResponse> | undefined, b: BroadcastGamesResponse | PlainMessage<BroadcastGamesResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.BroadcastGamesResponse.BroadcastGame
 */
export declare class BroadcastGamesResponse_BroadcastGame extends Message<BroadcastGamesResponse_BroadcastGame> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  /**
   * @generated from field: string creator_id = 2;
   */
  creatorId: string;

  /**
   * @generated from field: bool private = 3;
   */
  private: boolean;

  /**
   * @generated from field: bool finished = 4;
   */
  finished: boolean;

  constructor(data?: PartialMessage<BroadcastGamesResponse_BroadcastGame>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.BroadcastGamesResponse.BroadcastGame";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BroadcastGamesResponse_BroadcastGame;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BroadcastGamesResponse_BroadcastGame;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BroadcastGamesResponse_BroadcastGame;

  static equals(a: BroadcastGamesResponse_BroadcastGame | PlainMessage<BroadcastGamesResponse_BroadcastGame> | undefined, b: BroadcastGamesResponse_BroadcastGame | PlainMessage<BroadcastGamesResponse_BroadcastGame> | undefined): boolean;
}

/**
 * @generated from message game_service.AnnotatedGameEvent
 */
export declare class AnnotatedGameEvent extends Message<AnnotatedGameEvent> {
  /**
   * @generated from field: ipc.ClientGameplayEvent event = 1;
   */
  event?: ClientGameplayEvent;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  constructor(data?: PartialMessage<AnnotatedGameEvent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.AnnotatedGameEvent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AnnotatedGameEvent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AnnotatedGameEvent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AnnotatedGameEvent;

  static equals(a: AnnotatedGameEvent | PlainMessage<AnnotatedGameEvent> | undefined, b: AnnotatedGameEvent | PlainMessage<AnnotatedGameEvent> | undefined): boolean;
}

/**
 * @generated from message game_service.GetGameDocumentRequest
 */
export declare class GetGameDocumentRequest extends Message<GetGameDocumentRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GetGameDocumentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GetGameDocumentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGameDocumentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGameDocumentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGameDocumentRequest;

  static equals(a: GetGameDocumentRequest | PlainMessage<GetGameDocumentRequest> | undefined, b: GetGameDocumentRequest | PlainMessage<GetGameDocumentRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.DeleteBroadcastGameRequest
 */
export declare class DeleteBroadcastGameRequest extends Message<DeleteBroadcastGameRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<DeleteBroadcastGameRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.DeleteBroadcastGameRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBroadcastGameRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBroadcastGameRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBroadcastGameRequest;

  static equals(a: DeleteBroadcastGameRequest | PlainMessage<DeleteBroadcastGameRequest> | undefined, b: DeleteBroadcastGameRequest | PlainMessage<DeleteBroadcastGameRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.DeleteBroadcastGameResponse
 */
export declare class DeleteBroadcastGameResponse extends Message<DeleteBroadcastGameResponse> {
  constructor(data?: PartialMessage<DeleteBroadcastGameResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.DeleteBroadcastGameResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteBroadcastGameResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteBroadcastGameResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteBroadcastGameResponse;

  static equals(a: DeleteBroadcastGameResponse | PlainMessage<DeleteBroadcastGameResponse> | undefined, b: DeleteBroadcastGameResponse | PlainMessage<DeleteBroadcastGameResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.ReplaceDocumentRequest
 */
export declare class ReplaceDocumentRequest extends Message<ReplaceDocumentRequest> {
  /**
   * @generated from field: ipc.GameDocument document = 1;
   */
  document?: GameDocument;

  constructor(data?: PartialMessage<ReplaceDocumentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.ReplaceDocumentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceDocumentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceDocumentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceDocumentRequest;

  static equals(a: ReplaceDocumentRequest | PlainMessage<ReplaceDocumentRequest> | undefined, b: ReplaceDocumentRequest | PlainMessage<ReplaceDocumentRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.PatchDocumentRequest
 */
export declare class PatchDocumentRequest extends Message<PatchDocumentRequest> {
  /**
   * @generated from field: ipc.GameDocument document = 1;
   */
  document?: GameDocument;

  constructor(data?: PartialMessage<PatchDocumentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.PatchDocumentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PatchDocumentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PatchDocumentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PatchDocumentRequest;

  static equals(a: PatchDocumentRequest | PlainMessage<PatchDocumentRequest> | undefined, b: PatchDocumentRequest | PlainMessage<PatchDocumentRequest> | undefined): boolean;
}

