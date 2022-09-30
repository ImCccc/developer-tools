/* eslint-disable */
declare namespace SPEECH {
  
  type speechopenAppCreateReq =  {
    /** 应用名称 */
    'name': string;
    /** 应用标识 */
    'flag': string;
    /** 应用类型 */
    'type': string;
    /** 描述 */
    'describe': string;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
  }
  
  type speechopenAppCreateResp =  {
    'code': number;
    'msg': string;
    /** 应用id */
    'id': string;
  }
  
  type speechopenAppDeleteReq =  {
    /** 应用ID列表 */
    'ids': string[];
  }
  
  type speechopenAppDetailInfo =  {
    /** 应用id */
    'id': string;
    /** 应用名称 */
    'name': string;
    /** 应用标识 */
    'flag': string;
    /** 应用类型 */
    'type': string;
    /** 描述 */
    'describe': string;
    /** appid */
    'appid': string;
    /** appkey */
    'appkey': string;
    /** 应用版本 */
    'version': number;
    /** 创建时间 */
    'create_time': string;
    /** 应用状态 0-未上线 1-发布中（待审核） 2-上线 3-发布失败 */
    'status': number;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
  }
  
  type speechopenAppGetReq =  {
    /** 应用id */
    'id': string;
  }
  
  type speechopenAppGetResp =  {
    'code': number;
    'msg': string;
    'app_info': speechopenAppDetailInfo;
    /** SDK信息 */
    'sdk_infos': speechopenSDKInfo[];
  }
  
  type speechopenAppInfo =  {
    /** 应用id */
    'id': string;
    /** 应用名称 */
    'name': string;
    /** 应用标识 */
    'flag': string;
    /** 应用类型 */
    'type': string;
    /** 创建时间 */
    'create_time': string;
    /** 应用状态  0-未上线 1-发布中（待审核） 2-上线 3-发布失败 */
    'status': number;
  }
  
  type speechopenAppPageReq =  {
    /** 第几页，从0开始 */
    'page_index': number;
    /** 每页多少条 */
    'page_size': number;
  }
  
  type speechopenAppPageResp =  {
    /** 返回码 */
    'code': number;
    /** 应答信息 */
    'msg': string;
    /** 列表数量 */
    'total': number;
    /** 设备列表 */
    'list': speechopenAppInfo[];
  }
  
  type speechopenAppPublishRecordReq =  {
    /** 应用id */
    'id': string;
  }
  
  type speechopenAppPublishRecordResp =  {
    'code': number;
    'msg': string;
    /** 列表数量 */
    'total': number;
    'list': speechopenPublishRecord[];
    /** 下一个版本号 */
    'next_version': number;
  }
  
  type speechopenAppPublishReq =  {
    /** uid值 */
    'id': string;
    /** 发布说明 */
    'publish_explain': string;
  }
  
  type speechopenAppTypeListReq = Record<string, any>;
  
  type speechopenAppTypeListResp =  {
    'code': number;
    'msg': string;
    'total': number;
    'list': string[];
  }
  
  type speechopenAppUpdateReq =  {
    /** 应用id */
    'id': string;
    /** 应用名称 */
    'name': string;
    /** 应用标识 */
    'flag': string;
    /** 描述 */
    'type': string;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
  }
  
  type speechopenAppUpdateResp =  {
    'code': number;
    'msg': string;
    /** 应用id */
    'id': string;
  }
  
  type speechopenBaseResp =  {
    /** 返回码 */
    'code': number;
    /** 应答信息 */
    'msg': string;
  }
  
  type speechopenCreateAppTypeReq =  {
    'name': string;
  }
  
  type speechopenCreateAppTypeResp =  {
    'code': number;
    'msg': string;
    'id': string;
  }
  
  type speechopenDecive =  {
    /** 设备MAC */
    'mac': string;
    /** 设备SN */
    'device_sn': string;
    /** 操作系统 */
    'system': string;
    /** SDK版本号 */
    'sdk_version': string;
    /** 接入时间 */
    'connect_time': string;
  }
  
  type speechopenDeleteAppTypeReq =  {
    'ids': string[];
  }
  
