import UppercaseFilter from '@/filters/uppercase.filter'
import SubstringFilter from '@/filters/substring.filter'
import QuoteFilter from '@/filters/quote.filter'

import Vue from 'vue'

const Plugin = {
  install(Vue, options) {
    Vue.filter('uppercase', UppercaseFilter)
    Vue.filter('substring', SubstringFilter)
    Vue.filter('substr', SubstringFilter)
    Vue.filter('quote', QuoteFilter)
  }
}

Vue.use(Plugin)

export default Plugin
