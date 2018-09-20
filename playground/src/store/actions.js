import Vue from 'vue'
import mutationTypes from './mutation-types'
import router from '../router'
import loginService from '../services/login.service'
import objects from '@/utils/objects'

const log = Vue.prototype.$debug('authLog')

const actions = {
  login: ({ dispatch, commit }, credentials) => {
    log('actions.login: starting')
    commit(mutationTypes.LOGIN_PENDING)
    return loginService.login(credentials)
      .then(response => {
        log('action.login: then')
        log(response)
        if (response.success) {
          log('actions.login: success')
          dispatch('successfulLogin', {
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
  autoLogin: ({ dispatch, commit }, loginPayload) => {
    log('actions.autoLogin: starting')
    dispatch('successfulLogin', loginPayload)
  },
  successfulLogin: ({ commit }, loginPayload) => {
    log('actions.successfulLogin: starting')
    commit(mutationTypes.LOGIN_SUCCESS, loginPayload)
  },
  logout: ({ commit }, options) => {
    commit(mutationTypes.LOGOUT)
    const _options = objects.defaultIfNullOrUndefined(options, {})
    const redirect = objects.defaultIfNullOrUndefined(_options.redirect, '/')
    router.push(redirect)
  }
}

export default actions
