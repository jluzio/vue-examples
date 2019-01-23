import Vue from 'vue'
import VeeValidate from 'vee-validate'
// import VeeValidate, { Validator } from 'vee-validate'
// import localePtPt from 'vee-validate/dist/locale/pt_PT'

// Note params:
// classes: check if it's worth using due to lots of classes added
// validity: check if it's worth using due potential clash

Vue.use(VeeValidate, {
  classes: true,
  validity: true
})

// Localize takes the locale object as the second argument (optional) and merges it.
// Validator.localize('pt_PT', localePtPt)

/*
-- default --
https://baianat.github.io/vee-validate/configuration.html

const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: 'errors', // change if property conflicts
  events: 'input|blur',
  fieldsBagName: 'fields',
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: 'validations', // the nested key under which the validation messages will be located
  inject: true,
  locale: 'en',
  validity: false
};
Vue.use(VeeValidate, config);
*/
