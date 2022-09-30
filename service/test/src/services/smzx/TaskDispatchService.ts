/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  TaskDispatchServiceDispatch = '/rpc/goschedule.smzx/TaskDispatchService.Dispatch',
  TaskDispatchServiceSmzx = '/rpc/smzx.smzx/TaskDispatchService.Smzx'
}

/** 业务服务调用调度服务接口 调度实现逻辑 POST /rpc/goschedule.smzx/TaskDispatchService.Dispatch */
export async function TaskDispatchServiceDispatch(
  body: SMZX.smzxCommonReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxCommonResp>('/rpc/goschedule.smzx/TaskDispatchService.Dispatch', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 调度服务调用业务接口 业务实现逻辑 POST /rpc/smzx.smzx/TaskDispatchService.Smzx */
export async function TaskDispatchServiceSmzx(
  body: SMZX.smzxCommonReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxCommonResp>('/rpc/smzx.smzx/TaskDispatchService.Smzx', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

