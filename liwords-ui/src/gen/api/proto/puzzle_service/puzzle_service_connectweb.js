// @generated by protoc-gen-connect-web v0.7.0
// @generated from file puzzle_service/puzzle_service.proto (package puzzle_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AnswerResponse, APIPuzzleGenerationJobRequest, APIPuzzleGenerationJobResponse, NextClosestRatingPuzzleIdRequest, NextClosestRatingPuzzleIdResponse, NextPuzzleIdRequest, NextPuzzleIdResponse, PreviousPuzzleRequest, PreviousPuzzleResponse, PuzzleJobLogsRequest, PuzzleJobLogsResponse, PuzzleRequest, PuzzleResponse, PuzzleVoteRequest, PuzzleVoteResponse, StartPuzzleIdRequest, StartPuzzleIdResponse, SubmissionRequest, SubmissionResponse } from "./puzzle_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service puzzle_service.PuzzleService
 */
export const PuzzleService = {
  typeName: "puzzle_service.PuzzleService",
  methods: {
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetStartPuzzleId
     */
    getStartPuzzleId: {
      name: "GetStartPuzzleId",
      I: StartPuzzleIdRequest,
      O: StartPuzzleIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetNextPuzzleId
     */
    getNextPuzzleId: {
      name: "GetNextPuzzleId",
      I: NextPuzzleIdRequest,
      O: NextPuzzleIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetNextClosestRatingPuzzleId
     */
    getNextClosestRatingPuzzleId: {
      name: "GetNextClosestRatingPuzzleId",
      I: NextClosestRatingPuzzleIdRequest,
      O: NextClosestRatingPuzzleIdResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetPuzzle
     */
    getPuzzle: {
      name: "GetPuzzle",
      I: PuzzleRequest,
      O: PuzzleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.SubmitAnswer
     */
    submitAnswer: {
      name: "SubmitAnswer",
      I: SubmissionRequest,
      O: SubmissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetPuzzleAnswer just gets the answer of the puzzle without a submission.
     * It will not work if the user has not tried the puzzle at least once.
     *
     * @generated from rpc puzzle_service.PuzzleService.GetPuzzleAnswer
     */
    getPuzzleAnswer: {
      name: "GetPuzzleAnswer",
      I: PuzzleRequest,
      O: AnswerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetPreviousPuzzleId
     */
    getPreviousPuzzleId: {
      name: "GetPreviousPuzzleId",
      I: PreviousPuzzleRequest,
      O: PreviousPuzzleResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.SetPuzzleVote
     */
    setPuzzleVote: {
      name: "SetPuzzleVote",
      I: PuzzleVoteRequest,
      O: PuzzleVoteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.StartPuzzleGenJob
     */
    startPuzzleGenJob: {
      name: "StartPuzzleGenJob",
      I: APIPuzzleGenerationJobRequest,
      O: APIPuzzleGenerationJobResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc puzzle_service.PuzzleService.GetPuzzleJobLogs
     */
    getPuzzleJobLogs: {
      name: "GetPuzzleJobLogs",
      I: PuzzleJobLogsRequest,
      O: PuzzleJobLogsResponse,
      kind: MethodKind.Unary,
    },
  }
};

