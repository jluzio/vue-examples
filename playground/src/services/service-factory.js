import LoginService from './login-service'
// eslint-disable-next-line no-unused-vars
import ServiceConfig from './service-config'

export default class ServiceFactory {
  /**
   * @param {ServiceConfig} serviceConfig
   */
  constructor(serviceConfig) {
    this.loginService = new LoginService(serviceConfig)
  }
}
