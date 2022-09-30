/* eslint-disable */
declare namespace SPEECHOPEN {
  
  type speechopenAppCreateReq =  {
    /** 应用名称 */
    'name': string;
    /** 应用类型 */
    'type': string;
    /** 描述 */
    'describe': string;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
    /** aiui场景 */
    'aiui_scene': string;
    /** tts appid */
    'tts_appid': string;
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
    'create_time': number;
    /** 应用状态 0-未上线 1-发布中（待审核） 2-上线 3-发布失败 */
    'status': number;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
    /** 上线版本 */
    'online_version': number;
    /** aiui场景 */
    'aiui_scene': string;
    /** tts appid */
    'tts_appid': string;
  }
  
  type speechopenAppGetReq =  {
    /** 应用id 可选 */
    'id': string;
    /** appid 可选 */
    'appid': string;
  }
  
  type speechopenAppGetResp =  {
    'code': number;
    'msg': string;
    'app_info': speechopenAppDetailInfo;
  }
  
  type speechopenAppInfo =  {
    /** 应用id */
    'id': string;
    /** 应用名称 */
    'name': string;
    /** 应用类型 */
    'type': string;
    /** 创建时间 */
    'create_time': number;
    /** 应用状态  0-未上线 1-发布中（待审核） 2-上线 3-发布失败 */
    'status': number;
    /** appid */
    'appid': string;
  }
  
  type speechopenAppPageReq =  {
    /** 第几页，从0开始 */
    'page_index': number;
    /** 每页多少条 */
    'page_size': number;
    /** 应用名称,可选，模糊搜索 */
    'app_name': string;
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
    /** 描述 */
    'type': string;
    /** aiui appid */
    'aiui_appid': string;
    /** aiui appkey */
    'aiui_appkey': string;
    /** 描述 */
    'describe': string;
    /** aiui场景 */
    'aiui_scene': string;
    /** tts appid */
    'tts_appid': string;
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
    /** id */
    'id': string;
    /** 设备MAC */
    'mac': string;
    /** 设备SN */
    'device_sn': string;
    /** 操作系统 */
    'system': string;
    /** SDK版本号 */
    'sdk_version': string;
    /** 接入时间 */
    'connect_time': number;
  }
  
  type speechopenDeleteAppTypeReq =  {
    /** 应用类型的名称 */
    'names': string[];
  }
  
  type speechopenDevicePageReq =  {
    /** 第几页，从0开始 */
    'page_index': number;
    /** 每页多少条 */
    'page_size': number;
    /** 起始时间 */
    'start_time': number;
    /** 结束时间 */
    'end_time': number;
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
    'decive': speechopenDecive;
  }
  
  type speechopenGetAppSkillReq =  {
    /** appid 可选 */
    'appid': string;
    /** 环境，main-生产 main_box-沙箱 */
    'env': string;
  }
  
  type speechopenGetAppSkillResp =  {
    'code': number;
    'msg': string;
    'app_info': speechopenAppDetailInfo;
    /** 技能 */
    'skills': string[];
  }
  
  type speechopenPublishRecord =  {
    /** 应用记录 */
    'version': number;
    /** 提交时间 */
    'commit_time': number;
    /** 处理时间 */
    'deal_time': number;
    /** 处理结果，0-未上线 1-发布中（待审核） 2-发布成功 3-发布失败 */
    'deal_result': number;
  }
  
  type speechopenSdk =  {
    /** id */
    'id': string;
    /** 系统平台 */
    'system': string;
    /** 版本号 */
    'version': string;
    /** 更新日期 */
    'date': number;
    /** 更新说明 */
    'update_note': string;
  }
  
  type speechopenSdkAddReq =  {
    /** 系统平台 */
    'system': string;
    /** 版本号 */
    'version': string;
    /** 更新说明 */
    'update_note': string;
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
  
  type speechopenSdkDownloadReq =  {
    'app_id': string;
    'system': string;
  }
  
  type speechopenSdkDownloadResp =  {
    'code': number;
    'msg': string;
    'file_url': string;
  }
  
  type speechopenSdkListResp =  {
    'code': number;
    'msg': string;
    'total': number;
    'list': speechopenSdk[];
  }
  
  type speechopenSkill =  {
    /** 技能ID */
    'id': string;
    /** 技能名称 */
    'skill_name': string;
    /** 技能标识 */
    'skill_flag': string;
    /** 创建时间 */
    'create_time': number;
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
  
  type speechopenSkillDeleteReq =  {
    'ids': string[];
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
  
  type speechopenSystemTypeResp =  {
    'code': number;
    'msg': string;
    'list': string[];
  }
  
}
