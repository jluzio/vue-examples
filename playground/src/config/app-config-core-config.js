/* eslint-disable no-unused-vars */
import Vue from 'vue'
import $appCfg from '@/$appCfg'

// BUG atm: assignments to imported instance $appCfg breaks IntelliSense
// Workaround: local var
const cfg = $appCfg
cfg.axios = Vue.prototype.$axios
cfg.debug = Vue.prototype.$debug
cfg.log = Vue.prototype.$log
