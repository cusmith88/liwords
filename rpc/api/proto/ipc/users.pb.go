// Definitions for user-related matters

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        (unknown)
// source: ipc/users.proto

package ipc

import (
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

type ChildStatus int32

const (
	ChildStatus_CHILD     ChildStatus = 0
	ChildStatus_NOT_CHILD ChildStatus = 1
	ChildStatus_UNKNOWN   ChildStatus = 2
)

// Enum value maps for ChildStatus.
var (
	ChildStatus_name = map[int32]string{
		0: "CHILD",
		1: "NOT_CHILD",
		2: "UNKNOWN",
	}
	ChildStatus_value = map[string]int32{
		"CHILD":     0,
		"NOT_CHILD": 1,
		"UNKNOWN":   2,
	}
)

func (x ChildStatus) Enum() *ChildStatus {
	p := new(ChildStatus)
	*p = x
	return p
}

func (x ChildStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ChildStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_ipc_users_proto_enumTypes[0].Descriptor()
}

func (ChildStatus) Type() protoreflect.EnumType {
	return &file_ipc_users_proto_enumTypes[0]
}

func (x ChildStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ChildStatus.Descriptor instead.
func (ChildStatus) EnumDescriptor() ([]byte, []int) {
	return file_ipc_users_proto_rawDescGZIP(), []int{0}
}

type ProfileUpdate struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=user_id,json=userId,proto3" json:"user_id,omitempty"`
	// map of variant name to rating
	Ratings map[string]*ProfileUpdate_Rating `protobuf:"bytes,2,rep,name=ratings,proto3" json:"ratings,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *ProfileUpdate) Reset() {
	*x = ProfileUpdate{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ipc_users_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProfileUpdate) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProfileUpdate) ProtoMessage() {}

func (x *ProfileUpdate) ProtoReflect() protoreflect.Message {
	mi := &file_ipc_users_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProfileUpdate.ProtoReflect.Descriptor instead.
func (*ProfileUpdate) Descriptor() ([]byte, []int) {
	return file_ipc_users_proto_rawDescGZIP(), []int{0}
}

func (x *ProfileUpdate) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

func (x *ProfileUpdate) GetRatings() map[string]*ProfileUpdate_Rating {
	if x != nil {
		return x.Ratings
	}
	return nil
}

type ProfileUpdate_Rating struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Rating    float64 `protobuf:"fixed64,1,opt,name=rating,proto3" json:"rating,omitempty"`
	Deviation float64 `protobuf:"fixed64,2,opt,name=deviation,proto3" json:"deviation,omitempty"`
}

func (x *ProfileUpdate_Rating) Reset() {
	*x = ProfileUpdate_Rating{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ipc_users_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProfileUpdate_Rating) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProfileUpdate_Rating) ProtoMessage() {}

func (x *ProfileUpdate_Rating) ProtoReflect() protoreflect.Message {
	mi := &file_ipc_users_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProfileUpdate_Rating.ProtoReflect.Descriptor instead.
func (*ProfileUpdate_Rating) Descriptor() ([]byte, []int) {
	return file_ipc_users_proto_rawDescGZIP(), []int{0, 0}
}

func (x *ProfileUpdate_Rating) GetRating() float64 {
	if x != nil {
		return x.Rating
	}
	return 0
}

func (x *ProfileUpdate_Rating) GetDeviation() float64 {
	if x != nil {
		return x.Deviation
	}
	return 0
}

var File_ipc_users_proto protoreflect.FileDescriptor

var file_ipc_users_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x69, 0x70, 0x63, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x03, 0x69, 0x70, 0x63, 0x22, 0xfa, 0x01, 0x0a, 0x0d, 0x50, 0x72, 0x6f, 0x66, 0x69,
	0x6c, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x75, 0x73, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72, 0x49,
	0x64, 0x12, 0x39, 0x0a, 0x07, 0x72, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x1f, 0x2e, 0x69, 0x70, 0x63, 0x2e, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x52, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x45, 0x6e,
	0x74, 0x72, 0x79, 0x52, 0x07, 0x72, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x1a, 0x3e, 0x0a, 0x06,
	0x52, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x16, 0x0a, 0x06, 0x72, 0x61, 0x74, 0x69, 0x6e, 0x67,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x01, 0x52, 0x06, 0x72, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x1c,
	0x0a, 0x09, 0x64, 0x65, 0x76, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x01, 0x52, 0x09, 0x64, 0x65, 0x76, 0x69, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x55, 0x0a, 0x0c,
	0x52, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03,
	0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x2f,
	0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x69, 0x70, 0x63, 0x2e, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x2e, 0x52, 0x61, 0x74, 0x69, 0x6e, 0x67, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a,
	0x02, 0x38, 0x01, 0x2a, 0x34, 0x0a, 0x0b, 0x43, 0x68, 0x69, 0x6c, 0x64, 0x53, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x09, 0x0a, 0x05, 0x43, 0x48, 0x49, 0x4c, 0x44, 0x10, 0x00, 0x12, 0x0d, 0x0a,
	0x09, 0x4e, 0x4f, 0x54, 0x5f, 0x43, 0x48, 0x49, 0x4c, 0x44, 0x10, 0x01, 0x12, 0x0b, 0x0a, 0x07,
	0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e, 0x10, 0x02, 0x42, 0x2f, 0x5a, 0x2d, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x64, 0x6f, 0x6d, 0x69, 0x6e, 0x6f, 0x31, 0x34,
	0x2f, 0x6c, 0x69, 0x77, 0x6f, 0x72, 0x64, 0x73, 0x2f, 0x72, 0x70, 0x63, 0x2f, 0x61, 0x70, 0x69,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x69, 0x70, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_ipc_users_proto_rawDescOnce sync.Once
	file_ipc_users_proto_rawDescData = file_ipc_users_proto_rawDesc
)

func file_ipc_users_proto_rawDescGZIP() []byte {
	file_ipc_users_proto_rawDescOnce.Do(func() {
		file_ipc_users_proto_rawDescData = protoimpl.X.CompressGZIP(file_ipc_users_proto_rawDescData)
	})
	return file_ipc_users_proto_rawDescData
}

var file_ipc_users_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_ipc_users_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ipc_users_proto_goTypes = []interface{}{
	(ChildStatus)(0),             // 0: ipc.ChildStatus
	(*ProfileUpdate)(nil),        // 1: ipc.ProfileUpdate
	(*ProfileUpdate_Rating)(nil), // 2: ipc.ProfileUpdate.Rating
	nil,                          // 3: ipc.ProfileUpdate.RatingsEntry
}
var file_ipc_users_proto_depIdxs = []int32{
	3, // 0: ipc.ProfileUpdate.ratings:type_name -> ipc.ProfileUpdate.RatingsEntry
	2, // 1: ipc.ProfileUpdate.RatingsEntry.value:type_name -> ipc.ProfileUpdate.Rating
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_ipc_users_proto_init() }
func file_ipc_users_proto_init() {
	if File_ipc_users_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ipc_users_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProfileUpdate); i {
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
		file_ipc_users_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProfileUpdate_Rating); i {
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
			RawDescriptor: file_ipc_users_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ipc_users_proto_goTypes,
		DependencyIndexes: file_ipc_users_proto_depIdxs,
		EnumInfos:         file_ipc_users_proto_enumTypes,
		MessageInfos:      file_ipc_users_proto_msgTypes,
	}.Build()
	File_ipc_users_proto = out.File
	file_ipc_users_proto_rawDesc = nil
	file_ipc_users_proto_goTypes = nil
	file_ipc_users_proto_depIdxs = nil
}
