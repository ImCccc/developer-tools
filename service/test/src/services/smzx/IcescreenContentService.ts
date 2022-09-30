/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  IcescreenContentServiceAdd = '/rpc/smzx.smzx/IcescreenContentService.Add',
  IcescreenContentServiceDel = '/rpc/smzx.smzx/IcescreenContentService.Del',
  IcescreenContentServiceGet = '/rpc/smzx.smzx/IcescreenContentService.Get',
  IcescreenContentServicePage = '/rpc/smzx.smzx/IcescreenContentService.Page',
  IcescreenContentServiceTree = '/rpc/smzx.smzx/IcescreenContentService.Tree',
  IcescreenContentServiceUpdate = '/rpc/smzx.smzx/IcescreenContentService.Update'
}

/** 添加冰屏内容 POST /rpc/smzx.smzx/IcescreenContentService.Add */
export async function IcescreenContentServiceAdd(
  body: SMZX.smzxIcescreenContentAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentAddResp>('/rpc/smzx.smzx/IcescreenContentService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除冰屏内容 POST /rpc/smzx.smzx/IcescreenContentService.Del */
export async function IcescreenContentServiceDel(
  body: SMZX.smzxIcescreenContentDelReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentDelResp>('/rpc/smzx.smzx/IcescreenContentService.Del', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取冰屏内容 POST /rpc/smzx.smzx/IcescreenContentService.Get */
export async function IcescreenContentServiceGet(
  body: SMZX.smzxIcescreenContentGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentGetResp>('/rpc/smzx.smzx/IcescreenContentService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏内容分页 POST /rpc/smzx.smzx/IcescreenContentService.Page */
export async function IcescreenContentServicePage(
  body: SMZX.smzxIcescreenContentPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentPageResp>('/rpc/smzx.smzx/IcescreenContentService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏内容树 POST /rpc/smzx.smzx/IcescreenContentService.Tree */
export async function IcescreenContentServiceTree(
  body: SMZX.smzxIcescreenContentTreeReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentTreeResp>('/rpc/smzx.smzx/IcescreenContentService.Tree', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新冰屏内容 POST /rpc/smzx.smzx/IcescreenContentService.Update */
export async function IcescreenContentServiceUpdate(
  body: SMZX.smzxIcescreenContentUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenContentUpdateResp>('/rpc/smzx.smzx/IcescreenContentService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

