// @generated by protoc-gen-es v1.1.0
// @generated from file ipc/chat.proto (package ipc, syntax proto3)
/* eslint-disable */
// @ts-nocheck

// Package ipc describes all the messages used for inter-process
// communication between the different microservices in liwords
// (so far, just the API and the socket server).
// Many of these messages end up being transmitted to the front-end.

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message ipc.ChatMessage
 */
export declare class ChatMessage extends Message<ChatMessage> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string channel = 2;
   */
  channel: string;

  /**
   * @generated from field: string message = 3;
   */
  message: string;

  /**
   * timestamp is in milliseconds!
   *
   * @generated from field: int64 timestamp = 4;
   */
  timestamp: bigint;

  /**
   * @generated from field: string user_id = 5;
   */
  userId: string;

  /**
   * @generated from field: string id = 6;
   */
  id: string;

  /**
   * these are only loaded by specific endpoints.
   *
   * @generated from field: string country_code = 7;
   */
  countryCode: string;

  /**
   * @generated from field: string avatar_url = 8;
   */
  avatarUrl: string;

  constructor(data?: PartialMessage<ChatMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ChatMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessage;

  static equals(a: ChatMessage | PlainMessage<ChatMessage> | undefined, b: ChatMessage | PlainMessage<ChatMessage> | undefined): boolean;
}

/**
 * @generated from message ipc.ChatMessages
 */
export declare class ChatMessages extends Message<ChatMessages> {
  /**
   * @generated from field: repeated ipc.ChatMessage messages = 1;
   */
  messages: ChatMessage[];

  constructor(data?: PartialMessage<ChatMessages>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ChatMessages";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessages;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessages;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessages;

  static equals(a: ChatMessages | PlainMessage<ChatMessages> | undefined, b: ChatMessages | PlainMessage<ChatMessages> | undefined): boolean;
}

/**
 * @generated from message ipc.ChatMessageDeleted
 */
export declare class ChatMessageDeleted extends Message<ChatMessageDeleted> {
  /**
   * @generated from field: string channel = 1;
   */
  channel: string;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  constructor(data?: PartialMessage<ChatMessageDeleted>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ipc.ChatMessageDeleted";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChatMessageDeleted;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChatMessageDeleted;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChatMessageDeleted;

  static equals(a: ChatMessageDeleted | PlainMessage<ChatMessageDeleted> | undefined, b: ChatMessageDeleted | PlainMessage<ChatMessageDeleted> | undefined): boolean;
}

