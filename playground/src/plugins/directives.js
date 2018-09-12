import '@/directives/dup.directive'

import AppendTestDirective from '@/directives/appendTest.directive'

import Vue from 'vue'

const Plugin = {
  install(Vue, options) {
    Vue.directive('appendTest', AppendTestDirective)
  }
}

Vue.use(Plugin)

export default Plugin
