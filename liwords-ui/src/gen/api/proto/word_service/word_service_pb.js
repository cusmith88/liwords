// @generated by protoc-gen-es v1.2.0
// @generated from file word_service/word_service.proto (package word_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message word_service.DefineWordsRequest
 */
export const DefineWordsRequest = proto3.makeMessageType(
  "word_service.DefineWordsRequest",
  () => [
    { no: 1, name: "lexicon", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "words", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "definitions", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "anagrams", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message word_service.DefineWordsResult
 */
export const DefineWordsResult = proto3.makeMessageType(
  "word_service.DefineWordsResult",
  () => [
    { no: 1, name: "d", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "v", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message word_service.DefineWordsResponse
 */
export const DefineWordsResponse = proto3.makeMessageType(
  "word_service.DefineWordsResponse",
  () => [
    { no: 1, name: "results", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: DefineWordsResult} },
  ],
);

