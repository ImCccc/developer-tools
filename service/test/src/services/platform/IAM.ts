/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  IAMLogin = '/rpc/platform-iam/IAM.Login',
  IAMLogout = '/rpc/platform-iam/IAM.Logout',
  IAMPermissionList = '/rpc/platform-iam/IAM.PermissionList',
  IAMRefreshToken = '/rpc/platform-iam/IAM.RefreshToken'
}

/** 用户登录 POST /rpc/platform-iam/IAM.Login */
export async function IAMLogin(
  body: PLATFORM.platformIamLoginRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamLoginResponse>('/rpc/platform-iam/IAM.Login', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登出 POST /rpc/platform-iam/IAM.Logout */
export async function IAMLogout(
  body: PLATFORM.platformIamLogoutRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamLogoutResponse>('/rpc/platform-iam/IAM.Logout', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户访问权限列表 POST /rpc/platform-iam/IAM.PermissionList */
export async function IAMPermissionList(
  body: PLATFORM.platformIamPermissionListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamPermissionListResponse>('/rpc/platform-iam/IAM.PermissionList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 刷新令牌 POST /rpc/platform-iam/IAM.RefreshToken */
export async function IAMRefreshToken(
  body: PLATFORM.platformIamRefreshTokenRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamRefreshTokenResponse>('/rpc/platform-iam/IAM.RefreshToken', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

