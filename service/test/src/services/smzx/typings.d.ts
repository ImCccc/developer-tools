/* eslint-disable */
declare namespace SMZX {
  type smzxAgvDevice = {
    device_id: string;
    device_name: string;
    product_id: string;
    product_name: string;
    mac: string;
    /** 充电点 x|y|angle */
    charge_point: string;
    /** 在线状态 导入不要入参 */
    is_online: boolean;
  };

  type smzxAgvDeviceGetReq = {
    id: string;
  };

  type smzxAgvDeviceGetResp = {
    code: number;
    msg: string;
    agv_device: smzxAgvDevice;
    propertys: string;
  };

  type smzxAgvDeviceImportReq = {
    list: smzxAgvDevice[];
  };

  type smzxAgvDeviceImportResp = {
    code: number;
    msg: string;
  };

  type smzxAgvDevicePageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
    device_name: string;
  };

  type smzxAgvDevicePageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 设备列表 */
    list: smzxAgvDevice[];
  };

  type smzxAgvDeviceProduct = {
    product_id: string;
    product_name: string;
  };

  type smzxAgvDeviceProductListReq = Record<string, any>;

  type smzxAgvDeviceProductListResp = {
    code: number;
    msg: string;
    list: smzxAgvDeviceProduct[];
  };

  type smzxAgvDeviceUpdate = {
    id: string;
    mac: string;
    /** 充电点 x|y|angle */
    charge_point: string;
  };

  type smzxAgvDeviceUpdateReq = {
    agv_device_update: smzxAgvDeviceUpdate;
  };

  type smzxAgvDeviceUpdateResp = {
    code: number;
    msg: string;
    agv_device: smzxAgvDevice;
  };

  type smzxAppUpgrade = {
    /** 应用版本id */
    id: string;
    /** 应用版本名称 */
    name: string;
    /** 应用版本代码 */
    version: number;
    /** 产品id */
    product_id: string;
    /** app连接 */
    app_url: string;
    /** 更新说明 */
    desc: string;
    /** 创建毫秒时间戳 */
    date_created: number;
  };

  type smzxAppUpgradeAddReq = {
    app_upgrade: smzxAppUpgrade;
  };

  type smzxAppUpgradeAddResp = {
    code: number;
    msg: string;
    app_upgrade: smzxAppUpgrade;
  };

  type smzxAppUpgradeDelReq = {
    id: string;
  };

  type smzxAppUpgradeDelResp = {
    code: number;
    msg: string;
    id: string;
  };

  type smzxAppUpgradeGetReq = {
    id: string;
  };

  type smzxAppUpgradeGetResp = {
    code: number;
    msg: string;
    app_upgrade: smzxAppUpgrade;
  };

  type smzxAppUpgradePadVersionReq = {
    /** 设备标识 可以传mac */
    client_id: string;
    /** 当前版本号 */
    version: number;
  };

  type smzxAppUpgradePadVersionResp = {
    code: number;
    msg: string;
    version: number;
    apk_url: string;
    need_upgrade: boolean;
  };

  type smzxAppUpgradePageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
    /** 开始时间 */
    start_time: number;
    /** 结束时间 */
    end_time: number;
    /** 产品id */
    product_id: string;
  };

  type smzxAppUpgradePageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 应用版本列表 */
    list: smzxAppUpgrade[];
  };

  type smzxAppUpgradeUpdateReq = {
    app_upgrade: smzxAppUpgrade;
  };

  type smzxAppUpgradeUpdateResp = {
    code: number;
    msg: string;
    app_upgrade: smzxAppUpgrade;
  };

  type smzxBroadcast = {
    /** 播报id */
    id: string;
    /** 播报名称 */
    name: string;
    /** 播报代码 */
    code: string;
    /** 播报内容 */
    content: string;
  };

  type smzxBroadcastAddReq = {
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastAddResp = {
    code: number;
    msg: string;
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastDelReq = {
    id: string;
  };

  type smzxBroadcastDelResp = {
    code: number;
    msg: string;
    id: string;
  };

  type smzxBroadcastGetReq = {
    id: string;
  };

  type smzxBroadcastGetResp = {
    code: number;
    msg: string;
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastPageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxBroadcastPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 播报列表 */
    list: smzxBroadcast[];
  };

  type smzxBroadcastUpdateReq = {
    broadcast: smzxBroadcast;
  };

  type smzxBroadcastUpdateResp = {
    code: number;
    msg: string;
    broadcast: smzxBroadcast;
  };

  type smzxChargeConfigGetReq = Record<string, any>;

  type smzxChargeConfigGetResp = {
    code: number;
    msg: string;
    /** 剩余电量百分比 0-100 去回充 */
    power: number;
    /** 0 关闭 1 开启 */
    status: number;
  };

  type smzxChargeConfigUpdateReq = {
    /** 剩余电量百分比 0-100 去回充 */
    power: number;
    /** 0 关闭 1 开启 */
    status: number;
  };

  type smzxChargeConfigUpdateResp = {
    code: number;
    msg: string;
    /** 剩余电量百分比 0-100 去回充 */
    power: number;
    /** 0 关闭 1 开启 */
    status: number;
  };

  type smzxChargeDevice = {
    device_id: string;
    device_name: string;
    product_id: string;
    product_name: string;
    /** 剩余电量百分比 0-100 */
    power: number;
    /** 1 充电 2 放电 3 正在去充电 */
    status: number;
  };

  type smzxChargeDeviceListReq = Record<string, any>;

  type smzxChargeDeviceListResp = {
    code: number;
    msg: string;
    total: number;
    list: smzxChargeDevice[];
  };

  type smzxCommonReq = {
    msg_id: string;
    thing: string;
    time_stamp: number;
    raw_data: string;
    from: string;
  };

  type smzxCommonResp = {
    code: number;
    msg: string;
    time_stamp: number;
  };

  type smzxDevicePropertyRefreshReq = Record<string, any>;

  type smzxDevicePropertyRefreshResp = {
    code: number;
    msg: string;
  };

  type smzxErrorLog = {
    /** 异常日志id */
    id: string;
    /** 异常类型 */
    error_type: string;
    /** 异常详情 */
    detail: string;
    /** 创建毫秒时间戳 */
    date_created: number;
  };

  type smzxErrorLogAddReq = {
    error_log: smzxErrorLog;
  };

  type smzxErrorLogAddResp = {
    code: number;
    msg: string;
    error_log: smzxErrorLog;
  };

  type smzxErrorLogPageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
    /** 开始时间 */
    start_time: number;
    /** 结束时间 */
    end_time: number;
  };

  type smzxErrorLogPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 异常日志列表 */
    list: smzxErrorLog[];
  };

  type smzxIcescreenArea = {
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 区域名称 */
    name: string;
    /** 任务代码 有则拼接完成了 */
    task_code: string;
    /** 编排id 有则拼接完成了 */
    arrange_id: string;
    /** 内容id 有则已经播放 */
    content_id: string;
  };

  type smzxIcescreenAreaGetReq = {
    area: number;
  };

  type smzxIcescreenAreaGetResp = {
    code: number;
    msg: string;
    area: smzxIcescreenArea;
    arrange: smzxIcescreenArrange;
    content_list: smzxIcescreenContent[];
  };

  type smzxIcescreenAreaListReq = Record<string, any>;

  type smzxIcescreenAreaListResp = {
    code: number;
    msg: string;
    /** 列表 */
    list: smzxIcescreenArea[];
  };

  type smzxIcescreenAreaPlayReq = {
    area: number;
    content_id: string;
  };

  type smzxIcescreenAreaPlayResp = {
    code: number;
    msg: string;
    area: smzxIcescreenArea;
  };

  type smzxIcescreenAreaStopReq = {
    area: number;
  };

  type smzxIcescreenAreaStopResp = {
    code: number;
    msg: string;
    area: smzxIcescreenArea;
  };

  type smzxIcescreenArrange = {
    /** 冰屏编排id */
    id: string;
    /** 冰屏编排名称 */
    name: string;
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 冰屏编排设备列表 */
    config_list: smzxIcescreenArrangeConfig[];
    /** 绑定设备信息 列表使用 */
    task_id: string;
    task_code: string;
    task_name: string;
  };

  type smzxIcescreenArrangeAddReq = {
    icescreen_arrange: smzxIcescreenArrange;
  };

  type smzxIcescreenArrangeAddResp = {
    code: number;
    msg: string;
    icescreen_arrange: smzxIcescreenArrange;
  };

  type smzxIcescreenArrangeBindReq = {
    id: string;
    task_code: string;
  };

  type smzxIcescreenArrangeBindResp = {
    code: number;
    msg: string;
    id: string;
    task_code: string;
  };

  type smzxIcescreenArrangeConfig = {
    device_id: string;
    width: number;
    height: number;
  };

  type smzxIcescreenArrangeDelReq = {
    id: string;
  };

  type smzxIcescreenArrangeDelResp = {
    code: number;
    msg: string;
    id: string;
  };

  type smzxIcescreenArrangeGetReq = {
    id: string;
  };

  type smzxIcescreenArrangeGetResp = {
    code: number;
    msg: string;
    icescreen_arrange: smzxIcescreenArrange;
  };

  type smzxIcescreenArrangePageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxIcescreenArrangePageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 冰屏编排列表 */
    list: smzxIcescreenArrange[];
  };

  type smzxIcescreenArrangeUnBindReq = {
    id: string;
  };

  type smzxIcescreenArrangeUnBindResp = {
    code: number;
    msg: string;
    id: string;
  };

  type smzxIcescreenArrangeUpdateReq = {
    icescreen_arrange: smzxIcescreenArrange;
  };

  type smzxIcescreenArrangeUpdateResp = {
    code: number;
    msg: string;
    icescreen_arrange: smzxIcescreenArrange;
  };

  type smzxIcescreenContent = {
    /** 冰屏内容id */
    id: string;
    /** 冰屏编排id */
    arrange_id: string;
    /** 冰屏内容名称 */
    name: string;
    /** 冰屏视频缩略图 */
    scale_image: string;
    /** 冰屏内容列表 */
    resources: string[];
    /** 冰屏编排名称 列表展示 */
    arrange_name: string;
  };

  type smzxIcescreenContentAddReq = {
    icescreen_content: smzxIcescreenContent;
  };

  type smzxIcescreenContentAddResp = {
    code: number;
    msg: string;
    icescreen_content: smzxIcescreenContent;
  };

  type smzxIcescreenContentDelReq = {
    id: string;
  };

  type smzxIcescreenContentDelResp = {
    code: number;
    msg: string;
    id: string;
  };

  type smzxIcescreenContentGetReq = {
    id: string;
  };

  type smzxIcescreenContentGetResp = {
    code: number;
    msg: string;
    icescreen_content: smzxIcescreenContent;
  };

  type smzxIcescreenContentPageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxIcescreenContentPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 冰屏内容列表 */
    list: smzxIcescreenContent[];
  };

  type smzxIcescreenContentTreeItem = {
    id: string;
    parent_id: string;
    source_id: string;
    name: string;
    /** 节点类型 0 区域 1 编排 2 内容 */
    node_type: string;
  };

  type smzxIcescreenContentTreeReq = Record<string, any>;

  type smzxIcescreenContentTreeResp = {
    code: number;
    msg: string;
    /** 节点数 */
    list: smzxIcescreenContentTreeItem[];
  };

  type smzxIcescreenContentUpdateReq = {
    icescreen_content: smzxIcescreenContent;
  };

  type smzxIcescreenContentUpdateResp = {
    code: number;
    msg: string;
    icescreen_content: smzxIcescreenContent;
  };

  type smzxSensorDevice = {
    device_id: string;
    device_name: string;
    product_id: string;
    product_name: string;
    /** 区位类型 0无 1 外室 2 中式茶艺厅 3西式茶歇亭-1 */
    area: number;
    /** 在线状态 导入不要入参 */
    is_online: boolean;
  };

  type smzxSensorDeviceAllPropertyReq = Record<string, any>;

  type smzxSensorDeviceAllPropertyResp = {
    code: number;
    msg: string;
    list: smzxSensorDeviceProperty[];
  };

  type smzxSensorDeviceImportReq = {
    list: smzxSensorDevice[];
  };

  type smzxSensorDeviceImportResp = {
    code: number;
    msg: string;
  };

  type smzxSensorDevicePageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
    device_name: string;
  };

  type smzxSensorDevicePageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 设备列表 */
    list: smzxSensorDevice[];
  };

  type smzxSensorDeviceProperty = {
    area: number;
    device_id: string;
    propertys: string;
  };

  type smzxSensorDeviceUpdate = {
    id: string;
    /** 区位类型 0无 1 外室 2 中式茶艺厅 3西式茶歇亭-1 */
    area: number;
  };

  type smzxSensorDeviceUpdateReq = {
    sensor_device_update: smzxSensorDeviceUpdate;
  };

  type smzxSensorDeviceUpdateResp = {
    code: number;
    msg: string;
    sensor_device: smzxSensorDevice;
  };

  type smzxStreamReq = {
    msg_id: string;
    time_stamp: number;
    device_id: string;
    command: string;
    data: string;
    context: string;
  };

  type smzxStreamResp = {
    msg_id: string;
    time_stamp: number;
    command: string;
    data: string;
    context: string;
  };

  type smzxTask = {
    /** 任务名称 */
    name: string;
    /** 任务代码 */
    code: string;
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 图片地址 */
    url: string;
    taskRecord: smzxTaskRecord;
  };

  type smzxTaskCreateReq = {
    /** 任务名称 */
    name: string;
    /** 任务代码 */
    code: string;
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 地图id */
    map_id: string;
    /** 图片地址 */
    url: string;
    /** 任务模板 */
    task_url: string;
  };

  type smzxTaskCreateResp = {
    code: number;
    msg: string;
  };

  type smzxTaskDeleteReq = {
    code: string;
  };

  type smzxTaskDeleteResp = {
    code: number;
    msg: string;
  };

  type smzxTaskDetail = {
    /** 任务名称 */
    name: string;
    /** 任务代码 */
    code: string;
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 地图id */
    map_id: string;
    /** 图片地址 */
    url: string;
    /** 任务模板 */
    task_url: string;
  };

  type smzxTaskItem = {
    /** 任务项id */
    id: string;
    /** 任务组id */
    group_id: string;
    /** 设备id */
    device_id: string;
    /** 指令 */
    command: string;
    /** 参数 */
    arg: string[];
    /** 状态 0 已发送 1 执行中 2 失败 3 成功 */
    status: number;
    /** 错误原因 */
    err: string;
    /** 开始时间 */
    start_time: number;
    /** 结束时间 */
    finish_time: number;
    /** 是否需要等待结束 */
    wait_finish: boolean;
    /** 任务id */
    task_id: string;
    row: number;
    col: number;
  };

  type smzxTaskListResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 任务列表 */
    list: smzxTask[];
    /** 被锁定会议 */
    lock_code_list: string[];
  };

  type smzxTaskPageReq = {
    /** 任务名称 */
    name: string;
    /** 代码 */
    code: string;
    /** 分页 */
    page_index: number;
    page_size: number;
  };

  type smzxTaskPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 任务列表 */
    list: smzxTaskDetail[];
  };

  type smzxTaskRecord = {
    /** 任务id */
    id: string;
    /** 任务名称 */
    name: string;
    /** 任务代码 */
    code: string;
    /** 是否拼接 拼接完成可以解体 解体完成可以拼接 */
    splice: boolean;
    total: number;
    current: number;
    /** 任务状态 0 待拼接 1 执行中 2 失败 3 成功 */
    task_status: number;
    /** 失败原因 */
    err: string;
    /** 开始时间 */
    start_time: number;
    /** 结束时间 */
    finish_time: number;
    /** 任务项列表 */
    task_item_list: smzxTaskItem[];
    group_total: number;
    group_current: number;
  };

  type smzxTaskRecordExportReq = {
    id: string;
  };

  type smzxTaskRecordExportResp = {
    code: number;
    msg: string;
    file_url: string;
  };

  type smzxTaskRecordPageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
    /** 开始时间 */
    start_time: number;
    /** 结束时间 */
    end_time: number;
  };

  type smzxTaskRecordPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 任务记录列表 */
    list: smzxTaskRecord[];
  };

  type smzxTaskStartTaskReq = {
    /** 任务代码 */
    code: string;
    /** 是否拼接 */
    splice: boolean;
  };

  type smzxTaskStartTaskResp = {
    code: number;
    msg: string;
    meeting: smzxTask;
    lock_code_list: string[];
  };

  type smzxTaskUpdateReq = {
    /** 任务名称 */
    name: string;
    /** 任务代码 */
    code: string;
    /** 区域 1 南门左侧平台 2 南门右侧平台 3 北门平台 */
    area: number;
    /** 地图id */
    map_id: string;
    /** 图片地址 */
    url: string;
    /** 任务模板 */
    task_url: string;
  };

  type smzxTaskUpdateResp = {
    code: number;
    msg: string;
  };

  type smzxVideo = {
    /** 视频id */
    id: string;
    /** 视频名称 */
    name: string;
    /** 视频url */
    video_url: string;
  };

  type smzxVideoAddReq = {
    video: smzxVideo;
  };

  type smzxVideoAddResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };

  type smzxVideoDelListReq = {
    ids: string[];
  };

  type smzxVideoDelListResp = {
    code: number;
    msg: string;
    ids: string[];
  };

  type smzxVideoDevice = {
    device_id: string;
    device_name: string;
    product_id: string;
    product_name: string;
  };

  type smzxVideoDeviceListReq = Record<string, any>;

  type smzxVideoDeviceListResp = {
    code: number;
    msg: string;
    /** 设备列表 */
    list: smzxVideoDevice[];
  };

  type smzxVideoGetReq = {
    id: string;
  };

  type smzxVideoGetResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };

  type smzxVideoPageReq = {
    /** 第几页，从1开始 */
    page_index: number;
    /** 每页多少条 */
    page_size: number;
  };

  type smzxVideoPageResp = {
    code: number;
    msg: string;
    /** 列表数量 */
    total: number;
    /** 视频列表 */
    list: smzxVideo[];
  };

  type smzxVideoPushReq = {
    video_id: string;
    device_ids: string[];
  };

  type smzxVideoPushResp = {
    code: number;
    msg: string;
  };

  type smzxVideoUpdateReq = {
    video: smzxVideo;
  };

  type smzxVideoUpdateResp = {
    code: number;
    msg: string;
    video: smzxVideo;
  };
}
