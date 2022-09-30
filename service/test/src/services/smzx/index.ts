/* eslint-disable */
import * as TaskDispatchService from './TaskDispatchService'
import * as AgvDeviceService from './AgvDeviceService'
import * as AppUpgradeService from './AppUpgradeService'
import * as BroadcastService from './BroadcastService'
import * as ChargeService from './ChargeService'
import * as DevicePropertyService from './DevicePropertyService'
import * as ErrorLogService from './ErrorLogService'
import * as IcescreenAreaService from './IcescreenAreaService'
import * as IcescreenArrangeService from './IcescreenArrangeService'
import * as IcescreenContentService from './IcescreenContentService'
import * as SensorDeviceService from './SensorDeviceService'
import * as StreamService from './StreamService'
import * as TaskRecordService from './TaskRecordService'
import * as TaskService from './TaskService'
import * as VideoService from './VideoService'
export default {
  ...TaskDispatchService,
  ...AgvDeviceService,
  ...AppUpgradeService,
  ...BroadcastService,
  ...ChargeService,
  ...DevicePropertyService,
  ...ErrorLogService,
  ...IcescreenAreaService,
  ...IcescreenArrangeService,
  ...IcescreenContentService,
  ...SensorDeviceService,
  ...StreamService,
  ...TaskRecordService,
  ...TaskService,
  ...VideoService,
  }
