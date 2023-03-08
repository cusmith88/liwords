// @generated by protoc-gen-es v1.1.0
// @generated from file comments_service/comments_service.proto (package comments_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message comments_service.GameComment
 */
export declare class GameComment extends Message<GameComment> {
  /**
   * @generated from field: string comment_id = 1;
   */
  commentId: string;

  /**
   * @generated from field: string game_id = 2;
   */
  gameId: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;

  /**
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * @generated from field: uint32 event_number = 5;
   */
  eventNumber: number;

  /**
   * @generated from field: string comment = 6;
   */
  comment: string;

  /**
   * @generated from field: google.protobuf.Timestamp last_edited = 7;
   */
  lastEdited?: Timestamp;

  /**
   * game_meta is for optional display of game metadata.
   *
   * @generated from field: map<string, string> game_meta = 8;
   */
  gameMeta: { [key: string]: string };

  constructor(data?: PartialMessage<GameComment>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.GameComment";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GameComment;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GameComment;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GameComment;

  static equals(a: GameComment | PlainMessage<GameComment> | undefined, b: GameComment | PlainMessage<GameComment> | undefined): boolean;
}

/**
 * @generated from message comments_service.AddCommentRequest
 */
export declare class AddCommentRequest extends Message<AddCommentRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  /**
   * @generated from field: uint32 event_number = 2;
   */
  eventNumber: number;

  /**
   * @generated from field: string comment = 3;
   */
  comment: string;

  constructor(data?: PartialMessage<AddCommentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.AddCommentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddCommentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddCommentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddCommentRequest;

  static equals(a: AddCommentRequest | PlainMessage<AddCommentRequest> | undefined, b: AddCommentRequest | PlainMessage<AddCommentRequest> | undefined): boolean;
}

/**
 * @generated from message comments_service.AddCommentResponse
 */
export declare class AddCommentResponse extends Message<AddCommentResponse> {
  /**
   * @generated from field: string comment_id = 1;
   */
  commentId: string;

  constructor(data?: PartialMessage<AddCommentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.AddCommentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddCommentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddCommentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddCommentResponse;

  static equals(a: AddCommentResponse | PlainMessage<AddCommentResponse> | undefined, b: AddCommentResponse | PlainMessage<AddCommentResponse> | undefined): boolean;
}

/**
 * @generated from message comments_service.GetCommentsRequest
 */
export declare class GetCommentsRequest extends Message<GetCommentsRequest> {
  /**
   * @generated from field: string game_id = 1;
   */
  gameId: string;

  constructor(data?: PartialMessage<GetCommentsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.GetCommentsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCommentsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCommentsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCommentsRequest;

  static equals(a: GetCommentsRequest | PlainMessage<GetCommentsRequest> | undefined, b: GetCommentsRequest | PlainMessage<GetCommentsRequest> | undefined): boolean;
}

/**
 * @generated from message comments_service.GetCommentsResponse
 */
export declare class GetCommentsResponse extends Message<GetCommentsResponse> {
  /**
   * @generated from field: repeated comments_service.GameComment comments = 1;
   */
  comments: GameComment[];

  constructor(data?: PartialMessage<GetCommentsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.GetCommentsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCommentsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCommentsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCommentsResponse;

  static equals(a: GetCommentsResponse | PlainMessage<GetCommentsResponse> | undefined, b: GetCommentsResponse | PlainMessage<GetCommentsResponse> | undefined): boolean;
}

/**
 * @generated from message comments_service.EditCommentRequest
 */
export declare class EditCommentRequest extends Message<EditCommentRequest> {
  /**
   * @generated from field: string comment_id = 1;
   */
  commentId: string;

  /**
   * @generated from field: string comment = 2;
   */
  comment: string;

  constructor(data?: PartialMessage<EditCommentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.EditCommentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditCommentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditCommentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditCommentRequest;

  static equals(a: EditCommentRequest | PlainMessage<EditCommentRequest> | undefined, b: EditCommentRequest | PlainMessage<EditCommentRequest> | undefined): boolean;
}

/**
 * @generated from message comments_service.EditCommentResponse
 */
export declare class EditCommentResponse extends Message<EditCommentResponse> {
  constructor(data?: PartialMessage<EditCommentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.EditCommentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EditCommentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EditCommentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EditCommentResponse;

  static equals(a: EditCommentResponse | PlainMessage<EditCommentResponse> | undefined, b: EditCommentResponse | PlainMessage<EditCommentResponse> | undefined): boolean;
}

/**
 * @generated from message comments_service.DeleteCommentRequest
 */
export declare class DeleteCommentRequest extends Message<DeleteCommentRequest> {
  /**
   * @generated from field: string comment_id = 1;
   */
  commentId: string;

  constructor(data?: PartialMessage<DeleteCommentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.DeleteCommentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCommentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCommentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCommentRequest;

  static equals(a: DeleteCommentRequest | PlainMessage<DeleteCommentRequest> | undefined, b: DeleteCommentRequest | PlainMessage<DeleteCommentRequest> | undefined): boolean;
}

/**
 * @generated from message comments_service.DeleteCommentResponse
 */
export declare class DeleteCommentResponse extends Message<DeleteCommentResponse> {
  constructor(data?: PartialMessage<DeleteCommentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.DeleteCommentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCommentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCommentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCommentResponse;

  static equals(a: DeleteCommentResponse | PlainMessage<DeleteCommentResponse> | undefined, b: DeleteCommentResponse | PlainMessage<DeleteCommentResponse> | undefined): boolean;
}

/**
 * @generated from message comments_service.GetCommentsAllGamesRequest
 */
export declare class GetCommentsAllGamesRequest extends Message<GetCommentsAllGamesRequest> {
  /**
   * @generated from field: uint32 limit = 1;
   */
  limit: number;

  /**
   * @generated from field: uint32 offset = 2;
   */
  offset: number;

  constructor(data?: PartialMessage<GetCommentsAllGamesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "comments_service.GetCommentsAllGamesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCommentsAllGamesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCommentsAllGamesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCommentsAllGamesRequest;

  static equals(a: GetCommentsAllGamesRequest | PlainMessage<GetCommentsAllGamesRequest> | undefined, b: GetCommentsAllGamesRequest | PlainMessage<GetCommentsAllGamesRequest> | undefined): boolean;
}

