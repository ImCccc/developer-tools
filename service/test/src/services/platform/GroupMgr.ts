/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  GroupMgrAssignUserToGroup = '/rpc/platform-iam/GroupMgr.AssignUserToGroup',
  GroupMgrGroupCreate = '/rpc/platform-iam/GroupMgr.GroupCreate',
  GroupMgrGroupDelete = '/rpc/platform-iam/GroupMgr.GroupDelete',
  GroupMgrGroupDetail = '/rpc/platform-iam/GroupMgr.GroupDetail',
  GroupMgrGroupEdit = '/rpc/platform-iam/GroupMgr.GroupEdit',
  GroupMgrGroupList = '/rpc/platform-iam/GroupMgr.GroupList',
  GroupMgrImportUserGroup = '/rpc/platform-iam/GroupMgr.ImportUserGroup',
  GroupMgrQueryGroupsByUser = '/rpc/platform-iam/GroupMgr.QueryGroupsByUser',
  GroupMgrRemoveUserFromGroup = '/rpc/platform-iam/GroupMgr.RemoveUserFromGroup',
  GroupMgrUserGroupList = '/rpc/platform-iam/GroupMgr.UserGroupList'
}

/** 分配用户到组织 POST /rpc/platform-iam/GroupMgr.AssignUserToGroup */
export async function GroupMgrAssignUserToGroup(
  body: PLATFORM.platformIamAssignUserToGroupRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamAssignUserToGroupResponse>('/rpc/platform-iam/GroupMgr.AssignUserToGroup', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新建组织 POST /rpc/platform-iam/GroupMgr.GroupCreate */
export async function GroupMgrGroupCreate(
  body: PLATFORM.platformIamGroupCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupCreateResponse>('/rpc/platform-iam/GroupMgr.GroupCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除组织（或子组织） POST /rpc/platform-iam/GroupMgr.GroupDelete */
export async function GroupMgrGroupDelete(
  body: PLATFORM.platformIamGroupDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupDeleteResponse>('/rpc/platform-iam/GroupMgr.GroupDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组织详情 POST /rpc/platform-iam/GroupMgr.GroupDetail */
export async function GroupMgrGroupDetail(
  body: PLATFORM.platformIamGroupDetailRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupDetailResponse>('/rpc/platform-iam/GroupMgr.GroupDetail', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑组织 POST /rpc/platform-iam/GroupMgr.GroupEdit */
export async function GroupMgrGroupEdit(
  body: PLATFORM.platformIamGroupEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupEditResponse>('/rpc/platform-iam/GroupMgr.GroupEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 组织列表 POST /rpc/platform-iam/GroupMgr.GroupList */
export async function GroupMgrGroupList(
  body: PLATFORM.platformIamGroupListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupListResponse>('/rpc/platform-iam/GroupMgr.GroupList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户组织架构导入 POST /rpc/platform-iam/GroupMgr.ImportUserGroup */
export async function GroupMgrImportUserGroup(
  body: PLATFORM.platformIamImportUserGroupRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamImportUserGroupResponse>('/rpc/platform-iam/GroupMgr.ImportUserGroup', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取用户所在组织 POST /rpc/platform-iam/GroupMgr.QueryGroupsByUser */
export async function GroupMgrQueryGroupsByUser(
  body: PLATFORM.platformIamQueryGroupsByUserRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamGroupListResponse>('/rpc/platform-iam/GroupMgr.QueryGroupsByUser', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 从组织中移除用户 POST /rpc/platform-iam/GroupMgr.RemoveUserFromGroup */
export async function GroupMgrRemoveUserFromGroup(
  body: PLATFORM.platformIamRemoveUserFromGroupRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamRemoveUserFromGroupResponse>('/rpc/platform-iam/GroupMgr.RemoveUserFromGroup', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户组织列表 POST /rpc/platform-iam/GroupMgr.UserGroupList */
export async function GroupMgrUserGroupList(
  body: PLATFORM.platformIamUserGroupListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserGroupListResponse>('/rpc/platform-iam/GroupMgr.UserGroupList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

