/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  AgvDeviceServiceGet = '/rpc/smzx.smzx/AgvDeviceService.Get',
  AgvDeviceServiceImport = '/rpc/smzx.smzx/AgvDeviceService.Import',
  AgvDeviceServicePage = '/rpc/smzx.smzx/AgvDeviceService.Page',
  AgvDeviceServiceProductList = '/rpc/smzx.smzx/AgvDeviceService.ProductList',
  AgvDeviceServiceUpdate = '/rpc/smzx.smzx/AgvDeviceService.Update'
}

/** AGV设备详细 包括属性列表 pad POST /rpc/smzx.smzx/AgvDeviceService.Get */
export async function AgvDeviceServiceGet(
  body: SMZX.smzxAgvDeviceGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAgvDeviceGetResp>('/rpc/smzx.smzx/AgvDeviceService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** AGV设备导入 POST /rpc/smzx.smzx/AgvDeviceService.Import */
export async function AgvDeviceServiceImport(
  body: SMZX.smzxAgvDeviceImportReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAgvDeviceImportResp>('/rpc/smzx.smzx/AgvDeviceService.Import', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** AGV设备分页 POST /rpc/smzx.smzx/AgvDeviceService.Page */
export async function AgvDeviceServicePage(
  body: SMZX.smzxAgvDevicePageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAgvDevicePageResp>('/rpc/smzx.smzx/AgvDeviceService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** AGV产品 POST /rpc/smzx.smzx/AgvDeviceService.ProductList */
export async function AgvDeviceServiceProductList(
  body: SMZX.smzxAgvDeviceProductListReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAgvDeviceProductListResp>('/rpc/smzx.smzx/AgvDeviceService.ProductList', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新AGV设备 POST /rpc/smzx.smzx/AgvDeviceService.Update */
export async function AgvDeviceServiceUpdate(
  body: SMZX.smzxAgvDeviceUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAgvDeviceUpdateResp>('/rpc/smzx.smzx/AgvDeviceService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

