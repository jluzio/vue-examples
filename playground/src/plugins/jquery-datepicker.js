import Vue from 'vue';
//import jQuery from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerI18nFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-pt';
 
const Plugin = {
  install(Vue, options) {
    // TODO: find if this is the correct way to use other plugins
    var jQuery = Vue.prototype.$jQuery;
    datepickerFactory(jQuery);
    datepickerI18nFactory(jQuery);
  }
};

Vue.use(Plugin);

export default Plugin;
