// @generated by protoc-gen-es v1.2.0
// @generated from file mod_service/mod_service.proto (package mod_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum mod_service.ModActionType
 */
export declare enum ModActionType {
  /**
   * @generated from enum value: MUTE = 0;
   */
  MUTE = 0,

  /**
   * @generated from enum value: SUSPEND_ACCOUNT = 1;
   */
  SUSPEND_ACCOUNT = 1,

  /**
   * @generated from enum value: SUSPEND_RATED_GAMES = 2;
   */
  SUSPEND_RATED_GAMES = 2,

  /**
   * @generated from enum value: SUSPEND_GAMES = 3;
   */
  SUSPEND_GAMES = 3,

  /**
   * @generated from enum value: RESET_RATINGS = 4;
   */
  RESET_RATINGS = 4,

  /**
   * @generated from enum value: RESET_STATS = 5;
   */
  RESET_STATS = 5,

  /**
   * @generated from enum value: RESET_STATS_AND_RATINGS = 6;
   */
  RESET_STATS_AND_RATINGS = 6,

  /**
   * @generated from enum value: REMOVE_CHAT = 7;
   */
  REMOVE_CHAT = 7,

  /**
   * @generated from enum value: DELETE_ACCOUNT = 8;
   */
  DELETE_ACCOUNT = 8,
}

/**
 * @generated from enum mod_service.EmailType
 */
export declare enum EmailType {
  /**
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: CHEATING = 1;
   */
  CHEATING = 1,

  /**
   * @generated from enum value: DELETION = 2;
   */
  DELETION = 2,
}

/**
 * @generated from enum mod_service.NotoriousGameType
 */
export declare enum NotoriousGameType {
  /**
   * @generated from enum value: GOOD = 0;
   */
  GOOD = 0,

  /**
   * @generated from enum value: NO_PLAY = 1;
   */
  NO_PLAY = 1,

  /**
   * @generated from enum value: SITTING = 2;
   */
  SITTING = 2,

  /**
   * @generated from enum value: SANDBAG = 3;
   */
  SANDBAG = 3,

  /**
   * @generated from enum value: NO_PLAY_DENIED_NUDGE = 4;
   */
  NO_PLAY_DENIED_NUDGE = 4,

  /**
   * @generated from enum value: EXCESSIVE_PHONIES = 5;
   */
  EXCESSIVE_PHONIES = 5,
}

/**
 * @generated from message mod_service.ModAction
 */
export declare class ModAction extends Message<ModAction> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: mod_service.ModActionType type = 2;
   */
  type: ModActionType;

  /**
   * @generated from field: int32 duration = 3;
   */
  duration: number;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 4;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 5;
   */
  endTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp removed_time = 6;
   */
  removedTime?: Timestamp;

  /**
   * @generated from field: string channel = 7;
   */
  channel: string;

  /**
   * @generated from field: string message_id = 8;
   */
  messageId: string;

  /**
   * @generated from field: string applier_user_id = 9;
   */
  applierUserId: string;

  /**
   * @generated from field: string remover_user_id = 10;
   */
  removerUserId: string;

  /**
   * @generated from field: string chat_text = 11;
   */
  chatText: string;

  /**
   * Note: an optional note from the moderator.
   *
   * @generated from field: string note = 12;
   */
  note: string;

  /**
   * @generated from field: mod_service.EmailType email_type = 13;
   */
  emailType: EmailType;

  constructor(data?: PartialMessage<ModAction>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ModAction";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModAction;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModAction;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModAction;

  static equals(a: ModAction | PlainMessage<ModAction> | undefined, b: ModAction | PlainMessage<ModAction> | undefined): boolean;
}

/**
 * @generated from message mod_service.ModActionsMap
 */
export declare class ModActionsMap extends Message<ModActionsMap> {
  /**
   * @generated from field: map<string, mod_service.ModAction> actions = 1;
   */
  actions: { [key: string]: ModAction };

