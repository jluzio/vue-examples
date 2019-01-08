/* eslint-disable no-unused-vars */
import Vue from 'vue'
import $appCfg from '@/$appCfg'

// BUG atm: assignments to imported instance $appCfg breaks IntelliSense
// Workaround: local var
const cfg = $appCfg
cfg.log = Vue.prototype.$log
cfg.lib.axios = Vue.prototype.$axios
cfg.lib.debug = Vue.prototype.$debug
cfg.lib.jQuery = Vue.prototype.$jQuery
cfg.lib.moment = Vue.prototype.$moment
cfg.lib.toasted = Vue.prototype.$toasted
