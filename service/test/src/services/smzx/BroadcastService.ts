/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  BroadcastServiceAdd = '/rpc/smzx.smzx/BroadcastService.Add',
  BroadcastServiceDel = '/rpc/smzx.smzx/BroadcastService.Del',
  BroadcastServiceGet = '/rpc/smzx.smzx/BroadcastService.Get',
  BroadcastServicePage = '/rpc/smzx.smzx/BroadcastService.Page',
  BroadcastServiceUpdate = '/rpc/smzx.smzx/BroadcastService.Update'
}

/** 添加播报 POST /rpc/smzx.smzx/BroadcastService.Add */
export async function BroadcastServiceAdd(
  body: SMZX.smzxBroadcastAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxBroadcastAddResp>('/rpc/smzx.smzx/BroadcastService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除播报 POST /rpc/smzx.smzx/BroadcastService.Del */
export async function BroadcastServiceDel(
  body: SMZX.smzxBroadcastDelReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxBroadcastDelResp>('/rpc/smzx.smzx/BroadcastService.Del', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取播报 POST /rpc/smzx.smzx/BroadcastService.Get */
export async function BroadcastServiceGet(
  body: SMZX.smzxBroadcastGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxBroadcastGetResp>('/rpc/smzx.smzx/BroadcastService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 播报列表 POST /rpc/smzx.smzx/BroadcastService.Page */
export async function BroadcastServicePage(
  body: SMZX.smzxBroadcastPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxBroadcastPageResp>('/rpc/smzx.smzx/BroadcastService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新播报 POST /rpc/smzx.smzx/BroadcastService.Update */
export async function BroadcastServiceUpdate(
  body: SMZX.smzxBroadcastUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxBroadcastUpdateResp>('/rpc/smzx.smzx/BroadcastService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