  constructor(data?: PartialMessage<ModActionsMap>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ModActionsMap";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModActionsMap;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModActionsMap;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModActionsMap;

  static equals(a: ModActionsMap | PlainMessage<ModActionsMap> | undefined, b: ModActionsMap | PlainMessage<ModActionsMap> | undefined): boolean;
}

/**
 * @generated from message mod_service.ModActionsList
 */
export declare class ModActionsList extends Message<ModActionsList> {
  /**
   * @generated from field: repeated mod_service.ModAction actions = 1;
   */
  actions: ModAction[];

  constructor(data?: PartialMessage<ModActionsList>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ModActionsList";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModActionsList;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModActionsList;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModActionsList;

  static equals(a: ModActionsList | PlainMessage<ModActionsList> | undefined, b: ModActionsList | PlainMessage<ModActionsList> | undefined): boolean;
}

/**
 * @generated from message mod_service.GetActionsRequest
 */
export declare class GetActionsRequest extends Message<GetActionsRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<GetActionsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.GetActionsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActionsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActionsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActionsRequest;

  static equals(a: GetActionsRequest | PlainMessage<GetActionsRequest> | undefined, b: GetActionsRequest | PlainMessage<GetActionsRequest> | undefined): boolean;
}

/**
 * @generated from message mod_service.ModActionResponse
 */
export declare class ModActionResponse extends Message<ModActionResponse> {
  constructor(data?: PartialMessage<ModActionResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ModActionResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModActionResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModActionResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModActionResponse;

  static equals(a: ModActionResponse | PlainMessage<ModActionResponse> | undefined, b: ModActionResponse | PlainMessage<ModActionResponse> | undefined): boolean;
}

/**
 * @generated from message mod_service.NotoriousGame
 */
export declare class NotoriousGame extends Message<NotoriousGame> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: mod_service.NotoriousGameType type = 2;
   */
  type: NotoriousGameType;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<NotoriousGame>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.NotoriousGame";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotoriousGame;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotoriousGame;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotoriousGame;

  static equals(a: NotoriousGame | PlainMessage<NotoriousGame> | undefined, b: NotoriousGame | PlainMessage<NotoriousGame> | undefined): boolean;
}

/**
 * @generated from message mod_service.ResetNotorietyRequest
 */
export declare class ResetNotorietyRequest extends Message<ResetNotorietyRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<ResetNotorietyRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ResetNotorietyRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetNotorietyRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetNotorietyRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetNotorietyRequest;

  static equals(a: ResetNotorietyRequest | PlainMessage<ResetNotorietyRequest> | undefined, b: ResetNotorietyRequest | PlainMessage<ResetNotorietyRequest> | undefined): boolean;
}

/**
 * @generated from message mod_service.ResetNotorietyResponse
 */
export declare class ResetNotorietyResponse extends Message<ResetNotorietyResponse> {
  constructor(data?: PartialMessage<ResetNotorietyResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.ResetNotorietyResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetNotorietyResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetNotorietyResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetNotorietyResponse;

  static equals(a: ResetNotorietyResponse | PlainMessage<ResetNotorietyResponse> | undefined, b: ResetNotorietyResponse | PlainMessage<ResetNotorietyResponse> | undefined): boolean;
}

/**
 * @generated from message mod_service.GetNotorietyReportRequest
 */
export declare class GetNotorietyReportRequest extends Message<GetNotorietyReportRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<GetNotorietyReportRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.GetNotorietyReportRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNotorietyReportRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNotorietyReportRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNotorietyReportRequest;

  static equals(a: GetNotorietyReportRequest | PlainMessage<GetNotorietyReportRequest> | undefined, b: GetNotorietyReportRequest | PlainMessage<GetNotorietyReportRequest> | undefined): boolean;
}

/**
 * @generated from message mod_service.NotorietyReport
 */
export declare class NotorietyReport extends Message<NotorietyReport> {
  /**
   * @generated from field: int32 score = 1;
   */
  score: number;

  /**
   * @generated from field: repeated mod_service.NotoriousGame games = 2;
   */
  games: NotoriousGame[];

  constructor(data?: PartialMessage<NotorietyReport>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "mod_service.NotorietyReport";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotorietyReport;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotorietyReport;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotorietyReport;

  static equals(a: NotorietyReport | PlainMessage<NotorietyReport> | undefined, b: NotorietyReport | PlainMessage<NotorietyReport> | undefined): boolean;
}

