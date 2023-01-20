// @generated by protoc-gen-connect-web v0.3.1
// @generated from file user_service/user_service.proto (package user_service, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {ActiveChatChannels, AddBlockRequest, AddFollowRequest, BriefProfilesRequest, BriefProfilesResponse, ChangePasswordRequest, ChangePasswordResponse, GetActiveChatChannelsRequest, GetAPIKeyRequest, GetAPIKeyResponse, GetBlocksRequest, GetBlocksResponse, GetChatsRequest, GetFollowsRequest, GetFollowsResponse, GetFullBlocksRequest, GetFullBlocksResponse, GetModListRequest, GetModListResponse, GetSignedCookieRequest, InstallSignedCookieResponse, LoginResponse, LogoutResponse, NotifyAccountClosureRequest, NotifyAccountClosureResponse, OKResponse, PersonalInfoRequest, PersonalInfoResponse, ProfileRequest, ProfileResponse, RatingsRequest, RatingsResponse, RegistrationResponse, RemoveAvatarRequest, RemoveAvatarResponse, RemoveBlockRequest, RemoveFollowRequest, ResetPasswordRequestStep1, ResetPasswordRequestStep2, ResetPasswordResponse, SignedCookieResponse, SocketTokenRequest, SocketTokenResponse, StatsRequest, StatsResponse, UpdateAvatarRequest, UpdateAvatarResponse, UpdatePersonalInfoRequest, UpdatePersonalInfoResponse, UserLoginRequest, UserLogoutRequest, UsernameSearchRequest, UsernameSearchResponse, UserRegistrationRequest} from "./user_service_pb.js";
import {MethodKind} from "@bufbuild/protobuf";
import {ChatMessages} from "../ipc/chat_pb.js";

/**
 * @generated from service user_service.AuthenticationService
 */
