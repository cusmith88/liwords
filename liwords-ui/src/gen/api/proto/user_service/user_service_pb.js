// @generated by protoc-gen-es v1.1.0
// @generated from file user_service/user_service.proto (package user_service, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * UserLoginRequest is used for logging in.
 *
 * @generated from message user_service.UserLoginRequest
 */
export const UserLoginRequest = proto3.makeMessageType(
  "user_service.UserLoginRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ChangePasswordRequest
 */
export const ChangePasswordRequest = proto3.makeMessageType(
  "user_service.ChangePasswordRequest",
  () => [
    { no: 1, name: "old_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * The server should also set the session ID in the header.
 *
 * @generated from message user_service.LoginResponse
 */
export const LoginResponse = proto3.makeMessageType(
  "user_service.LoginResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ChangePasswordResponse
 */
export const ChangePasswordResponse = proto3.makeMessageType(
  "user_service.ChangePasswordResponse",
  [],
);

/**
 * @generated from message user_service.ResetPasswordRequestStep1
 */
export const ResetPasswordRequestStep1 = proto3.makeMessageType(
  "user_service.ResetPasswordRequestStep1",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ResetPasswordRequestStep2
 */
export const ResetPasswordRequestStep2 = proto3.makeMessageType(
  "user_service.ResetPasswordRequestStep2",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "reset_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ResetPasswordResponse
 */
export const ResetPasswordResponse = proto3.makeMessageType(
  "user_service.ResetPasswordResponse",
  [],
);

/**
 * @generated from message user_service.CountryFlag
 */
export const CountryFlag = proto3.makeMessageType(
  "user_service.CountryFlag",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.KickstarterBadge
 */
export const KickstarterBadge = proto3.makeMessageType(
  "user_service.KickstarterBadge",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Information require to display a user in a game.
 *
 * @generated from message user_service.UserGameInfo
 */
export const UserGameInfo = proto3.makeMessageType(
  "user_service.UserGameInfo",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "flag", kind: "message", T: CountryFlag },
    { no: 6, name: "kickstarter_badges", kind: "message", T: KickstarterBadge, repeated: true },
  ],
);

/**
 * SocketTokenRequest requests a token in order to authenticate with the
 * socket server
 *
 * @generated from message user_service.SocketTokenRequest
 */
export const SocketTokenRequest = proto3.makeMessageType(
  "user_service.SocketTokenRequest",
  [],
);

/**
 * @generated from message user_service.SocketTokenResponse
 */
export const SocketTokenResponse = proto3.makeMessageType(
  "user_service.SocketTokenResponse",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "cid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "front_end_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.UserLogoutRequest
 */
export const UserLogoutRequest = proto3.makeMessageType(
  "user_service.UserLogoutRequest",
  [],
);

/**
 * @generated from message user_service.LogoutResponse
 */
export const LogoutResponse = proto3.makeMessageType(
  "user_service.LogoutResponse",
  [],
);

/**
 * @generated from message user_service.NotifyAccountClosureRequest
 */
export const NotifyAccountClosureRequest = proto3.makeMessageType(
  "user_service.NotifyAccountClosureRequest",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.NotifyAccountClosureResponse
 */
export const NotifyAccountClosureResponse = proto3.makeMessageType(
  "user_service.NotifyAccountClosureResponse",
  [],
);

/**
 * @generated from message user_service.GetAPIKeyRequest
 */
export const GetAPIKeyRequest = proto3.makeMessageType(
  "user_service.GetAPIKeyRequest",
  () => [
    { no: 1, name: "reset", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message user_service.GetAPIKeyResponse
 */
export const GetAPIKeyResponse = proto3.makeMessageType(
  "user_service.GetAPIKeyResponse",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.GetSignedCookieRequest
 */
export const GetSignedCookieRequest = proto3.makeMessageType(
  "user_service.GetSignedCookieRequest",
  [],
);

/**
 * @generated from message user_service.SignedCookieResponse
 */
export const SignedCookieResponse = proto3.makeMessageType(
  "user_service.SignedCookieResponse",
  () => [
    { no: 1, name: "jwt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.InstallSignedCookieResponse
 */
export const InstallSignedCookieResponse = proto3.makeMessageType(
  "user_service.InstallSignedCookieResponse",
  [],
);

/**
 * @generated from message user_service.UserRegistrationRequest
 */
export const UserRegistrationRequest = proto3.makeMessageType(
  "user_service.UserRegistrationRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "registration_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "birth_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.RegistrationResponse
 */
export const RegistrationResponse = proto3.makeMessageType(
  "user_service.RegistrationResponse",
  () => [
    { no: 1, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.RatingsRequest
 */
export const RatingsRequest = proto3.makeMessageType(
  "user_service.RatingsRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * We just send the raw JSON from the db here for ease. Let the front-end
 * figure out how to display it.
 *
 * @generated from message user_service.RatingsResponse
 */
export const RatingsResponse = proto3.makeMessageType(
  "user_service.RatingsResponse",
  () => [
    { no: 1, name: "json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.StatsRequest
 */
export const StatsRequest = proto3.makeMessageType(
  "user_service.StatsRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * See ratings JSON note above.
 *
 * @generated from message user_service.StatsResponse
 */
export const StatsResponse = proto3.makeMessageType(
  "user_service.StatsResponse",
  () => [
    { no: 1, name: "json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ProfileRequest
 */
export const ProfileRequest = proto3.makeMessageType(
  "user_service.ProfileRequest",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ProfileResponse
 */
export const ProfileResponse = proto3.makeMessageType(
  "user_service.ProfileResponse",
  () => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "about", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "ratings_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "stats_json", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "avatars_editable", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "birth_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.PersonalInfoRequest
 */
export const PersonalInfoRequest = proto3.makeMessageType(
  "user_service.PersonalInfoRequest",
  [],
);

/**
 * @generated from message user_service.PersonalInfoResponse
 */
export const PersonalInfoResponse = proto3.makeMessageType(
  "user_service.PersonalInfoResponse",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "about", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "birth_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.UpdatePersonalInfoRequest
 */
export const UpdatePersonalInfoRequest = proto3.makeMessageType(
  "user_service.UpdatePersonalInfoRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "about", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "birth_date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.UpdatePersonalInfoResponse
 */
export const UpdatePersonalInfoResponse = proto3.makeMessageType(
  "user_service.UpdatePersonalInfoResponse",
  [],
);

/**
 * @generated from message user_service.UpdateAvatarRequest
 */
export const UpdateAvatarRequest = proto3.makeMessageType(
  "user_service.UpdateAvatarRequest",
  () => [
    { no: 1, name: "jpg_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message user_service.UpdateAvatarResponse
 */
export const UpdateAvatarResponse = proto3.makeMessageType(
  "user_service.UpdateAvatarResponse",
  () => [
    { no: 1, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.RemoveAvatarRequest
 */
export const RemoveAvatarRequest = proto3.makeMessageType(
  "user_service.RemoveAvatarRequest",
  [],
);

/**
 * @generated from message user_service.RemoveAvatarResponse
 */
export const RemoveAvatarResponse = proto3.makeMessageType(
  "user_service.RemoveAvatarResponse",
  [],
);

/**
 * @generated from message user_service.BriefProfilesRequest
 */
export const BriefProfilesRequest = proto3.makeMessageType(
  "user_service.BriefProfilesRequest",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * this is a subset of ProfileResponse
 *
 * @generated from message user_service.BriefProfile
 */
export const BriefProfile = proto3.makeMessageType(
  "user_service.BriefProfile",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "full_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "country_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.BriefProfilesResponse
 */
export const BriefProfilesResponse = proto3.makeMessageType(
  "user_service.BriefProfilesResponse",
  () => [
    { no: 1, name: "response", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: BriefProfile} },
  ],
);

/**
 * @generated from message user_service.UsernameSearchRequest
 */
export const UsernameSearchRequest = proto3.makeMessageType(
  "user_service.UsernameSearchRequest",
  () => [
    { no: 1, name: "prefix", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.UsernameSearchResponse
 */
export const UsernameSearchResponse = proto3.makeMessageType(
  "user_service.UsernameSearchResponse",
  () => [
    { no: 2, name: "users", kind: "message", T: BasicUser, repeated: true },
  ],
);

/**
 * @generated from message user_service.AddFollowRequest
 */
export const AddFollowRequest = proto3.makeMessageType(
  "user_service.AddFollowRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.RemoveFollowRequest
 */
export const RemoveFollowRequest = proto3.makeMessageType(
  "user_service.RemoveFollowRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.GetFollowsRequest
 */
export const GetFollowsRequest = proto3.makeMessageType(
  "user_service.GetFollowsRequest",
  [],
);

/**
 * @generated from message user_service.AddBlockRequest
 */
export const AddBlockRequest = proto3.makeMessageType(
  "user_service.AddBlockRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.RemoveBlockRequest
 */
export const RemoveBlockRequest = proto3.makeMessageType(
  "user_service.RemoveBlockRequest",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.GetBlocksRequest
 */
export const GetBlocksRequest = proto3.makeMessageType(
  "user_service.GetBlocksRequest",
  [],
);

/**
 * @generated from message user_service.GetFullBlocksRequest
 */
export const GetFullBlocksRequest = proto3.makeMessageType(
  "user_service.GetFullBlocksRequest",
  [],
);

/**
 * @generated from message user_service.OKResponse
 */
export const OKResponse = proto3.makeMessageType(
  "user_service.OKResponse",
  [],
);

/**
 * @generated from message user_service.BasicUser
 */
export const BasicUser = proto3.makeMessageType(
  "user_service.BasicUser",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.BasicFollowedUser
 */
export const BasicFollowedUser = proto3.makeMessageType(
  "user_service.BasicFollowedUser",
  () => [
    { no: 1, name: "uuid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message user_service.GetActiveChatChannelsRequest
 */
export const GetActiveChatChannelsRequest = proto3.makeMessageType(
  "user_service.GetActiveChatChannelsRequest",
  () => [
    { no: 1, name: "number", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "tournament_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.ActiveChatChannels
 */
export const ActiveChatChannels = proto3.makeMessageType(
  "user_service.ActiveChatChannels",
  () => [
    { no: 1, name: "channels", kind: "message", T: ActiveChatChannels_Channel, repeated: true },
  ],
);

/**
 * @generated from message user_service.ActiveChatChannels.Channel
 */
export const ActiveChatChannels_Channel = proto3.makeMessageType(
  "user_service.ActiveChatChannels.Channel",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "last_update", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "has_update", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "last_message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ActiveChatChannels_Channel"},
);

/**
 * @generated from message user_service.GetChatsRequest
 */
export const GetChatsRequest = proto3.makeMessageType(
  "user_service.GetChatsRequest",
  () => [
    { no: 1, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message user_service.GetFollowsResponse
 */
export const GetFollowsResponse = proto3.makeMessageType(
  "user_service.GetFollowsResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: BasicFollowedUser, repeated: true },
  ],
);

/**
 * @generated from message user_service.GetBlocksResponse
 */
export const GetBlocksResponse = proto3.makeMessageType(
  "user_service.GetBlocksResponse",
  () => [
    { no: 1, name: "users", kind: "message", T: BasicUser, repeated: true },
  ],
);

/**
 * XXX: We should eventually obsolete this and handle blocks purely on
 * the backend but we need to write a lot of hard code for that.
 *
 * @generated from message user_service.GetFullBlocksResponse
 */
export const GetFullBlocksResponse = proto3.makeMessageType(
  "user_service.GetFullBlocksResponse",
  () => [
    { no: 1, name: "user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message user_service.GetModListRequest
 */
export const GetModListRequest = proto3.makeMessageType(
  "user_service.GetModListRequest",
  [],
);

/**
 * @generated from message user_service.GetModListResponse
 */
export const GetModListResponse = proto3.makeMessageType(
  "user_service.GetModListResponse",
  () => [
    { no: 1, name: "admin_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "mod_user_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

