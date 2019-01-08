/* eslint-disable no-unused-vars */
import { Store } from 'vuex'
import { AxiosInstance } from 'axios'
import debug from 'debug'
import moment from 'moment'
import jQuery from 'jquery'
import { Logger } from '@/plugins/debug'
import { ServiceFactory } from '@/services/service-factory'
import objects from '@/utils/objects'
import { Formats, formatters } from '@/utils/format'
import { Toasted } from 'vue-toasted'

export class Libraries {
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

export class Utils {
  get objects() {
    return objects
  }
  get Formats() {
    return Formats
  }
  get formatters() {
    return formatters
  }
}

export default class AppConfig {
  /** @type {Libraries} */
  lib = new Libraries()
  /** @type {Logger} */
  log = null
  /** @type {ServiceFactory} */
  services = null
  /** @type {Store} */
  store = null
  /** @type {Utils} */
  utils = new Utils()
}
