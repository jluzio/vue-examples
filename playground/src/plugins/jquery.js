import Vue from 'vue'
import jQuery from 'jquery'

const Plugin = {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$jQuery', { value: jQuery })
  }
}

Vue.use(Plugin)

export default Plugin
