/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  SensorDeviceServiceAllProperty = '/rpc/smzx.smzx/SensorDeviceService.AllProperty',
  SensorDeviceServiceImport = '/rpc/smzx.smzx/SensorDeviceService.Import',
  SensorDeviceServicePage = '/rpc/smzx.smzx/SensorDeviceService.Page',
  SensorDeviceServiceUpdate = '/rpc/smzx.smzx/SensorDeviceService.Update'
}

/** 传感器设备所有属性 pad POST /rpc/smzx.smzx/SensorDeviceService.AllProperty */
export async function SensorDeviceServiceAllProperty(
  body: SMZX.smzxSensorDeviceAllPropertyReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxSensorDeviceAllPropertyResp>('/rpc/smzx.smzx/SensorDeviceService.AllProperty', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 传感器设备导入 POST /rpc/smzx.smzx/SensorDeviceService.Import */
export async function SensorDeviceServiceImport(
  body: SMZX.smzxSensorDeviceImportReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxSensorDeviceImportResp>('/rpc/smzx.smzx/SensorDeviceService.Import', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 传感器设备分页 POST /rpc/smzx.smzx/SensorDeviceService.Page */
export async function SensorDeviceServicePage(
  body: SMZX.smzxSensorDevicePageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxSensorDevicePageResp>('/rpc/smzx.smzx/SensorDeviceService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新传感器设备 POST /rpc/smzx.smzx/SensorDeviceService.Update */
export async function SensorDeviceServiceUpdate(
  body: SMZX.smzxSensorDeviceUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxSensorDeviceUpdateResp>('/rpc/smzx.smzx/SensorDeviceService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

