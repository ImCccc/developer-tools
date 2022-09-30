/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  ChargeServiceDeviceList = '/rpc/smzx.smzx/ChargeService.DeviceList',
  ChargeServiceGetConfig = '/rpc/smzx.smzx/ChargeService.GetConfig',
  ChargeServiceUpdateConfig = '/rpc/smzx.smzx/ChargeService.UpdateConfig'
}

/** 此处后端没有提供注释 POST /rpc/smzx.smzx/ChargeService.DeviceList */
export async function ChargeServiceDeviceList(
  body: SMZX.smzxChargeDeviceListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxChargeDeviceListResp>('/rpc/smzx.smzx/ChargeService.DeviceList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /rpc/smzx.smzx/ChargeService.GetConfig */
export async function ChargeServiceGetConfig(
  body: SMZX.smzxChargeConfigGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxChargeConfigGetResp>('/rpc/smzx.smzx/ChargeService.GetConfig', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /rpc/smzx.smzx/ChargeService.UpdateConfig */
export async function ChargeServiceUpdateConfig(
  body: SMZX.smzxChargeConfigUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxChargeConfigUpdateResp>('/rpc/smzx.smzx/ChargeService.UpdateConfig', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

