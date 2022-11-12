// @generated by protoc-gen-es v0.2.1
// @generated from file game_service/game_service.proto (package game_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {GameHistory} from "../macondo/macondo_pb.js";

/**
 * Meta information about a game, including its players.
 *
 * @generated from message game_service.GameInfoRequest
 */
export const GameInfoRequest = proto3.makeMessageType(
  "game_service.GameInfoRequest",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message game_service.GCGRequest
 */
export const GCGRequest = proto3.makeMessageType(
  "game_service.GCGRequest",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message game_service.GameHistoryRequest
 */
export const GameHistoryRequest = proto3.makeMessageType(
  "game_service.GameHistoryRequest",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message game_service.GCGResponse
 */
export const GCGResponse = proto3.makeMessageType(
  "game_service.GCGResponse",
  () => [
    { no: 1, name: "gcg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message game_service.GameHistoryResponse
 */
export const GameHistoryResponse = proto3.makeMessageType(
  "game_service.GameHistoryResponse",
  () => [
    { no: 1, name: "history", kind: "message", T: GameHistory },
  ],
);

/**
 * @generated from message game_service.RecentGamesRequest
 */
export const RecentGamesRequest = proto3.makeMessageType(
  "game_service.RecentGamesRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "num_games", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message game_service.StreakInfoResponse
 */
export const StreakInfoResponse = proto3.makeMessageType(
  "game_service.StreakInfoResponse",
  () => [
    { no: 1, name: "streak", kind: "message", T: StreakInfoResponse_SingleGameInfo, repeated: true },
    { no: 3, name: "playersInfo", kind: "message", T: StreakInfoResponse_PlayerInfo, repeated: true },
  ],
);

/**
 * @generated from message game_service.StreakInfoResponse.SingleGameInfo
 */
export const StreakInfoResponse_SingleGameInfo = proto3.makeMessageType(
  "game_service.StreakInfoResponse.SingleGameInfo",
  () => [
    { no: 1, name: "game_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "winner", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "StreakInfoResponse_SingleGameInfo"},
);

/**
 * @generated from message game_service.StreakInfoResponse.PlayerInfo
 */
export const StreakInfoResponse_PlayerInfo = proto3.makeMessageType(
  "game_service.StreakInfoResponse.PlayerInfo",
  () => [
    { no: 1, name: "nickname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "StreakInfoResponse_PlayerInfo"},
);

/**
 * @generated from message game_service.RematchStreakRequest
 */
export const RematchStreakRequest = proto3.makeMessageType(
  "game_service.RematchStreakRequest",
  () => [
    { no: 1, name: "original_request_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

