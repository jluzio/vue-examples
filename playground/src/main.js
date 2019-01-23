import Vue from 'vue'

// Global Libraries/Plugins
// TODO: find if its recommended use min or source and let webpack(?) eventually minimize it?
import './plugins/axios'
import './plugins/debug'
import './plugins/jquery'
import './plugins/jquery-datepicker'
import './plugins/moment'
import './plugins/toasted'
import './plugins/vee-validate'
import './plugins/vuelidate'
import 'jquery-ui-themes/themes/base/jquery-ui.css'
import 'jquery-ui-themes/themes/base/jquery-ui.min.css'
import './plugins/directives'
import './plugins/filters'
import './plugins/app-config'

import './config/app-config-core-config'

import './global-components'

import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './config/app-config-full-config'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
