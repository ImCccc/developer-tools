/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  StreamServiceBigScreen = '/rpc/smzx.smzx/StreamService.BigScreen',
  StreamServiceIceScreen = '/rpc/smzx.smzx/StreamService.IceScreen',
  StreamServicePad = '/rpc/smzx.smzx/StreamService.Pad'
}

/** 大屏双向流 POST /rpc/smzx.smzx/StreamService.BigScreen */
export async function StreamServiceBigScreen(
  body: SMZX.smzxStreamReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxStreamResp>('/rpc/smzx.smzx/StreamService.BigScreen', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 冰屏双向流 POST /rpc/smzx.smzx/StreamService.IceScreen */
export async function StreamServiceIceScreen(
  body: SMZX.smzxStreamReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxStreamResp>('/rpc/smzx.smzx/StreamService.IceScreen', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** pad端双向流 POST /rpc/smzx.smzx/StreamService.Pad */
export async function StreamServicePad(
  body: SMZX.smzxStreamReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxStreamResp>('/rpc/smzx.smzx/StreamService.Pad', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

