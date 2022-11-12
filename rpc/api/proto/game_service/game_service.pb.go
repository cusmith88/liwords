// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        (unknown)
// source: game_service/game_service.proto

package game_service

import (
	ipc "github.com/domino14/liwords/rpc/api/proto/ipc"
	macondo "github.com/domino14/macondo/gen/api/proto/macondo"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Meta information about a game, including its players.
type GameInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GameId string `protobuf:"bytes,1,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *GameInfoRequest) Reset() {
	*x = GameInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameInfoRequest) ProtoMessage() {}

func (x *GameInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameInfoRequest.ProtoReflect.Descriptor instead.
func (*GameInfoRequest) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{0}
}

func (x *GameInfoRequest) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

type GCGRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GameId string `protobuf:"bytes,1,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *GCGRequest) Reset() {
	*x = GCGRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GCGRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GCGRequest) ProtoMessage() {}

func (x *GCGRequest) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GCGRequest.ProtoReflect.Descriptor instead.
func (*GCGRequest) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{1}
}

func (x *GCGRequest) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

type GameHistoryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GameId string `protobuf:"bytes,1,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
}

func (x *GameHistoryRequest) Reset() {
	*x = GameHistoryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameHistoryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameHistoryRequest) ProtoMessage() {}

func (x *GameHistoryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameHistoryRequest.ProtoReflect.Descriptor instead.
func (*GameHistoryRequest) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{2}
}

func (x *GameHistoryRequest) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

type GCGResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Gcg string `protobuf:"bytes,1,opt,name=gcg,proto3" json:"gcg,omitempty"`
}

func (x *GCGResponse) Reset() {
	*x = GCGResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GCGResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GCGResponse) ProtoMessage() {}

func (x *GCGResponse) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GCGResponse.ProtoReflect.Descriptor instead.
func (*GCGResponse) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{3}
}

func (x *GCGResponse) GetGcg() string {
	if x != nil {
		return x.Gcg
	}
	return ""
}

type GameHistoryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	History *macondo.GameHistory `protobuf:"bytes,1,opt,name=history,proto3" json:"history,omitempty"`
}

func (x *GameHistoryResponse) Reset() {
	*x = GameHistoryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GameHistoryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GameHistoryResponse) ProtoMessage() {}

func (x *GameHistoryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GameHistoryResponse.ProtoReflect.Descriptor instead.
func (*GameHistoryResponse) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{4}
}

func (x *GameHistoryResponse) GetHistory() *macondo.GameHistory {
	if x != nil {
		return x.History
	}
	return nil
}

type RecentGamesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Username string `protobuf:"bytes,1,opt,name=username,proto3" json:"username,omitempty"`
	NumGames int32  `protobuf:"varint,2,opt,name=num_games,json=numGames,proto3" json:"num_games,omitempty"`
	Offset   int32  `protobuf:"varint,3,opt,name=offset,proto3" json:"offset,omitempty"`
}

func (x *RecentGamesRequest) Reset() {
	*x = RecentGamesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RecentGamesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RecentGamesRequest) ProtoMessage() {}

func (x *RecentGamesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RecentGamesRequest.ProtoReflect.Descriptor instead.
func (*RecentGamesRequest) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{5}
}

func (x *RecentGamesRequest) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *RecentGamesRequest) GetNumGames() int32 {
	if x != nil {
		return x.NumGames
	}
	return 0
}

func (x *RecentGamesRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type StreakInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Streak      []*StreakInfoResponse_SingleGameInfo `protobuf:"bytes,1,rep,name=streak,proto3" json:"streak,omitempty"`
	PlayersInfo []*StreakInfoResponse_PlayerInfo     `protobuf:"bytes,3,rep,name=playersInfo,proto3" json:"playersInfo,omitempty"`
}

func (x *StreakInfoResponse) Reset() {
	*x = StreakInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreakInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreakInfoResponse) ProtoMessage() {}

func (x *StreakInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreakInfoResponse.ProtoReflect.Descriptor instead.
func (*StreakInfoResponse) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{6}
}

func (x *StreakInfoResponse) GetStreak() []*StreakInfoResponse_SingleGameInfo {
	if x != nil {
		return x.Streak
	}
	return nil
}

func (x *StreakInfoResponse) GetPlayersInfo() []*StreakInfoResponse_PlayerInfo {
	if x != nil {
		return x.PlayersInfo
	}
	return nil
}

type RematchStreakRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	OriginalRequestId string `protobuf:"bytes,1,opt,name=original_request_id,json=originalRequestId,proto3" json:"original_request_id,omitempty"`
}

func (x *RematchStreakRequest) Reset() {
	*x = RematchStreakRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RematchStreakRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RematchStreakRequest) ProtoMessage() {}

func (x *RematchStreakRequest) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RematchStreakRequest.ProtoReflect.Descriptor instead.
func (*RematchStreakRequest) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{7}
}

func (x *RematchStreakRequest) GetOriginalRequestId() string {
	if x != nil {
		return x.OriginalRequestId
	}
	return ""
}

type StreakInfoResponse_SingleGameInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	GameId string `protobuf:"bytes,1,opt,name=game_id,json=gameId,proto3" json:"game_id,omitempty"`
	Winner int32  `protobuf:"varint,3,opt,name=winner,proto3" json:"winner,omitempty"` // the index in `players` or -1 if no winner (tie)
}

func (x *StreakInfoResponse_SingleGameInfo) Reset() {
	*x = StreakInfoResponse_SingleGameInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreakInfoResponse_SingleGameInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreakInfoResponse_SingleGameInfo) ProtoMessage() {}

func (x *StreakInfoResponse_SingleGameInfo) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreakInfoResponse_SingleGameInfo.ProtoReflect.Descriptor instead.
func (*StreakInfoResponse_SingleGameInfo) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{6, 0}
}

func (x *StreakInfoResponse_SingleGameInfo) GetGameId() string {
	if x != nil {
		return x.GameId
	}
	return ""
}

func (x *StreakInfoResponse_SingleGameInfo) GetWinner() int32 {
	if x != nil {
		return x.Winner
	}
	return 0
}

type StreakInfoResponse_PlayerInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Nickname string `protobuf:"bytes,1,opt,name=nickname,proto3" json:"nickname,omitempty"`
	Uuid     string `protobuf:"bytes,2,opt,name=uuid,proto3" json:"uuid,omitempty"` // player uuid needed for censoring
}

func (x *StreakInfoResponse_PlayerInfo) Reset() {
	*x = StreakInfoResponse_PlayerInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_game_service_game_service_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StreakInfoResponse_PlayerInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StreakInfoResponse_PlayerInfo) ProtoMessage() {}

func (x *StreakInfoResponse_PlayerInfo) ProtoReflect() protoreflect.Message {
	mi := &file_game_service_game_service_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StreakInfoResponse_PlayerInfo.ProtoReflect.Descriptor instead.
func (*StreakInfoResponse_PlayerInfo) Descriptor() ([]byte, []int) {
	return file_game_service_game_service_proto_rawDescGZIP(), []int{6, 1}
}

func (x *StreakInfoResponse_PlayerInfo) GetNickname() string {
	if x != nil {
		return x.Nickname
	}
	return ""
}

func (x *StreakInfoResponse_PlayerInfo) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

var File_game_service_game_service_proto protoreflect.FileDescriptor

var file_game_service_game_service_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2f, 0x67,
	0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x0c, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x1a,
	0x15, 0x6d, 0x61, 0x63, 0x6f, 0x6e, 0x64, 0x6f, 0x2f, 0x6d, 0x61, 0x63, 0x6f, 0x6e, 0x64, 0x6f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x69, 0x70, 0x63, 0x2f, 0x6f, 0x6d, 0x67, 0x77,
	0x6f, 0x72, 0x64, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x2a, 0x0a, 0x0f, 0x47, 0x61,
	0x6d, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a,
	0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06,
	0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x22, 0x25, 0x0a, 0x0a, 0x47, 0x43, 0x47, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x22, 0x2d, 0x0a,
	0x12, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x22, 0x1f, 0x0a, 0x0b,
	0x47, 0x43, 0x47, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x67,
	0x63, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x67, 0x63, 0x67, 0x22, 0x45, 0x0a,
	0x13, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x07, 0x68, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6d, 0x61, 0x63, 0x6f, 0x6e, 0x64, 0x6f, 0x2e,
	0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x07, 0x68, 0x69, 0x73,
	0x74, 0x6f, 0x72, 0x79, 0x22, 0x65, 0x0a, 0x12, 0x52, 0x65, 0x63, 0x65, 0x6e, 0x74, 0x47, 0x61,
	0x6d, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73,
	0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73,
	0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6e, 0x75, 0x6d, 0x5f, 0x67, 0x61,
	0x6d, 0x65, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x6e, 0x75, 0x6d, 0x47, 0x61,
	0x6d, 0x65, 0x73, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x22, 0xad, 0x02, 0x0a, 0x12,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x47, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x53, 0x69, 0x6e, 0x67, 0x6c, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x49,
	0x6e, 0x66, 0x6f, 0x52, 0x06, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x12, 0x4d, 0x0a, 0x0b, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x2b, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0b, 0x70,
	0x6c, 0x61, 0x79, 0x65, 0x72, 0x73, 0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x41, 0x0a, 0x0e, 0x53, 0x69,
	0x6e, 0x67, 0x6c, 0x65, 0x47, 0x61, 0x6d, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x17, 0x0a, 0x07,
	0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x67,
	0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x77, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x77, 0x69, 0x6e, 0x6e, 0x65, 0x72, 0x1a, 0x3c, 0x0a,
	0x0a, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1a, 0x0a, 0x08, 0x6e,
	0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6e,
	0x69, 0x63, 0x6b, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x22, 0x46, 0x0a, 0x14, 0x52,
	0x65, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x2e, 0x0a, 0x13, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x61, 0x6c, 0x5f,
	0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x11, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x61, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x49, 0x64, 0x32, 0x96, 0x03, 0x0a, 0x13, 0x47, 0x61, 0x6d, 0x65, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x43, 0x0a, 0x0b, 0x47,
	0x65, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1d, 0x2e, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x49, 0x6e,
	0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x69, 0x70, 0x63, 0x2e,
	0x47, 0x61, 0x6d, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x3d, 0x0a, 0x06, 0x47, 0x65, 0x74, 0x47, 0x43, 0x47, 0x12, 0x18, 0x2e, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x47, 0x43, 0x47, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x2e, 0x47, 0x43, 0x47, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12,
	0x55, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72,
	0x79, 0x12, 0x20, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x2e, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x2e, 0x47, 0x61, 0x6d, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4a, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x63,
	0x65, 0x6e, 0x74, 0x47, 0x61, 0x6d, 0x65, 0x73, 0x12, 0x20, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x6e, 0x74, 0x47, 0x61,
	0x6d, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x69, 0x70, 0x63,
	0x2e, 0x47, 0x61, 0x6d, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x73, 0x12, 0x58, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x52, 0x65, 0x6d, 0x61, 0x74, 0x63, 0x68,
	0x53, 0x74, 0x72, 0x65, 0x61, 0x6b, 0x12, 0x22, 0x2e, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x52, 0x65, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x53, 0x74, 0x72,
	0x65, 0x61, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x67, 0x61, 0x6d,
	0x65, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6b,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x38, 0x5a, 0x36,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x6f, 0x6d, 0x69, 0x6e,
	0x6f, 0x31, 0x34, 0x2f, 0x6c, 0x69, 0x77, 0x6f, 0x72, 0x64, 0x73, 0x2f, 0x72, 0x70, 0x63, 0x2f,
	0x61, 0x70, 0x69, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_game_service_game_service_proto_rawDescOnce sync.Once
	file_game_service_game_service_proto_rawDescData = file_game_service_game_service_proto_rawDesc
)

func file_game_service_game_service_proto_rawDescGZIP() []byte {
	file_game_service_game_service_proto_rawDescOnce.Do(func() {
		file_game_service_game_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_game_service_game_service_proto_rawDescData)
	})
	return file_game_service_game_service_proto_rawDescData
}

var file_game_service_game_service_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_game_service_game_service_proto_goTypes = []interface{}{
	(*GameInfoRequest)(nil),                   // 0: game_service.GameInfoRequest
	(*GCGRequest)(nil),                        // 1: game_service.GCGRequest
	(*GameHistoryRequest)(nil),                // 2: game_service.GameHistoryRequest
	(*GCGResponse)(nil),                       // 3: game_service.GCGResponse
	(*GameHistoryResponse)(nil),               // 4: game_service.GameHistoryResponse
	(*RecentGamesRequest)(nil),                // 5: game_service.RecentGamesRequest
	(*StreakInfoResponse)(nil),                // 6: game_service.StreakInfoResponse
	(*RematchStreakRequest)(nil),              // 7: game_service.RematchStreakRequest
	(*StreakInfoResponse_SingleGameInfo)(nil), // 8: game_service.StreakInfoResponse.SingleGameInfo
	(*StreakInfoResponse_PlayerInfo)(nil),     // 9: game_service.StreakInfoResponse.PlayerInfo
	(*macondo.GameHistory)(nil),               // 10: macondo.GameHistory
	(*ipc.GameInfoResponse)(nil),              // 11: ipc.GameInfoResponse
	(*ipc.GameInfoResponses)(nil),             // 12: ipc.GameInfoResponses
}
var file_game_service_game_service_proto_depIdxs = []int32{
	10, // 0: game_service.GameHistoryResponse.history:type_name -> macondo.GameHistory
	8,  // 1: game_service.StreakInfoResponse.streak:type_name -> game_service.StreakInfoResponse.SingleGameInfo
	9,  // 2: game_service.StreakInfoResponse.playersInfo:type_name -> game_service.StreakInfoResponse.PlayerInfo
	0,  // 3: game_service.GameMetadataService.GetMetadata:input_type -> game_service.GameInfoRequest
	1,  // 4: game_service.GameMetadataService.GetGCG:input_type -> game_service.GCGRequest
	2,  // 5: game_service.GameMetadataService.GetGameHistory:input_type -> game_service.GameHistoryRequest
	5,  // 6: game_service.GameMetadataService.GetRecentGames:input_type -> game_service.RecentGamesRequest
	7,  // 7: game_service.GameMetadataService.GetRematchStreak:input_type -> game_service.RematchStreakRequest
	11, // 8: game_service.GameMetadataService.GetMetadata:output_type -> ipc.GameInfoResponse
	3,  // 9: game_service.GameMetadataService.GetGCG:output_type -> game_service.GCGResponse
	4,  // 10: game_service.GameMetadataService.GetGameHistory:output_type -> game_service.GameHistoryResponse
	12, // 11: game_service.GameMetadataService.GetRecentGames:output_type -> ipc.GameInfoResponses
	6,  // 12: game_service.GameMetadataService.GetRematchStreak:output_type -> game_service.StreakInfoResponse
	8,  // [8:13] is the sub-list for method output_type
	3,  // [3:8] is the sub-list for method input_type
	3,  // [3:3] is the sub-list for extension type_name
	3,  // [3:3] is the sub-list for extension extendee
	0,  // [0:3] is the sub-list for field type_name
}

func init() { file_game_service_game_service_proto_init() }
func file_game_service_game_service_proto_init() {
	if File_game_service_game_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_game_service_game_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GCGRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameHistoryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GCGResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GameHistoryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RecentGamesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreakInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RematchStreakRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreakInfoResponse_SingleGameInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_game_service_game_service_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StreakInfoResponse_PlayerInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_game_service_game_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_game_service_game_service_proto_goTypes,
		DependencyIndexes: file_game_service_game_service_proto_depIdxs,
		MessageInfos:      file_game_service_game_service_proto_msgTypes,
	}.Build()
	File_game_service_game_service_proto = out.File
	file_game_service_game_service_proto_rawDesc = nil
	file_game_service_game_service_proto_goTypes = nil
	file_game_service_game_service_proto_depIdxs = nil
}
