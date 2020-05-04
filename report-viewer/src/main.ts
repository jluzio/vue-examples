import Vue from 'vue'
import App from './App.vue'

import './vue-material-plugin'
import './vue-paginate-plugin'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
