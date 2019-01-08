import Vue from 'vue'
import moment from 'moment'
// import localePt from 'moment/locale/pt';

moment.locale('pt')

const Plugin = {
  install(Vue, options) {
    Object.defineProperty(Vue.prototype, '$moment', { value: moment })
  }
}

Vue.use(Plugin)

export default Plugin
