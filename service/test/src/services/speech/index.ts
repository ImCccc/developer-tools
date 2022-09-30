/* eslint-disable */
import * as AppService from './AppService'
import * as DeviceService from './DeviceService'
import * as SdkService from './SdkService'
import * as SkillService from './SkillService'
export default {
  ...AppService,
  ...DeviceService,
  ...SdkService,
  ...SkillService,
  }
