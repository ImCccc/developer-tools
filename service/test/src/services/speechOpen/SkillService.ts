/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  SkillServiceCreate = '/rpc/speech-open.service-robotics/SkillService.Create',
  SkillServiceDelete = '/rpc/speech-open.service-robotics/SkillService.Delete',
  SkillServiceGetSelect = '/rpc/speech-open.service-robotics/SkillService.GetSelect',
  SkillServiceList = '/rpc/speech-open.service-robotics/SkillService.List',
  SkillServiceSelect = '/rpc/speech-open.service-robotics/SkillService.Select',
  SkillServiceUpdate = '/rpc/speech-open.service-robotics/SkillService.Update'
}

/** 创建技能 POST /rpc/speech-open.service-robotics/SkillService.Create */
export async function SkillServiceCreate(
  body: SPEECHOPEN.speechopenSkillCreateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSkillCreateResp>('/rpc/speech-open.service-robotics/SkillService.Create', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 技能删除 POST /rpc/speech-open.service-robotics/SkillService.Delete */
export async function SkillServiceDelete(
  body: SPEECHOPEN.speechopenSkillDeleteReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenBaseResp>('/rpc/speech-open.service-robotics/SkillService.Delete', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询技能选择 POST /rpc/speech-open.service-robotics/SkillService.GetSelect */
export async function SkillServiceGetSelect(
  body: SPEECHOPEN.speechopenSkillGetSelectReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSkillGetSelectResp>('/rpc/speech-open.service-robotics/SkillService.GetSelect', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 技能列表 POST /rpc/speech-open.service-robotics/SkillService.List */
export async function SkillServiceList(
  body: Record<string, any>,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenSkillListResp>('/rpc/speech-open.service-robotics/SkillService.List', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 技能选择 POST /rpc/speech-open.service-robotics/SkillService.Select */
export async function SkillServiceSelect(
  body: SPEECHOPEN.speechopenSkillSelectReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenBaseResp>('/rpc/speech-open.service-robotics/SkillService.Select', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 技能信息修改 POST /rpc/speech-open.service-robotics/SkillService.Update */
export async function SkillServiceUpdate(
  body: SPEECHOPEN.speechopenSkillUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECHOPEN.speechopenBaseResp>('/rpc/speech-open.service-robotics/SkillService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

