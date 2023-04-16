// @generated by protoc-gen-es v1.2.0
// @generated from file comments_service/comments_service.proto (package comments_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message comments_service.GameComment
 */
export const GameComment = proto3.makeMessageType(
  "comments_service.GameComment",
  () => [
    { no: 1, name: "comment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "event_number", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 6, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "last_edited", kind: "message", T: Timestamp },
    { no: 8, name: "game_meta", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message comments_service.AddCommentRequest
 */
export const AddCommentRequest = proto3.makeMessageType(
  "comments_service.AddCommentRequest",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "event_number", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message comments_service.AddCommentResponse
 */
export const AddCommentResponse = proto3.makeMessageType(
  "comments_service.AddCommentResponse",
  () => [
    { no: 1, name: "comment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message comments_service.GetCommentsRequest
 */
export const GetCommentsRequest = proto3.makeMessageType(
  "comments_service.GetCommentsRequest",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message comments_service.GetCommentsResponse
 */
export const GetCommentsResponse = proto3.makeMessageType(
  "comments_service.GetCommentsResponse",
  () => [
    { no: 1, name: "comments", kind: "message", T: GameComment, repeated: true },
  ],
);

/**
 * @generated from message comments_service.EditCommentRequest
 */
export const EditCommentRequest = proto3.makeMessageType(
  "comments_service.EditCommentRequest",
  () => [
    { no: 1, name: "comment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message comments_service.EditCommentResponse
 */
export const EditCommentResponse = proto3.makeMessageType(
  "comments_service.EditCommentResponse",
  [],
);

/**
 * @generated from message comments_service.DeleteCommentRequest
 */
export const DeleteCommentRequest = proto3.makeMessageType(
  "comments_service.DeleteCommentRequest",
  () => [
    { no: 1, name: "comment_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message comments_service.DeleteCommentResponse
 */
export const DeleteCommentResponse = proto3.makeMessageType(
  "comments_service.DeleteCommentResponse",
  [],
);

/**
 * @generated from message comments_service.GetCommentsAllGamesRequest
 */
export const GetCommentsAllGamesRequest = proto3.makeMessageType(
  "comments_service.GetCommentsAllGamesRequest",
  () => [
    { no: 1, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "offset", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

