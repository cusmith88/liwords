// @generated by protoc-gen-connect-web v0.7.0
// @generated from file config_service/config_service.proto (package config_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AnnouncementsResponse, ConfigResponse, EnableGamesRequest, GetAnnouncementsRequest, PermissionsRequest, SetAnnouncementsRequest, SetFEHashRequest, UserRequest, UserResponse } from "./config_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * ConfigService requires admin authentication, except for the GetAnnouncements
 * endpoint.
 *
 * @generated from service config_service.ConfigService
 */
export const ConfigService = {
  typeName: "config_service.ConfigService",
  methods: {
    /**
     * @generated from rpc config_service.ConfigService.SetGamesEnabled
     */
    setGamesEnabled: {
      name: "SetGamesEnabled",
      I: EnableGamesRequest,
      O: ConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc config_service.ConfigService.SetFEHash
     */
    setFEHash: {
      name: "SetFEHash",
      I: SetFEHashRequest,
      O: ConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc config_service.ConfigService.SetUserPermissions
     */
    setUserPermissions: {
      name: "SetUserPermissions",
      I: PermissionsRequest,
      O: ConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc config_service.ConfigService.GetUserDetails
     */
    getUserDetails: {
      name: "GetUserDetails",
      I: UserRequest,
      O: UserResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc config_service.ConfigService.SetAnnouncements
     */
    setAnnouncements: {
      name: "SetAnnouncements",
      I: SetAnnouncementsRequest,
      O: ConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc config_service.ConfigService.GetAnnouncements
     */
    getAnnouncements: {
      name: "GetAnnouncements",
      I: GetAnnouncementsRequest,
      O: AnnouncementsResponse,
      kind: MethodKind.Unary,
    },
  }
};

