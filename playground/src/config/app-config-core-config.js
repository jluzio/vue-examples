/* eslint-disable no-unused-vars */
import Vue from 'vue'
import $appCfg from '@/$appCfg'

// BUG atm: assignments to imported instance $appCfg breaks IntelliSense
// Workaround: local var
const cfg = $appCfg
cfg.log = Vue.prototype.$log
cfg.libs.axios = Vue.prototype.$axios
cfg.libs.debug = Vue.prototype.$debug
cfg.libs.jQuery = Vue.prototype.$jQuery
cfg.libs.moment = Vue.prototype.$moment
cfg.libs.toasted = Vue.prototype.$toasted
