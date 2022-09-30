/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  SdkServiceAdd = '/rpc/speech-open.service-robotics/SdkService.Add',
  SdkServiceDelete = '/rpc/speech-open.service-robotics/SdkService.Delete',
  SdkServiceList = '/rpc/speech-open.service-robotics/SdkService.List'
}

/** 添加 POST /rpc/speech-open.service-robotics/SdkService.Add */
export async function SdkServiceAdd(
  body: SPEECH.speechopenSdkAddReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenSdkAddResp>('/rpc/speech-open.service-robotics/SdkService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除 POST /rpc/speech-open.service-robotics/SdkService.Delete */
export async function SdkServiceDelete(
  body: SPEECH.speechopenSdkDeleteReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/SdkService.Delete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列表 POST /rpc/speech-open.service-robotics/SdkService.List */
export async function SdkServiceList(
  body: SPEECH.speechopenSdkListReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenSdkListResp>('/rpc/speech-open.service-robotics/SdkService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

