// @generated by protoc-gen-connect-web v0.8.3
// @generated from file tournament_service/tournament_service.proto (package tournament_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CheckinRequest, ClubSessionResponse, ClubSessionsResponse, ExportTournamentRequest, ExportTournamentResponse, FinishTournamentRequest, GetTournamentMetadataRequest, GetTournamentRequest, NewClubSessionRequest, NewTournamentRequest, NewTournamentResponse, PairRoundRequest, RecentClubSessionsRequest, RecentGamesRequest, RecentGamesResponse, SetTournamentMetadataRequest, SingleRoundControlsRequest, TournamentDivisionRequest, TournamentMetadataResponse, TournamentPairingsRequest, TournamentResponse, TournamentResultOverrideRequest, TournamentStartRoundCountdownRequest, UncheckInRequest, UnstartTournamentRequest } from "./tournament_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { DivisionControls, DivisionRoundControls, FullTournamentDivisions, TournamentPersons } from "../ipc/tournament_pb.js";

/**
 * @generated from service tournament_service.TournamentService
 */
export const TournamentService = {
  typeName: "tournament_service.TournamentService",
  methods: {
    /**
     * @generated from rpc tournament_service.TournamentService.NewTournament
     */
    newTournament: {
      name: "NewTournament",
      I: NewTournamentRequest,
      O: NewTournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.GetTournamentMetadata
     */
    getTournamentMetadata: {
      name: "GetTournamentMetadata",
      I: GetTournamentMetadataRequest,
      O: TournamentMetadataResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.GetTournament
     */
    getTournament: {
      name: "GetTournament",
      I: GetTournamentRequest,
      O: FullTournamentDivisions,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.FinishTournament
     */
    finishTournament: {
      name: "FinishTournament",
      I: FinishTournamentRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetTournamentMetadata
     */
    setTournamentMetadata: {
      name: "SetTournamentMetadata",
      I: SetTournamentMetadataRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.PairRound
     */
    pairRound: {
      name: "PairRound",
      I: PairRoundRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetSingleRoundControls
     */
    setSingleRoundControls: {
      name: "SetSingleRoundControls",
      I: SingleRoundControlsRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetRoundControls
     */
    setRoundControls: {
      name: "SetRoundControls",
      I: DivisionRoundControls,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetDivisionControls
     */
    setDivisionControls: {
      name: "SetDivisionControls",
      I: DivisionControls,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Input to AddDirectors should be director usernames.
     *
     * @generated from rpc tournament_service.TournamentService.AddDirectors
     */
    addDirectors: {
      name: "AddDirectors",
      I: TournamentPersons,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Input to RemoveDirectors should be director usernames.
     *
     * @generated from rpc tournament_service.TournamentService.RemoveDirectors
     */
    removeDirectors: {
      name: "RemoveDirectors",
      I: TournamentPersons,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.AddDivision
     */
    addDivision: {
      name: "AddDivision",
      I: TournamentDivisionRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.RemoveDivision
     */
    removeDivision: {
      name: "RemoveDivision",
      I: TournamentDivisionRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Input to AddPlayers should be player usernames
     *
     * @generated from rpc tournament_service.TournamentService.AddPlayers
     */
    addPlayers: {
      name: "AddPlayers",
      I: TournamentPersons,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Input to RemovePlayers should be player usernames
     *
     * @generated from rpc tournament_service.TournamentService.RemovePlayers
     */
    removePlayers: {
      name: "RemovePlayers",
      I: TournamentPersons,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetPairing
     */
    setPairing: {
      name: "SetPairing",
      I: TournamentPairingsRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.SetResult
     */
    setResult: {
      name: "SetResult",
      I: TournamentResultOverrideRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.StartRoundCountdown
     */
    startRoundCountdown: {
      name: "StartRoundCountdown",
      I: TournamentStartRoundCountdownRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.RecentGames
     */
    recentGames: {
      name: "RecentGames",
      I: RecentGamesRequest,
      O: RecentGamesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.CreateClubSession
     */
    createClubSession: {
      name: "CreateClubSession",
      I: NewClubSessionRequest,
      O: ClubSessionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.GetRecentClubSessions
     */
    getRecentClubSessions: {
      name: "GetRecentClubSessions",
      I: RecentClubSessionsRequest,
      O: ClubSessionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.UnstartTournament
     */
    unstartTournament: {
      name: "UnstartTournament",
      I: UnstartTournamentRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Uncheck everyone in. Use this some time before the beginning of a session.
     *
     * @generated from rpc tournament_service.TournamentService.UncheckIn
     */
    uncheckIn: {
      name: "UncheckIn",
      I: UncheckInRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CheckIn allows players to check themselves in.
     *
     * @generated from rpc tournament_service.TournamentService.CheckIn
     */
    checkIn: {
      name: "CheckIn",
      I: CheckinRequest,
      O: TournamentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc tournament_service.TournamentService.ExportTournament
     */
    exportTournament: {
      name: "ExportTournament",
      I: ExportTournamentRequest,
      O: ExportTournamentResponse,
      kind: MethodKind.Unary,
    },
  }
};

