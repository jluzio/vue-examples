import Vue from 'vue';
import ServiceResponse from "./serviceResponse";

const serviceLog = Vue.prototype.$debug("serviceLog")
const debugLog = Vue.prototype.$log.debug

class LoginResponse extends ServiceResponse {
  constructor(status, message, username = null, token = null) {
    super(status, message)
    this.username = username
    this.token = token
  }
}

class LoginService {
  apiUrl = 'http://localhost:9080/DutyTravelWAR/api/auth/login'
  axios = Vue.prototype.$axios

  callLogin(credentials) {
    debugLog("callLogin")
    return this.axios.post(this.apiUrl, credentials)
  }

  login(credentials) {
    serviceLog("login - credentials: ", credentials)
    debugLog(this)
    return this.callLogin(credentials)
      .then((response) => {
        serviceLog("login: success - response: ", response)
        return new LoginResponse(response.status, "OK", credentials.username, response.headers.authorization);
      })
      .catch((error) => {
        serviceLog("login: error: ", error)
        debugLog(error)
        debugLog(error.response)
        return new LoginResponse(error.response.status, `Error: status=${error.response.status} | msg=${error.response.statusText}` );
      })
  }

}

const loginService = new LoginService()

export default loginService
