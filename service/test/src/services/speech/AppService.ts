/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  AppServiceAppTypeList = '/rpc/speech-open.service-robotics/AppService.AppTypeList',
  AppServiceCreate = '/rpc/speech-open.service-robotics/AppService.Create',
  AppServiceCreateAppType = '/rpc/speech-open.service-robotics/AppService.CreateAppType',
  AppServiceDelete = '/rpc/speech-open.service-robotics/AppService.Delete',
  AppServiceDeleteAppType = '/rpc/speech-open.service-robotics/AppService.DeleteAppType',
  AppServiceGet = '/rpc/speech-open.service-robotics/AppService.Get',
  AppServicePage = '/rpc/speech-open.service-robotics/AppService.Page',
  AppServicePublish = '/rpc/speech-open.service-robotics/AppService.Publish',
  AppServicePublishRecord = '/rpc/speech-open.service-robotics/AppService.PublishRecord',
  AppServiceUpdate = '/rpc/speech-open.service-robotics/AppService.Update'
}

/** 获取应用类型 POST /rpc/speech-open.service-robotics/AppService.AppTypeList */
export async function AppServiceAppTypeList(
  body: SPEECH.speechopenAppTypeListReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppTypeListResp>('/rpc/speech-open.service-robotics/AppService.AppTypeList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建应用 POST /rpc/speech-open.service-robotics/AppService.Create */
export async function AppServiceCreate(
  body: SPEECH.speechopenAppCreateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppCreateResp>('/rpc/speech-open.service-robotics/AppService.Create', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 创建应用类型 POST /rpc/speech-open.service-robotics/AppService.CreateAppType */
export async function AppServiceCreateAppType(
  body: SPEECH.speechopenCreateAppTypeReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenCreateAppTypeResp>('/rpc/speech-open.service-robotics/AppService.CreateAppType', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用 POST /rpc/speech-open.service-robotics/AppService.Delete */
export async function AppServiceDelete(
  body: SPEECH.speechopenAppDeleteReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/AppService.Delete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用类型 POST /rpc/speech-open.service-robotics/AppService.DeleteAppType */
export async function AppServiceDeleteAppType(
  body: SPEECH.speechopenDeleteAppTypeReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/AppService.DeleteAppType', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用信息 POST /rpc/speech-open.service-robotics/AppService.Get */
export async function AppServiceGet(
  body: SPEECH.speechopenAppGetReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppGetResp>('/rpc/speech-open.service-robotics/AppService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用分页 POST /rpc/speech-open.service-robotics/AppService.Page */
export async function AppServicePage(
  body: SPEECH.speechopenAppPageReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppPageResp>('/rpc/speech-open.service-robotics/AppService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用发布 POST /rpc/speech-open.service-robotics/AppService.Publish */
export async function AppServicePublish(
  body: SPEECH.speechopenAppPublishReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/AppService.Publish', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用发布记录，默认最近10条 POST /rpc/speech-open.service-robotics/AppService.PublishRecord */
export async function AppServicePublishRecord(
  body: SPEECH.speechopenAppPublishRecordReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppPublishRecordResp>('/rpc/speech-open.service-robotics/AppService.PublishRecord', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用信息修改 POST /rpc/speech-open.service-robotics/AppService.Update */
export async function AppServiceUpdate(
  body: SPEECH.speechopenAppUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenAppUpdateResp>('/rpc/speech-open.service-robotics/AppService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

