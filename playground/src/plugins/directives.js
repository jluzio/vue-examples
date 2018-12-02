import AppendTestDirective from '@/directives/append-test-directive'
import DupDirective from '@/directives/dup-directive'
import FocusDirective from '@/directives/focus-directive'

import Vue from 'vue'

const Plugin = {
  install(Vue, options) {
    Vue.directive('dup', DupDirective)
    Vue.directive('appendTest', AppendTestDirective)
    Vue.directive('focus', FocusDirective)
  }
}

Vue.use(Plugin)

export default Plugin
