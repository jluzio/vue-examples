import Vue from 'vue'
import mutationTypes from './mutation-types'
import router from '../router'
import loginService from '../services/login.service'

const log = Vue.prototype.$debug('authLog')

const actions = {
  login: ({ commit }, credentials) => {
    log('actions.login: starting')
    commit(mutationTypes.LOGIN_PENDING)
    return loginService.login(credentials)
      .then(response => {
        log('action.login: then')
        log(response)
        if (response.success) {
          log('actions.login: success')
          commit(mutationTypes.LOGIN_SUCCESS, {
            username: response.username,
            token: response.token
          })
        } else {
          log('actions.login: wrong creds')
          commit(mutationTypes.LOGIN_WRONG_CREDENTIALS)
        }
      })
      .catch(reason => {
        log('actions.login: catch')
        log(reason)
        commit(mutationTypes.LOGIN_ERROR)
      })
  },
  logout: ({ commit }) => {
    commit(mutationTypes.LOGOUT)
    router.push('/login')
  }
}

export default actions
