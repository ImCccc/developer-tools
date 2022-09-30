/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  StrategyMgrStrategyCreate = '/rpc/platform-iam/StrategyMgr.StrategyCreate',
  StrategyMgrStrategyDelete = '/rpc/platform-iam/StrategyMgr.StrategyDelete',
  StrategyMgrStrategyList = '/rpc/platform-iam/StrategyMgr.StrategyList',
  StrategyMgrStrategyUpdate = '/rpc/platform-iam/StrategyMgr.StrategyUpdate'
}

/** 新建策略 POST /rpc/platform-iam/StrategyMgr.StrategyCreate */
export async function StrategyMgrStrategyCreate(
  body: PLATFORM.platformIamStrategyCreateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamStrategyCreateResponse>('/rpc/platform-iam/StrategyMgr.StrategyCreate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除策略 POST /rpc/platform-iam/StrategyMgr.StrategyDelete */
export async function StrategyMgrStrategyDelete(
  body: PLATFORM.platformIamStrategyDeleteRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamStrategyDeleteResponse>('/rpc/platform-iam/StrategyMgr.StrategyDelete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 策略列表 POST /rpc/platform-iam/StrategyMgr.StrategyList */
export async function StrategyMgrStrategyList(
  body: PLATFORM.platformIamStrategyListRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamStrategyListResponse>('/rpc/platform-iam/StrategyMgr.StrategyList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新策略 POST /rpc/platform-iam/StrategyMgr.StrategyUpdate */
export async function StrategyMgrStrategyUpdate(
  body: PLATFORM.platformIamStrategyUpdateRequest,
  options ?: {[key: string]: any}
) {
  return request<PLATFORM.platformIamStrategyUpdateResponse>('/rpc/platform-iam/StrategyMgr.StrategyUpdate', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

