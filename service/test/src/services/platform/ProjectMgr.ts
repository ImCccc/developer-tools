/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  ProjectMgrProjectCreate = '/rpc/platform-iam/ProjectMgr.ProjectCreate',
  ProjectMgrProjectDelete = '/rpc/platform-iam/ProjectMgr.ProjectDelete',
  ProjectMgrProjectDetail = '/rpc/platform-iam/ProjectMgr.ProjectDetail',
  ProjectMgrProjectEdit = '/rpc/platform-iam/ProjectMgr.ProjectEdit',
  ProjectMgrProjectList = '/rpc/platform-iam/ProjectMgr.ProjectList'
}

/** 新建项目 POST /rpc/platform-iam/ProjectMgr.ProjectCreate */
export async function ProjectMgrProjectCreate(
  body: PLATFORM.platformIamProjectCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamProjectCreateResponse>('/rpc/platform-iam/ProjectMgr.ProjectCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除项目 POST /rpc/platform-iam/ProjectMgr.ProjectDelete */
export async function ProjectMgrProjectDelete(
  body: PLATFORM.platformIamProjectDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamProjectDeleteResponse>('/rpc/platform-iam/ProjectMgr.ProjectDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目详情 POST /rpc/platform-iam/ProjectMgr.ProjectDetail */
export async function ProjectMgrProjectDetail(
  body: PLATFORM.platformIamProjectDetailRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamProjectDetailResponse>('/rpc/platform-iam/ProjectMgr.ProjectDetail', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 编辑项目 POST /rpc/platform-iam/ProjectMgr.ProjectEdit */
export async function ProjectMgrProjectEdit(
  body: PLATFORM.platformIamProjectEditRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamProjectEditResponse>('/rpc/platform-iam/ProjectMgr.ProjectEdit', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 项目列表 POST /rpc/platform-iam/ProjectMgr.ProjectList */
export async function ProjectMgrProjectList(
  body: PLATFORM.platformIamProjectListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamProjectListResponse>('/rpc/platform-iam/ProjectMgr.ProjectList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

