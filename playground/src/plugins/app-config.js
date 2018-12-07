import Vue from 'vue'
import $appCfg from '@/$appCfg'

const Plugin = {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$appCfg', { value: $appCfg })
  }
}

Vue.use(Plugin)
export default Plugin
