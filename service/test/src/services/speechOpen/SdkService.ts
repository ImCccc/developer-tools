/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  SdkServiceAdd = '/rpc/speech-open.service-robotics/SdkService.Add',
  SdkServiceDelete = '/rpc/speech-open.service-robotics/SdkService.Delete',
  SdkServiceDownload = '/rpc/speech-open.service-robotics/SdkService.Download',
  SdkServiceList = '/rpc/speech-open.service-robotics/SdkService.List',
  SdkServiceSystemType = '/rpc/speech-open.service-robotics/SdkService.SystemType'
}

/** 添加或更新SDK POST /rpc/speech-open.service-robotics/SdkService.Add */
export async function SdkServiceAdd(
  body: SPEECHOPEN.speechopenSdkAddReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSdkAddResp>('/rpc/speech-open.service-robotics/SdkService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除SDK POST /rpc/speech-open.service-robotics/SdkService.Delete */
export async function SdkServiceDelete(
  body: SPEECHOPEN.speechopenSdkDeleteReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenBaseResp>('/rpc/speech-open.service-robotics/SdkService.Delete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下载SDK POST /rpc/speech-open.service-robotics/SdkService.Download */
export async function SdkServiceDownload(
  body: SPEECHOPEN.speechopenSdkDownloadReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSdkDownloadResp>('/rpc/speech-open.service-robotics/SdkService.Download', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** SDK列表 POST /rpc/speech-open.service-robotics/SdkService.List */
export async function SdkServiceList(
  body: Record<string, any>,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSdkListResp>('/rpc/speech-open.service-robotics/SdkService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** SDK系统类型 POST /rpc/speech-open.service-robotics/SdkService.SystemType */
export async function SdkServiceSystemType(
  body: Record<string, any>,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSystemTypeResp>('/rpc/speech-open.service-robotics/SdkService.SystemType', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

