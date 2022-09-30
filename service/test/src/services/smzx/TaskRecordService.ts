/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  TaskRecordServiceExport = '/rpc/smzx.smzx/TaskRecordService.Export',
  TaskRecordServicePage = '/rpc/smzx.smzx/TaskRecordService.Page'
}

/** 导出任务记录 POST /rpc/smzx.smzx/TaskRecordService.Export */
export async function TaskRecordServiceExport(
  body: SMZX.smzxTaskRecordExportReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskRecordExportResp>('/rpc/smzx.smzx/TaskRecordService.Export', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 任务记录分页 POST /rpc/smzx.smzx/TaskRecordService.Page */
export async function TaskRecordServicePage(
  body: SMZX.smzxTaskRecordPageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxTaskRecordPageResp>('/rpc/smzx.smzx/TaskRecordService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

