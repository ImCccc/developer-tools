/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  VideoServiceAdd = '/rpc/smzx.smzx/VideoService.Add',
  VideoServiceDelList = '/rpc/smzx.smzx/VideoService.DelList',
  VideoServiceDeviceList = '/rpc/smzx.smzx/VideoService.DeviceList',
  VideoServiceGet = '/rpc/smzx.smzx/VideoService.Get',
  VideoServicePage = '/rpc/smzx.smzx/VideoService.Page',
  VideoServicePush = '/rpc/smzx.smzx/VideoService.Push',
  VideoServiceUpdate = '/rpc/smzx.smzx/VideoService.Update'
}

/** 添加视频 POST /rpc/smzx.smzx/VideoService.Add */
export async function VideoServiceAdd(
  body: SMZX.smzxVideoAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoAddResp>('/rpc/smzx.smzx/VideoService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除视频列表 POST /rpc/smzx.smzx/VideoService.DelList */
export async function VideoServiceDelList(
  body: SMZX.smzxVideoDelListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoDelListResp>('/rpc/smzx.smzx/VideoService.DelList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取视频设备列表 POST /rpc/smzx.smzx/VideoService.DeviceList */
export async function VideoServiceDeviceList(
  body: SMZX.smzxVideoDeviceListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoDeviceListResp>('/rpc/smzx.smzx/VideoService.DeviceList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取视频 POST /rpc/smzx.smzx/VideoService.Get */
export async function VideoServiceGet(
  body: SMZX.smzxVideoGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoGetResp>('/rpc/smzx.smzx/VideoService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 视频列表 POST /rpc/smzx.smzx/VideoService.Page */
export async function VideoServicePage(
  body: SMZX.smzxVideoPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoPageResp>('/rpc/smzx.smzx/VideoService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 视频推送 POST /rpc/smzx.smzx/VideoService.Push */
export async function VideoServicePush(
  body: SMZX.smzxVideoPushReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoPushResp>('/rpc/smzx.smzx/VideoService.Push', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新视频 POST /rpc/smzx.smzx/VideoService.Update */
export async function VideoServiceUpdate(
  body: SMZX.smzxVideoUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxVideoUpdateResp>('/rpc/smzx.smzx/VideoService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