export declare const AuthenticationService: {
  readonly typeName: "user_service.AuthenticationService",
  readonly methods: {
    /**
     * @generated from rpc user_service.AuthenticationService.Login
     */
    readonly login: {
      readonly name: "Login",
      readonly I: typeof UserLoginRequest,
      readonly O: typeof LoginResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.Logout
     */
    readonly logout: {
      readonly name: "Logout",
      readonly I: typeof UserLogoutRequest,
      readonly O: typeof LogoutResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.GetSocketToken
     */
    readonly getSocketToken: {
      readonly name: "GetSocketToken",
      readonly I: typeof SocketTokenRequest,
      readonly O: typeof SocketTokenResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.ResetPasswordStep1
     */
    readonly resetPasswordStep1: {
      readonly name: "ResetPasswordStep1",
      readonly I: typeof ResetPasswordRequestStep1,
      readonly O: typeof ResetPasswordResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.ResetPasswordStep2
     */
    readonly resetPasswordStep2: {
      readonly name: "ResetPasswordStep2",
      readonly I: typeof ResetPasswordRequestStep2,
      readonly O: typeof ResetPasswordResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.ChangePassword
     */
    readonly changePassword: {
      readonly name: "ChangePassword",
      readonly I: typeof ChangePasswordRequest,
      readonly O: typeof ChangePasswordResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.NotifyAccountClosure
     */
    readonly notifyAccountClosure: {
      readonly name: "NotifyAccountClosure",
      readonly I: typeof NotifyAccountClosureRequest,
      readonly O: typeof NotifyAccountClosureResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * These two temporary endpoints for migrating everyone to naked domain:
     *
     * @generated from rpc user_service.AuthenticationService.GetSignedCookie
     */
    readonly getSignedCookie: {
      readonly name: "GetSignedCookie",
      readonly I: typeof GetSignedCookieRequest,
      readonly O: typeof SignedCookieResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.InstallSignedCookie
     */
    readonly installSignedCookie: {
      readonly name: "InstallSignedCookie",
      readonly I: typeof SignedCookieResponse,
      readonly O: typeof InstallSignedCookieResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.AuthenticationService.GetAPIKey
     */
    readonly getAPIKey: {
      readonly name: "GetAPIKey",
      readonly I: typeof GetAPIKeyRequest,
      readonly O: typeof GetAPIKeyResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service user_service.RegistrationService
 */
export declare const RegistrationService: {
  readonly typeName: "user_service.RegistrationService",
  readonly methods: {
    /**
     * @generated from rpc user_service.RegistrationService.Register
     */
    readonly register: {
      readonly name: "Register",
      readonly I: typeof UserRegistrationRequest,
      readonly O: typeof RegistrationResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service user_service.ProfileService
 */
export declare const ProfileService: {
  readonly typeName: "user_service.ProfileService",
  readonly methods: {
    /**
     * @generated from rpc user_service.ProfileService.GetRatings
     */
    readonly getRatings: {
      readonly name: "GetRatings",
      readonly I: typeof RatingsRequest,
      readonly O: typeof RatingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.GetStats
     */
    readonly getStats: {
      readonly name: "GetStats",
      readonly I: typeof StatsRequest,
      readonly O: typeof StatsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.GetProfile
     */
    readonly getProfile: {
      readonly name: "GetProfile",
      readonly I: typeof ProfileRequest,
      readonly O: typeof ProfileResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.GetPersonalInfo
     */
    readonly getPersonalInfo: {
      readonly name: "GetPersonalInfo",
      readonly I: typeof PersonalInfoRequest,
      readonly O: typeof PersonalInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.UpdatePersonalInfo
     */
    readonly updatePersonalInfo: {
      readonly name: "UpdatePersonalInfo",
      readonly I: typeof UpdatePersonalInfoRequest,
      readonly O: typeof UpdatePersonalInfoResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.UpdateAvatar
     */
    readonly updateAvatar: {
      readonly name: "UpdateAvatar",
      readonly I: typeof UpdateAvatarRequest,
      readonly O: typeof UpdateAvatarResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.RemoveAvatar
     */
    readonly removeAvatar: {
      readonly name: "RemoveAvatar",
      readonly I: typeof RemoveAvatarRequest,
      readonly O: typeof RemoveAvatarResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.ProfileService.GetBriefProfiles
     */
    readonly getBriefProfiles: {
      readonly name: "GetBriefProfiles",
      readonly I: typeof BriefProfilesRequest,
      readonly O: typeof BriefProfilesResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * @generated from service user_service.AutocompleteService
 */
export declare const AutocompleteService: {
  readonly typeName: "user_service.AutocompleteService",
  readonly methods: {
    /**
     * @generated from rpc user_service.AutocompleteService.GetCompletion
     */
    readonly getCompletion: {
      readonly name: "GetCompletion",
      readonly I: typeof UsernameSearchRequest,
      readonly O: typeof UsernameSearchResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * Yeah I know
 *
 * @generated from service user_service.SocializeService
 */
export declare const SocializeService: {
  readonly typeName: "user_service.SocializeService",
  readonly methods: {
    /**
     * @generated from rpc user_service.SocializeService.AddFollow
     */
    readonly addFollow: {
      readonly name: "AddFollow",
      readonly I: typeof AddFollowRequest,
      readonly O: typeof OKResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.RemoveFollow
     */
    readonly removeFollow: {
      readonly name: "RemoveFollow",
      readonly I: typeof RemoveFollowRequest,
      readonly O: typeof OKResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.GetFollows
     */
    readonly getFollows: {
      readonly name: "GetFollows",
      readonly I: typeof GetFollowsRequest,
      readonly O: typeof GetFollowsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.AddBlock
     */
    readonly addBlock: {
      readonly name: "AddBlock",
      readonly I: typeof AddBlockRequest,
      readonly O: typeof OKResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.RemoveBlock
     */
    readonly removeBlock: {
      readonly name: "RemoveBlock",
      readonly I: typeof RemoveBlockRequest,
      readonly O: typeof OKResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.GetBlocks
     */
    readonly getBlocks: {
      readonly name: "GetBlocks",
      readonly I: typeof GetBlocksRequest,
      readonly O: typeof GetBlocksResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * GetFullBlocks gets players who blocked us AND players we've blocked
     * together.
     *
     * @generated from rpc user_service.SocializeService.GetFullBlocks
     */
    readonly getFullBlocks: {
      readonly name: "GetFullBlocks",
      readonly I: typeof GetFullBlocksRequest,
      readonly O: typeof GetFullBlocksResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.GetActiveChatChannels
     */
    readonly getActiveChatChannels: {
      readonly name: "GetActiveChatChannels",
      readonly I: typeof GetActiveChatChannelsRequest,
      readonly O: typeof ActiveChatChannels,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.GetChatsForChannel
     */
    readonly getChatsForChannel: {
      readonly name: "GetChatsForChannel",
      readonly I: typeof GetChatsRequest,
      readonly O: typeof ChatMessages,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc user_service.SocializeService.GetModList
     */
    readonly getModList: {
      readonly name: "GetModList",
      readonly I: typeof GetModListRequest,
      readonly O: typeof GetModListResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

