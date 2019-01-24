import Vue from 'vue'
import UppercaseFilter from '@/filters/uppercase-filter'
import SubstringFilter from '@/filters/substring-filter'
import QuoteFilter from '@/filters/quote-filter'
import ErrorTipFilter from '@/filters/error-tip-filter'

const Plugin = {
  install(Vue, options) {
    Vue.filter('uppercase', UppercaseFilter)
    Vue.filter('substring', SubstringFilter)
    Vue.filter('substr', SubstringFilter)
    Vue.filter('quote', QuoteFilter)
    Vue.filter('errTip', ErrorTipFilter)
  }
}

Vue.use(Plugin)

export default Plugin
