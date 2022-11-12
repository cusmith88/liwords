// @generated by protoc-gen-es v0.2.1
// @generated from file word_service/word_service.proto (package word_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * @generated from message word_service.DefineWordsRequest
 */
export declare class DefineWordsRequest extends Message<DefineWordsRequest> {
  /**
   * @generated from field: string lexicon = 1;
   */
  lexicon: string;

  /**
   * @generated from field: repeated string words = 2;
   */
  words: string[];

  /**
   * pass true to retrieve definitions
   *
   * @generated from field: bool definitions = 3;
   */
  definitions: boolean;

  /**
   * @generated from field: bool anagrams = 4;
   */
  anagrams: boolean;

  constructor(data?: PartialMessage<DefineWordsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "word_service.DefineWordsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefineWordsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefineWordsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefineWordsRequest;

  static equals(a: DefineWordsRequest | PlainMessage<DefineWordsRequest> | undefined, b: DefineWordsRequest | PlainMessage<DefineWordsRequest> | undefined): boolean;
}

/**
 * @generated from message word_service.DefineWordsResult
 */
export declare class DefineWordsResult extends Message<DefineWordsResult> {
  /**
   * definitions, not "" iff (valid and requesting definitions)
   *
   * @generated from field: string d = 1;
   */
  d: string;

  /**
   * true iff valid
   *
   * @generated from field: bool v = 2;
   */
  v: boolean;

  constructor(data?: PartialMessage<DefineWordsResult>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "word_service.DefineWordsResult";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefineWordsResult;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefineWordsResult;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefineWordsResult;

  static equals(a: DefineWordsResult | PlainMessage<DefineWordsResult> | undefined, b: DefineWordsResult | PlainMessage<DefineWordsResult> | undefined): boolean;
}

/**
 * @generated from message word_service.DefineWordsResponse
 */
export declare class DefineWordsResponse extends Message<DefineWordsResponse> {
  /**
   * @generated from field: map<string, word_service.DefineWordsResult> results = 1;
   */
  results: { [key: string]: DefineWordsResult };

  constructor(data?: PartialMessage<DefineWordsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "word_service.DefineWordsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DefineWordsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DefineWordsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DefineWordsResponse;

  static equals(a: DefineWordsResponse | PlainMessage<DefineWordsResponse> | undefined, b: DefineWordsResponse | PlainMessage<DefineWordsResponse> | undefined): boolean;
}

