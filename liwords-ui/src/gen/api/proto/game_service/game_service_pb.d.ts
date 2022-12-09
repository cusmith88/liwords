// @generated by protoc-gen-es v0.2.1
// @generated from file game_service/game_service.proto (package game_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import type {GameHistory} from "../macondo/macondo_pb.js";
import type {GameDocument} from "../ipc/omgwords_pb.js";

/**
 * Meta information about a game, including its players.
 *
 * @generated from message game_service.GameInfoRequest
 */
export declare class GameInfoRequest extends Message<GameInfoRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GameInfoRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameInfoRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameInfoRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameInfoRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameInfoRequest;

  static equals(a: GameInfoRequest | PlainMessage<GameInfoRequest> | undefined, b: GameInfoRequest | PlainMessage<GameInfoRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.GCGRequest
 */
export declare class GCGRequest extends Message<GCGRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GCGRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GCGRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GCGRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GCGRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GCGRequest;

  static equals(a: GCGRequest | PlainMessage<GCGRequest> | undefined, b: GCGRequest | PlainMessage<GCGRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.GameHistoryRequest
 */
export declare class GameHistoryRequest extends Message<GameHistoryRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GameHistoryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameHistoryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameHistoryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameHistoryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameHistoryRequest;

  static equals(a: GameHistoryRequest | PlainMessage<GameHistoryRequest> | undefined, b: GameHistoryRequest | PlainMessage<GameHistoryRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.GameDocumentRequest
 */
export declare class GameDocumentRequest extends Message<GameDocumentRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GameDocumentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameDocumentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameDocumentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameDocumentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameDocumentRequest;

  static equals(a: GameDocumentRequest | PlainMessage<GameDocumentRequest> | undefined, b: GameDocumentRequest | PlainMessage<GameDocumentRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.GCGResponse
 */
export declare class GCGResponse extends Message<GCGResponse> {
  /**
   * @generated from field: string gcg = 1;
   */
  gcg: string;

  constructor(data?: PartialMessage<GCGResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GCGResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GCGResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GCGResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GCGResponse;

  static equals(a: GCGResponse | PlainMessage<GCGResponse> | undefined, b: GCGResponse | PlainMessage<GCGResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.GameHistoryResponse
 */
export declare class GameHistoryResponse extends Message<GameHistoryResponse> {
  /**
   * @generated from field: macondo.GameHistory history = 1;
   */
  history?: GameHistory;

  constructor(data?: PartialMessage<GameHistoryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameHistoryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameHistoryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameHistoryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameHistoryResponse;

  static equals(a: GameHistoryResponse | PlainMessage<GameHistoryResponse> | undefined, b: GameHistoryResponse | PlainMessage<GameHistoryResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.GameDocumentResponse
 */
export declare class GameDocumentResponse extends Message<GameDocumentResponse> {
  /**
   * @generated from field: ipc.GameDocument document = 1;
   */
  document?: GameDocument;

  constructor(data?: PartialMessage<GameDocumentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.GameDocumentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameDocumentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameDocumentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameDocumentResponse;

  static equals(a: GameDocumentResponse | PlainMessage<GameDocumentResponse> | undefined, b: GameDocumentResponse | PlainMessage<GameDocumentResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.RecentGamesRequest
 */
export declare class RecentGamesRequest extends Message<RecentGamesRequest> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

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
  static readonly typeName = "game_service.RecentGamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecentGamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecentGamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecentGamesRequest;

  static equals(a: RecentGamesRequest | PlainMessage<RecentGamesRequest> | undefined, b: RecentGamesRequest | PlainMessage<RecentGamesRequest> | undefined): boolean;
}

/**
 * @generated from message game_service.StreakInfoResponse
 */
export declare class StreakInfoResponse extends Message<StreakInfoResponse> {
  /**
   * @generated from field: repeated game_service.StreakInfoResponse.SingleGameInfo streak = 1;
   */
  streak: StreakInfoResponse_SingleGameInfo[];

  /**
   * @generated from field: repeated game_service.StreakInfoResponse.PlayerInfo playersInfo = 3;
   */
  playersInfo: StreakInfoResponse_PlayerInfo[];

  constructor(data?: PartialMessage<StreakInfoResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.StreakInfoResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreakInfoResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreakInfoResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreakInfoResponse;

  static equals(a: StreakInfoResponse | PlainMessage<StreakInfoResponse> | undefined, b: StreakInfoResponse | PlainMessage<StreakInfoResponse> | undefined): boolean;
}

/**
 * @generated from message game_service.StreakInfoResponse.SingleGameInfo
 */
export declare class StreakInfoResponse_SingleGameInfo extends Message<StreakInfoResponse_SingleGameInfo> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  /**
   * the index in `players` or -1 if no winner (tie)
   *
   * @generated from field: int32 winner = 3;
   */
  winner: number;

  constructor(data?: PartialMessage<StreakInfoResponse_SingleGameInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.StreakInfoResponse.SingleGameInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreakInfoResponse_SingleGameInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreakInfoResponse_SingleGameInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreakInfoResponse_SingleGameInfo;

  static equals(a: StreakInfoResponse_SingleGameInfo | PlainMessage<StreakInfoResponse_SingleGameInfo> | undefined, b: StreakInfoResponse_SingleGameInfo | PlainMessage<StreakInfoResponse_SingleGameInfo> | undefined): boolean;
}

/**
 * @generated from message game_service.StreakInfoResponse.PlayerInfo
 */
export declare class StreakInfoResponse_PlayerInfo extends Message<StreakInfoResponse_PlayerInfo> {
  /**
   * @generated from field: string nickname = 1;
   */
  nickname: string;

  /**
   * player uuid needed for censoring
   *
   * @generated from field: string uuid = 2;
   */
  uuid: string;

  constructor(data?: PartialMessage<StreakInfoResponse_PlayerInfo>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.StreakInfoResponse.PlayerInfo";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StreakInfoResponse_PlayerInfo;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StreakInfoResponse_PlayerInfo;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StreakInfoResponse_PlayerInfo;

  static equals(a: StreakInfoResponse_PlayerInfo | PlainMessage<StreakInfoResponse_PlayerInfo> | undefined, b: StreakInfoResponse_PlayerInfo | PlainMessage<StreakInfoResponse_PlayerInfo> | undefined): boolean;
}

/**
 * @generated from message game_service.RematchStreakRequest
 */
export declare class RematchStreakRequest extends Message<RematchStreakRequest> {
  /**
   * @generated from field: string original_request_id = 1;
   */
  originalRequestId: string;

  constructor(data?: PartialMessage<RematchStreakRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "game_service.RematchStreakRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RematchStreakRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RematchStreakRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RematchStreakRequest;

  static equals(a: RematchStreakRequest | PlainMessage<RematchStreakRequest> | undefined, b: RematchStreakRequest | PlainMessage<RematchStreakRequest> | undefined): boolean;
}

