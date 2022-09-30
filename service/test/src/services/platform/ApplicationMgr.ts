/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  ApplicationMgrApplicationCreate = '/rpc/platform-iam/ApplicationMgr.ApplicationCreate',
  ApplicationMgrApplicationDelete = '/rpc/platform-iam/ApplicationMgr.ApplicationDelete',
  ApplicationMgrApplicationDetail = '/rpc/platform-iam/ApplicationMgr.ApplicationDetail',
  ApplicationMgrApplicationEdit = '/rpc/platform-iam/ApplicationMgr.ApplicationEdit',
  ApplicationMgrApplicationList = '/rpc/platform-iam/ApplicationMgr.ApplicationList'
}

/** 新建应用 POST /rpc/platform-iam/ApplicationMgr.ApplicationCreate */
export async function ApplicationMgrApplicationCreate(
  body: PLATFORM.platformIamApplicationCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamApplicationCreateResponse>('/rpc/platform-iam/ApplicationMgr.ApplicationCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用 POST /rpc/platform-iam/ApplicationMgr.ApplicationDelete */
export async function ApplicationMgrApplicationDelete(
  body: PLATFORM.platformIamApplicationDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamApplicationDeleteResponse>('/rpc/platform-iam/ApplicationMgr.ApplicationDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用详情 POST /rpc/platform-iam/ApplicationMgr.ApplicationDetail */
export async function ApplicationMgrApplicationDetail(
  body: PLATFORM.platformIamApplicationDetailRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamApplicationDetailResponse>('/rpc/platform-iam/ApplicationMgr.ApplicationDetail', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑应用 POST /rpc/platform-iam/ApplicationMgr.ApplicationEdit */
export async function ApplicationMgrApplicationEdit(
  body: PLATFORM.platformIamApplicationEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamApplicationEditResponse>('/rpc/platform-iam/ApplicationMgr.ApplicationEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用列表 POST /rpc/platform-iam/ApplicationMgr.ApplicationList */
export async function ApplicationMgrApplicationList(
  body: PLATFORM.platformIamApplicationListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamApplicationListResponse>('/rpc/platform-iam/ApplicationMgr.ApplicationList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

