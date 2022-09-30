/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  ErrorLogServiceAdd = '/rpc/smzx.smzx/ErrorLogService.Add',
  ErrorLogServicePage = '/rpc/smzx.smzx/ErrorLogService.Page'
}

/** 添加异常日志 POST /rpc/smzx.smzx/ErrorLogService.Add */
export async function ErrorLogServiceAdd(
  body: SMZX.smzxErrorLogAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxErrorLogAddResp>('/rpc/smzx.smzx/ErrorLogService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 异常日志列表 POST /rpc/smzx.smzx/ErrorLogService.Page */
export async function ErrorLogServicePage(
  body: SMZX.smzxErrorLogPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxErrorLogPageResp>('/rpc/smzx.smzx/ErrorLogService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

