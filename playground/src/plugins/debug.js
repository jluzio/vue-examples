import Vue from 'vue'
import debug from 'debug'

const Category = {
  DEBUG: 'app:debug',
  INFO: 'app:info',
  WARN: 'app:warn',
  ERROR: 'app:error'
}

export class Logger {
  constructor(debug) {
    this.debugInstance = debug
  }
  get debug() { return this.debugInstance(Category.DEBUG) }
  get info() { return this.debugInstance(Category.INFO) }
  get warn() { return this.debugInstance(Category.WARN) }
  get error() { return this.debugInstance(Category.ERROR) }
  log(category, ...params) {
    return this.debugInstance(category)(...params)
  }
}

const logger = new Logger(debug)

const Plugin = {
  install(Vue, options) {
    // debug.enable([Category.DEBUG, Category.INFO, Category.WARN, Category.ERROR].join(","))
    const allCategories = Object.entries(Category).map((entry) => entry[1]).join(',')
    const enabledCategories = allCategories + ',app:test,authLog,serviceLog'
    debug.enable(enabledCategories)
    // debug.enable([Category.ERROR].join(","))
    Object.defineProperty(Vue.prototype, '$debug', { value: debug })
    Object.defineProperty(Vue.prototype, '$log', { value: logger })
  }
}

Vue.use(Plugin)
export default Plugin
