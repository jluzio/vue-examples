import Vue from 'vue'

// Global Libraries/Plugins
// TODO: find if its recommended use min or source and let webpack(?) eventually minimize it?
import './plugins/axios'
import './plugins/debug'
import './plugins/jquery'
import './plugins/jquery-datepicker'
import 'jquery-ui-themes/themes/base/jquery-ui.css'
// import 'jquery-ui-themes/themes/base/jquery-ui.min.css'

import '@/plugins/directives'

import './global-components'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
