// @generated by protoc-gen-connect-web v0.3.1
// @generated from file omgwords_service/omgwords.proto (package game_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {AnnotatedGameEvent, BroadcastGamePrivacy, BroadcastGamesResponse, CreateBroadcastGameRequest, CreateBroadcastGameResponse, DeleteBroadcastGameRequest, DeleteBroadcastGameResponse, GameEventResponse, GetGameDocumentRequest, GetGamesForEditorRequest, GetMyUnfinishedGamesRequest, PatchDocumentRequest, ReplaceDocumentRequest} from "./omgwords_pb.js";
import {MethodKind} from "@bufbuild/protobuf";
import {GameDocument} from "../ipc/omgwords_pb.js";

/**
 * GameEventService will handle our game event API. We can connect bots to
 * this API, or use it for sandbox mode, or for live annotations, etc.
 *
 * @generated from service game_service.GameEventService
 */
export const GameEventService = {
  typeName: "game_service.GameEventService",
  methods: {
    /**
     * CreateBroadcastGame will create a game for Woogles broadcast
     *
     * @generated from rpc game_service.GameEventService.CreateBroadcastGame
     */
    createBroadcastGame: {
      name: "CreateBroadcastGame",
      I: CreateBroadcastGameRequest,
      O: CreateBroadcastGameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.DeleteBroadcastGame
     */
    deleteBroadcastGame: {
      name: "DeleteBroadcastGame",
      I: DeleteBroadcastGameRequest,
      O: DeleteBroadcastGameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.SendGameEvent
     */
    sendGameEvent: {
      name: "SendGameEvent",
      I: AnnotatedGameEvent,
      O: GameEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.ReplaceGameDocument
     */
    replaceGameDocument: {
      name: "ReplaceGameDocument",
      I: ReplaceDocumentRequest,
      O: GameEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PatchGameDocument merges in the passed-in GameDocument with what's on the
     * server. The passed-in GameDocument should be a partial document
     *
     * @generated from rpc game_service.GameEventService.PatchGameDocument
     */
    patchGameDocument: {
      name: "PatchGameDocument",
      I: PatchDocumentRequest,
      O: GameEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.SetBroadcastGamePrivacy
     */
    setBroadcastGamePrivacy: {
      name: "SetBroadcastGamePrivacy",
      I: BroadcastGamePrivacy,
      O: GameEventResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.GetGamesForEditor
     */
    getGamesForEditor: {
      name: "GetGamesForEditor",
      I: GetGamesForEditorRequest,
      O: BroadcastGamesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.GetMyUnfinishedGames
     */
    getMyUnfinishedGames: {
      name: "GetMyUnfinishedGames",
      I: GetMyUnfinishedGamesRequest,
      O: BroadcastGamesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc game_service.GameEventService.GetGameDocument
     */
    getGameDocument: {
      name: "GetGameDocument",
      I: GetGameDocumentRequest,
      O: GameDocument,
      kind: MethodKind.Unary,
    },
  }
};

