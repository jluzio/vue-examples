import Vue from 'vue'
import UppercaseFilter from '@/filters/uppercase-filter'
import SubstringFilter from '@/filters/substring-filter'
import QuoteFilter from '@/filters/quote-filter'
import ValTipFilter from '@/filters/val-tip-filter'
import FirstValTipFilter from '@/filters/first-val-tip-filter'
import ValClassesFilter from '@/filters/val-classes-filter'

const Plugin = {
  install(Vue, options) {
    Vue.filter('uppercase', UppercaseFilter)
    Vue.filter('substring', SubstringFilter)
    Vue.filter('substr', SubstringFilter)
    Vue.filter('quote', QuoteFilter)
    Vue.filter('valTip', ValTipFilter)
    Vue.filter('firstValTip', FirstValTipFilter)
    Vue.filter('valClasses', ValClassesFilter)
  }
}

Vue.use(Plugin)

export default Plugin
