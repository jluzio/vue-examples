/* eslint-disable no-unused-vars */
import Vue from 'vue'
import $appCfg from '@/$appCfg'
import './app-config-core-config'
import store from '@/store'
import services from '@/services'
import i18n from '@/i18n'

// BUG atm: assignments to imported instance $appCfg breaks IntelliSense
// Workaround: local var
const cfg = $appCfg
cfg.store = store
cfg.services = services
cfg.i18n = i18n
