/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  DeviceServicePage = '/rpc/speech-open.service-robotics/DeviceService.Page',
  DeviceServiceRegister = '/rpc/speech-open.service-robotics/DeviceService.Register'
}

/** 接入设备的分页查询 POST /rpc/speech-open.service-robotics/DeviceService.Page */
export async function DeviceServicePage(
  body: SPEECHOPEN.speechopenDevicePageReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenDevicePageResp>('/rpc/speech-open.service-robotics/DeviceService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 设备注册(提供给后台自己使用) POST /rpc/speech-open.service-robotics/DeviceService.Register */
export async function DeviceServiceRegister(
  body: SPEECHOPEN.speechopenDeviceRegisterReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenDeviceRegisterResp>('/rpc/speech-open.service-robotics/DeviceService.Register', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