  type speechopenDevicePageReq =  {
    /** 第几页，从0开始 */
    'page_index': number;
    /** 每页多少条 */
    'page_size': number;
    /** 起始时间 时间格式2006-01-02 15:06:07 */
    'start_time': string;
    /** 结束时间 */
    'end_time': string;
    /** 应用ID */
    'app_id': string;
  }
  
  type speechopenDevicePageResp =  {
    'code': number;
    'msg': string;
    /** 列表数量 */
    'total': number;
    /** 设备列表 */
    'list': speechopenDecive[];
  }
  
  type speechopenDeviceRegisterReq =  {
    /** appid */
    'appid': string;
    /** 设备MAC */
    'mac': string;
    /** 设备SN */
    'device_sn': string;
    /** 操作系统 */
    'system': string;
    /** SDK版本号 */
    'sdk_version': string;
  }
  
  type speechopenDeviceRegisterResp =  {
    'code': number;
    'msg': string;
    'id': string;
  }
  
  type speechopenPublishRecord =  {
    /** 应用记录 */
    'version': number;
    /** 提交时间 */
    'commit_time': string;
    /** 处理时间 */
    'deal_time': string;
    /** 处理结果，0-未上线 1-发布中（待审核） 2-发布成功 3-发布失败 */
    'deal_result': number;
  }
  
  type speechopenSDKInfo =  {
    /** 操作系统 */
    'system': string;
    /** 版本号 */
    'version': string;
    /** 更新日期 */
    'update_date': string;
    /** 更新内容，url连接地址 */
    'update_url': string;
    /** SDK下载地址 */
    'sdk_url': string;
  }
  
  type speechopenSdk =  {
    /** id */
    'id': string;
    /** 系统平台 */
    'system': string;
    /** 版本号 */
    'version': string;
    /** 更新日期 */
    'date': string;
    /** 更新说明 */
    'update_url': string;
    /** 文件下载地址 */
    'file_url': string;
  }
  
  type speechopenSdkAddReq =  {
    /** 系统平台 */
    'system': string;
    /** 版本号 */
    'version': string;
    /** 更新日期 */
    'date': string;
    /** 更新说明 */
    'update_url': string;
    /** 文件下载地址 */
    'file_url': string;
  }
  
  type speechopenSdkAddResp =  {
    'code': number;
    'msg': string;
    /** sdk的ID */
    'id': string;
  }
  
  type speechopenSdkDeleteReq =  {
    /** SDK的id值 */
    'id': string;
  }
  
  type speechopenSdkListReq = Record<string, any>;
  
  type speechopenSdkListResp =  {
    'code': number;
    'msg': string;
    'total': number;
    'list': speechopenSdk;
  }
  
  type speechopenSkill =  {
    /** 技能ID */
    'id': string;
    /** 技能名称 */
    'skill_name': string;
    /** 技能标识 */
    'skill_flag': string;
    /** 创建时间 */
    'create_time': string;
  }
  
  type speechopenSkillCreateReq =  {
    /** 技能名称 */
    'skill_name': string;
    /** 技能标识 */
    'skill_flag': string;
  }
  
  type speechopenSkillCreateResp =  {
    'code': number;
    'msg': string;
    'id': string;
  }
  
  type speechopenSkillGetSelectReq =  {
    /** 应用id */
    'app_id': string;
  }
  
  type speechopenSkillGetSelectResp =  {
    'code': number;
    'msg': string;
    /** 选择的技能id列表 */
    'skill_ids': string[];
  }
  
  type speechopenSkillListReq =  {
    /** 应用id */
    'app_id': string;
  }
  
  type speechopenSkillListResp =  {
    'code': number;
    'msg': string;
    /** 列表数量 */
    'total': number;
    'list': speechopenSkill[];
  }
  
  type speechopenSkillSelectReq =  {
    /** 应用id */
    'app_id': string;
    /** 选择的技能id列表 */
    'skill_ids': string[];
  }
  
  type speechopenSkillUpdateReq =  {
    /** 技能ID */
    'id': string;
    /** 技能名称 */
    'skill_name': string;
    /** 技能标识 */
    'skill_flag': string;
  }
  
}
