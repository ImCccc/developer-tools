/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  DevicePropertyServiceRefresh = '/rpc/smzx.smzx/DevicePropertyService.Refresh'
}

/** 属性刷新 POST /rpc/smzx.smzx/DevicePropertyService.Refresh */
export async function DevicePropertyServiceRefresh(
  body: SMZX.smzxDevicePropertyRefreshReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxDevicePropertyRefreshResp>('/rpc/smzx.smzx/DevicePropertyService.Refresh', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

