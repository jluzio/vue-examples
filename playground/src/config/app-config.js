/* eslint-disable no-unused-vars */
import { AxiosInstance } from 'axios'
import debug from 'debug'
import { Logger } from '@/plugins/debug'
import { Store } from 'vuex'
import { ServiceFactory } from '@/services/service-factory'

export default class AppConfig {
  /**
   * @param {AxiosInstance} axios
   * @param {debug} debug
   * @param {Logger} log
   * @param {ServiceFactory} services
   * @param {Store} store
   */
  constructor(axios = null, debug = null, log = null, services = null, store = null) {
    this.axios = axios
    this.debug = debug
    this.log = log
    this.services = services
    this.store = store
  }
}
