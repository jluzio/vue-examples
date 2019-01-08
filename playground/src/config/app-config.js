/* eslint-disable no-unused-vars */
import { Store } from 'vuex'
import { AxiosInstance } from 'axios'
import debug from 'debug'
import moment from 'moment'
import { Toasted } from 'vue-toasted'
import jQuery from 'jquery'
import { Logger } from '@/plugins/debug'
import { ServiceFactory } from '@/services/service-factory'

export class Lib {
  /** @type {AxiosInstance} */
  axios = null
  /** @type {debug} */
  debug = null
  /** @type {jQuery} */
  jQuery = null
  /** @type {moment} */
  moment = null
  /** @type {Toasted} */
  toasted = null
}

export default class AppConfig {
  /** @type {Lib} */
  lib = new Lib()
  /** @type {Logger} */
  log = null
  /** @type {ServiceFactory} */
  services = null
  /** @type {Store} */
  store = null
}
