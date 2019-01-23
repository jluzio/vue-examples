import Vue from 'vue'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const Plugin = {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$bootstrap', { value: bootstrap })
  }
}

Vue.use(Plugin)

export default Plugin
