import Vue from 'vue'
import ServiceResponse from './service-response'
import store from '@/store'

const log = Vue.prototype.$debug('authLog')
const serviceLog = Vue.prototype.$debug('serviceLog')
const debugLog = Vue.prototype.$log.debug

class ApiResponse extends ServiceResponse {
  constructor(status, message, data = null) {
    super(status, message)
    this.data = data
  }
}

class ApiTestService {
  privateResourceUrl = 'http://localhost:9080/DutyTravelWAR/api/private/debug/appInfo'
  axios = Vue.prototype.$axios

  getPrivateResource() {
    debugLog('getPrivateResource')
    return this.lib.axios.get(this.privateResourceUrl, {
      headers: { 'Authorization': store.getters.getToken }
    })
      .then((response) => {
        serviceLog('apiTest: success - response: ', response)
        return new ApiResponse(response.status, 'OK', response.data)
      })
      .catch((error) => {
        serviceLog('apiTest: error: ', error)
        debugLog(error)
        debugLog(error.response)
        return new ApiResponse(error.response.status, `Error: status=${error.response.status} | msg=${error.response.statusText}`)
      })
  }
}

const apiTestService = new ApiTestService()

export default apiTestService
