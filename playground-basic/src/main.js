import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepicker_i18n_Factory from 'jquery-datepicker/i18n/jquery.ui.datepicker-pt';
 
// Just pass your jquery instance and you're done
datepickerFactory($);
datepicker_i18n_Factory($);
 
$(function() {
  $('.datepicker').datepicker();
  $.datepicker.regional['pt'];
});

