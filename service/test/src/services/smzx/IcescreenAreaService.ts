/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  IcescreenAreaServiceGet = '/rpc/smzx.smzx/IcescreenAreaService.Get',
  IcescreenAreaServiceList = '/rpc/smzx.smzx/IcescreenAreaService.List',
  IcescreenAreaServicePlay = '/rpc/smzx.smzx/IcescreenAreaService.Play',
  IcescreenAreaServiceStop = '/rpc/smzx.smzx/IcescreenAreaService.Stop'
}

/** 冰屏区域详细 POST /rpc/smzx.smzx/IcescreenAreaService.Get */
export async function IcescreenAreaServiceGet(
  body: SMZX.smzxIcescreenAreaGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenAreaGetResp>('/rpc/smzx.smzx/IcescreenAreaService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏区域列表 POST /rpc/smzx.smzx/IcescreenAreaService.List */
export async function IcescreenAreaServiceList(
  body: SMZX.smzxIcescreenAreaListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenAreaListResp>('/rpc/smzx.smzx/IcescreenAreaService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏播放 POST /rpc/smzx.smzx/IcescreenAreaService.Play */
export async function IcescreenAreaServicePlay(
  body: SMZX.smzxIcescreenAreaPlayReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenAreaPlayResp>('/rpc/smzx.smzx/IcescreenAreaService.Play', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏停止播放 POST /rpc/smzx.smzx/IcescreenAreaService.Stop */
export async function IcescreenAreaServiceStop(
  body: SMZX.smzxIcescreenAreaStopReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxIcescreenAreaStopResp>('/rpc/smzx.smzx/IcescreenAreaService.Stop', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

