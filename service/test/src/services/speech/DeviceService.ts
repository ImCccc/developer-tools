/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  DeviceServicePage = '/rpc/speech-open.service-robotics/DeviceService.Page',
  DeviceServiceRegister = '/rpc/speech-open.service-robotics/DeviceService.Register'
}

/** 分页查询 POST /rpc/speech-open.service-robotics/DeviceService.Page */
export async function DeviceServicePage(
  body: SPEECH.speechopenDevicePageReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenDevicePageResp>('/rpc/speech-open.service-robotics/DeviceService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据APPID获取应用信息 POST /rpc/speech-open.service-robotics/DeviceService.Register */
export async function DeviceServiceRegister(
  body: SPEECH.speechopenDeviceRegisterReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenDeviceRegisterResp>('/rpc/speech-open.service-robotics/DeviceService.Register', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

