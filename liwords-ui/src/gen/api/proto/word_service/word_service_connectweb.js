// @generated by protoc-gen-connect-web v0.3.1
// @generated from file word_service/word_service.proto (package word_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {DefineWordsRequest, DefineWordsResponse} from "./word_service_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service word_service.WordService
 */
export const WordService = {
  typeName: "word_service.WordService",
  methods: {
    /**
     * @generated from rpc word_service.WordService.DefineWords
     */
    defineWords: {
      name: "DefineWords",
      I: DefineWordsRequest,
      O: DefineWordsResponse,
      kind: MethodKind.Unary,
    },
  }
};

