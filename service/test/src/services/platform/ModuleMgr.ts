/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  ModuleMgrModuleCreate = '/rpc/platform-iam/ModuleMgr.ModuleCreate',
  ModuleMgrModuleDelete = '/rpc/platform-iam/ModuleMgr.ModuleDelete',
  ModuleMgrModuleEdit = '/rpc/platform-iam/ModuleMgr.ModuleEdit',
  ModuleMgrModuleList = '/rpc/platform-iam/ModuleMgr.ModuleList'
}

/** 新建模块 POST /rpc/platform-iam/ModuleMgr.ModuleCreate */
export async function ModuleMgrModuleCreate(
  body: PLATFORM.platformIamModuleCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamModuleCreateResponse>('/rpc/platform-iam/ModuleMgr.ModuleCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除模块 POST /rpc/platform-iam/ModuleMgr.ModuleDelete */
export async function ModuleMgrModuleDelete(
  body: PLATFORM.platformIamModuleDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamModuleDeleteResponse>('/rpc/platform-iam/ModuleMgr.ModuleDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑模块 POST /rpc/platform-iam/ModuleMgr.ModuleEdit */
export async function ModuleMgrModuleEdit(
  body: PLATFORM.platformIamModuleEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamModuleEditResponse>('/rpc/platform-iam/ModuleMgr.ModuleEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 模块列表 POST /rpc/platform-iam/ModuleMgr.ModuleList */
export async function ModuleMgrModuleList(
  body: PLATFORM.platformIamModuleListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamModuleListResponse>('/rpc/platform-iam/ModuleMgr.ModuleList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

