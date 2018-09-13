import mutationTypes from './mutation-types'
import Vue from 'vue'

const log = Vue.prototype.$debug('authLog')

const mutations = {
  [mutationTypes.LOGIN_PENDING] (state) {
    state.auth.pending = true
  },
  [mutationTypes.LOGIN_SUCCESS] (state, payload) {
    const token = payload.token
    const username = payload.username
    log('payload: ', payload)
    state.auth.isLoggedIn = true
    state.auth.pending = false
    state.auth.token = token
    state.auth.username = username
    localStorage.setItem('authToken', token)
    localStorage.setItem('username', username)
  },
  [mutationTypes.LOGIN_WRONG_CREDENTIALS] (state) {
    state.pending = false
    state.auth.isLoggedIn = false
  },
  [mutationTypes.LOGIN_ERROR] (state) {
    state.pending = false
    state.auth.isLoggedIn = false
  },
  [mutationTypes.LOGOUT] (state) {
    localStorage.removeItem('authToken')
    localStorage.removeItem('username')
    state.auth.isLoggedIn = false
  }
}

export default mutations
