import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

import testOptions from './test-store'

Vue.use(Vuex)

const options = {
  state,
  getters,
  mutations,
  actions
}

/*
const defaultAndTestOptions = {
  modules: {
    default: options,
    testModule: testOptions
  }
}
*/

const store = new Vuex.Store(options)
store.registerModule('testModule', testOptions)

export default store
