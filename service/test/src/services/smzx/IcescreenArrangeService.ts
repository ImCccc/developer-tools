/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  IcescreenArrangeServiceAdd = '/rpc/smzx.smzx/IcescreenArrangeService.Add',
  IcescreenArrangeServiceBind = '/rpc/smzx.smzx/IcescreenArrangeService.Bind',
  IcescreenArrangeServiceDel = '/rpc/smzx.smzx/IcescreenArrangeService.Del',
  IcescreenArrangeServiceGet = '/rpc/smzx.smzx/IcescreenArrangeService.Get',
  IcescreenArrangeServicePage = '/rpc/smzx.smzx/IcescreenArrangeService.Page',
  IcescreenArrangeServiceUnBind = '/rpc/smzx.smzx/IcescreenArrangeService.UnBind',
  IcescreenArrangeServiceUpdate = '/rpc/smzx.smzx/IcescreenArrangeService.Update'
}

/** 添加冰屏编排 POST /rpc/smzx.smzx/IcescreenArrangeService.Add */
export async function IcescreenArrangeServiceAdd(
  body: SMZX.smzxIcescreenArrangeAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeAddResp>('/rpc/smzx.smzx/IcescreenArrangeService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 绑定设备 POST /rpc/smzx.smzx/IcescreenArrangeService.Bind */
export async function IcescreenArrangeServiceBind(
  body: SMZX.smzxIcescreenArrangeBindReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeBindResp>('/rpc/smzx.smzx/IcescreenArrangeService.Bind', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除冰屏编排 POST /rpc/smzx.smzx/IcescreenArrangeService.Del */
export async function IcescreenArrangeServiceDel(
  body: SMZX.smzxIcescreenArrangeDelReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeDelResp>('/rpc/smzx.smzx/IcescreenArrangeService.Del', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取冰屏编排 POST /rpc/smzx.smzx/IcescreenArrangeService.Get */
export async function IcescreenArrangeServiceGet(
  body: SMZX.smzxIcescreenArrangeGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeGetResp>('/rpc/smzx.smzx/IcescreenArrangeService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏编排列表 POST /rpc/smzx.smzx/IcescreenArrangeService.Page */
export async function IcescreenArrangeServicePage(
  body: SMZX.smzxIcescreenArrangePageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangePageResp>('/rpc/smzx.smzx/IcescreenArrangeService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 解绑设备 POST /rpc/smzx.smzx/IcescreenArrangeService.UnBind */
export async function IcescreenArrangeServiceUnBind(
  body: SMZX.smzxIcescreenArrangeUnBindReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeUnBindResp>('/rpc/smzx.smzx/IcescreenArrangeService.UnBind', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新冰屏编排 POST /rpc/smzx.smzx/IcescreenArrangeService.Update */
export async function IcescreenArrangeServiceUpdate(
  body: SMZX.smzxIcescreenArrangeUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenArrangeUpdateResp>('/rpc/smzx.smzx/IcescreenArrangeService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

