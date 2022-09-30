/* eslint-disable */
import request from '@/utils/request';

export enum ApiUrl {
  SkillServiceCreate = '/rpc/speech-open.service-robotics/SkillService.Create',
  SkillServiceGetSelect = '/rpc/speech-open.service-robotics/SkillService.GetSelect',
  SkillServiceList = '/rpc/speech-open.service-robotics/SkillService.List',
  SkillServiceSelect = '/rpc/speech-open.service-robotics/SkillService.Select',
  SkillServiceUpdate = '/rpc/speech-open.service-robotics/SkillService.Update'
}

/** 创建技能 POST /rpc/speech-open.service-robotics/SkillService.Create */
export async function SkillServiceCreate(
  body: SPEECH.speechopenSkillCreateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenSkillCreateResp>('/rpc/speech-open.service-robotics/SkillService.Create', {
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
  body: SPEECH.speechopenSkillGetSelectReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenSkillGetSelectResp>('/rpc/speech-open.service-robotics/SkillService.GetSelect', {
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
  body: SPEECH.speechopenSkillListReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenSkillListResp>('/rpc/speech-open.service-robotics/SkillService.List', {
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
  body: SPEECH.speechopenSkillSelectReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/SkillService.Select', {
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
  body: SPEECH.speechopenSkillUpdateReq,
  options ?: {[key: string]: any}
) {
  return request<SPEECH.speechopenBaseResp>('/rpc/speech-open.service-robotics/SkillService.Update', {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

