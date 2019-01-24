/* eslint-disable no-unused-vars */
import $appCfg from '@/$appCfg'
import store from '@/store'
import services from '@/services'
import i18n from '@/i18n'
import './app-config-core-config'

// BUG atm: assignments to imported instance $appCfg breaks IntelliSense
// Workaround: local var
const cfg = $appCfg
cfg.i18n = i18n
cfg.services = services
cfg.store = store
