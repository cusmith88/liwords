// @generated by protoc-gen-connect-web v0.3.1
// @generated from file game_service/game_service.proto (package game_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {BroadcastGamePrivacy, ChallengeBonusPointsEvent, CreateBroadcastGameRequest, CreateBroadcastGameResponse, GameDocumentRequest, GameDocumentResponse, GameEventResponse, GameHistoryRequest, GameHistoryResponse, GameInfoRequest, GCGRequest, GCGResponse, RecentGamesRequest, RematchStreakRequest, StreakInfoResponse, TimePenaltyEvent} from "./game_service_pb.js";
import {ClientGameplayEvent, GameInfoResponse, GameInfoResponses} from "../ipc/omgwords_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service game_service.GameMetadataService
 */
export declare const GameMetadataService: {
  readonly typeName: "game_service.GameMetadataService",
  readonly methods: {
    /**
     * @generated from rpc game_service.GameMetadataService.GetMetadata
     */
    readonly getMetadata: {
      readonly name: "GetMetadata",
      readonly I: typeof GameInfoRequest,
      readonly O: typeof GameInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGCG gets a GCG string for the given game ID.
     *
     * @generated from rpc game_service.GameMetadataService.GetGCG
     */
    readonly getGCG: {
      readonly name: "GetGCG",
      readonly I: typeof GCGRequest,
      readonly O: typeof GCGResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGameHistory gets a GameHistory for the given game ID. GameHistory
     * is our internal representation of a game's state.
     *
     * @generated from rpc game_service.GameMetadataService.GetGameHistory
     */
    readonly getGameHistory: {
      readonly name: "GetGameHistory",
      readonly I: typeof GameHistoryRequest,
      readonly O: typeof GameHistoryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetRecentGames gets recent games for a user.
     *
     * @generated from rpc game_service.GameMetadataService.GetRecentGames
     */
    readonly getRecentGames: {
      readonly name: "GetRecentGames",
      readonly I: typeof RecentGamesRequest,
      readonly O: typeof GameInfoResponses,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameMetadataService.GetRematchStreak
     */
    readonly getRematchStreak: {
      readonly name: "GetRematchStreak",
      readonly I: typeof RematchStreakRequest,
      readonly O: typeof StreakInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetGameDocument gets a Game Document. This will eventually obsolete
     * GetGameHistory.
     *
     * @generated from rpc game_service.GameMetadataService.GetGameDocument
     */
    readonly getGameDocument: {
      readonly name: "GetGameDocument",
      readonly I: typeof GameDocumentRequest,
      readonly O: typeof GameDocumentResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * GameEventService will handle our game event API. We can connect bots to this
 * API, or use it for sandbox mode, or for live annotations, etc.
 *
 * @generated from service game_service.GameEventService
 */
export declare const GameEventService: {
  readonly typeName: "game_service.GameEventService",
  readonly methods: {
    /**
     * CreateBroadcastGame will create a game for Woogles broadcast
     *
     * @generated from rpc game_service.GameEventService.CreateBroadcastGame
     */
    readonly createBroadcastGame: {
      readonly name: "CreateBroadcastGame",
      readonly I: typeof CreateBroadcastGameRequest,
      readonly O: typeof CreateBroadcastGameResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.SendGameEvent
     */
    readonly sendGameEvent: {
      readonly name: "SendGameEvent",
      readonly I: typeof ClientGameplayEvent,
      readonly O: typeof GameEventResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SendTimePenaltyEvent sends a time penalty event. It should be the
     * last event right before a game ends.
     *
     * @generated from rpc game_service.GameEventService.SendTimePenaltyEvent
     */
    readonly sendTimePenaltyEvent: {
      readonly name: "SendTimePenaltyEvent",
      readonly I: typeof TimePenaltyEvent,
      readonly O: typeof GameEventResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * SendChallengeBonusEvent sends a bonus points event. When challenging
     * a play that is good, depending on the challenge rule a certain number
     * of points may be added to the play. Since broadcast games can reflect
     * real-life games, the number of points can be variable (for example,
     * 15 points for 5-pt challenge if 3 plays are challenged)
     *
     * @generated from rpc game_service.GameEventService.SendChallengeBonusEvent
     */
    readonly sendChallengeBonusEvent: {
      readonly name: "SendChallengeBonusEvent",
      readonly I: typeof ChallengeBonusPointsEvent,
      readonly O: typeof GameEventResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.SetBroadcastGamePrivacy
     */
    readonly setBroadcastGamePrivacy: {
      readonly name: "SetBroadcastGamePrivacy",
      readonly I: typeof BroadcastGamePrivacy,
      readonly O: typeof GameEventResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

