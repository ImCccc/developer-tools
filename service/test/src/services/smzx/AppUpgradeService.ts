/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  AppUpgradeServiceAdd = '/rpc/smzx.smzx/AppUpgradeService.Add',
  AppUpgradeServiceDel = '/rpc/smzx.smzx/AppUpgradeService.Del',
  AppUpgradeServiceGet = '/rpc/smzx.smzx/AppUpgradeService.Get',
  AppUpgradeServicePadVersion = '/rpc/smzx.smzx/AppUpgradeService.PadVersion',
  AppUpgradeServicePage = '/rpc/smzx.smzx/AppUpgradeService.Page',
  AppUpgradeServiceUpdate = '/rpc/smzx.smzx/AppUpgradeService.Update'
}

/** 添加应用版本 POST /rpc/smzx.smzx/AppUpgradeService.Add */
export async function AppUpgradeServiceAdd(
  body: SMZX.smzxAppUpgradeAddReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradeAddResp>('/rpc/smzx.smzx/AppUpgradeService.Add', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除应用版本 POST /rpc/smzx.smzx/AppUpgradeService.Del */
export async function AppUpgradeServiceDel(
  body: SMZX.smzxAppUpgradeDelReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradeDelResp>('/rpc/smzx.smzx/AppUpgradeService.Del', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取应用版本 POST /rpc/smzx.smzx/AppUpgradeService.Get */
export async function AppUpgradeServiceGet(
  body: SMZX.smzxAppUpgradeGetReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradeGetResp>('/rpc/smzx.smzx/AppUpgradeService.Get', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取pad的最新版本 POST /rpc/smzx.smzx/AppUpgradeService.PadVersion */
export async function AppUpgradeServicePadVersion(
  body: SMZX.smzxAppUpgradePadVersionReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradePadVersionResp>('/rpc/smzx.smzx/AppUpgradeService.PadVersion', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 应用版本列表 POST /rpc/smzx.smzx/AppUpgradeService.Page */
export async function AppUpgradeServicePage(
  body: SMZX.smzxAppUpgradePageReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradePageResp>('/rpc/smzx.smzx/AppUpgradeService.Page', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新应用版本 POST /rpc/smzx.smzx/AppUpgradeService.Update */
export async function AppUpgradeServiceUpdate(
  body: SMZX.smzxAppUpgradeUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SMZX.smzxAppUpgradeUpdateResp>('/rpc/smzx.smzx/AppUpgradeService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

