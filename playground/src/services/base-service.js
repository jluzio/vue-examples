// eslint-disable-next-line no-unused-vars
import ServiceConfig from './service-config'

export default class BaseService {
  /**
   * @param {ServiceConfig} serviceConfig
   */
  constructor(serviceConfig) {
    this.serviceConfig = serviceConfig
  }
  get cfg() {
    return this.serviceConfig
  }
  get appCfg() {
    return this.serviceConfig.appCfg
  }
}
