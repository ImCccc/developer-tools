/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  UserMgrQueryUserRoles = '/rpc/platform-iam/UserMgr.QueryUserRoles',
  UserMgrResetPassword = '/rpc/platform-iam/UserMgr.ResetPassword',
  UserMgrUpdatePassword = '/rpc/platform-iam/UserMgr.UpdatePassword',
  UserMgrUserAssignRole = '/rpc/platform-iam/UserMgr.UserAssignRole',
  UserMgrUserCreate = '/rpc/platform-iam/UserMgr.UserCreate',
  UserMgrUserDelete = '/rpc/platform-iam/UserMgr.UserDelete',
  UserMgrUserEdit = '/rpc/platform-iam/UserMgr.UserEdit',
  UserMgrUserInfo = '/rpc/platform-iam/UserMgr.UserInfo',
  UserMgrUserList = '/rpc/platform-iam/UserMgr.UserList',
  UserMgrVerifyUserEmail = '/rpc/platform-iam/UserMgr.VerifyUserEmail',
  UserMgrVerifyUserPhone = '/rpc/platform-iam/UserMgr.VerifyUserPhone'
}

/** 用户角色查询 POST /rpc/platform-iam/UserMgr.QueryUserRoles */
export async function UserMgrQueryUserRoles(
  body: PLATFORM.platformIamQueryUserRolesRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamQueryUserRolesResponse>('/rpc/platform-iam/UserMgr.QueryUserRoles', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 重置密码 POST /rpc/platform-iam/UserMgr.ResetPassword */
export async function UserMgrResetPassword(
  body: PLATFORM.platformIamResetPasswordRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamResetPasswordResponse>('/rpc/platform-iam/UserMgr.ResetPassword', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户密码 POST /rpc/platform-iam/UserMgr.UpdatePassword */
export async function UserMgrUpdatePassword(
  body: PLATFORM.platformIamUpdatePasswordRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUpdatePasswordResponse>('/rpc/platform-iam/UserMgr.UpdatePassword', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户分配角色 POST /rpc/platform-iam/UserMgr.UserAssignRole */
export async function UserMgrUserAssignRole(
  body: PLATFORM.platformIamUserAssignRoleRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserAssignRoleResponse>('/rpc/platform-iam/UserMgr.UserAssignRole', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新建用户 POST /rpc/platform-iam/UserMgr.UserCreate */
export async function UserMgrUserCreate(
  body: PLATFORM.platformIamUserCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserCreateResponse>('/rpc/platform-iam/UserMgr.UserCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 POST /rpc/platform-iam/UserMgr.UserDelete */
export async function UserMgrUserDelete(
  body: PLATFORM.platformIamUserDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserDeleteResponse>('/rpc/platform-iam/UserMgr.UserDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑用户 POST /rpc/platform-iam/UserMgr.UserEdit */
export async function UserMgrUserEdit(
  body: PLATFORM.platformIamUserEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserEditResponse>('/rpc/platform-iam/UserMgr.UserEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户详情 POST /rpc/platform-iam/UserMgr.UserInfo */
export async function UserMgrUserInfo(
  body: PLATFORM.platformIamUserInfoRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserInfoResponse>('/rpc/platform-iam/UserMgr.UserInfo', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户列表查询 POST /rpc/platform-iam/UserMgr.UserList */
export async function UserMgrUserList(
  body: PLATFORM.platformIamUserListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamUserListResponse>('/rpc/platform-iam/UserMgr.UserList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户邮箱认证 POST /rpc/platform-iam/UserMgr.VerifyUserEmail */
export async function UserMgrVerifyUserEmail(
  body: PLATFORM.platformIamVerifyUserEmailRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamVerifyUserEmailResponse>('/rpc/platform-iam/UserMgr.VerifyUserEmail', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户手机号认证 POST /rpc/platform-iam/UserMgr.VerifyUserPhone */
export async function UserMgrVerifyUserPhone(
  body: PLATFORM.platformIamVerifyUserPhoneRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamVerifyUserPhoneResponse>('/rpc/platform-iam/UserMgr.VerifyUserPhone', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

