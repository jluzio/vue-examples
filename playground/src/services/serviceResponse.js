
export default class ServiceResponse {

  constructor(status, message) {
    this.status = status
    this.message = message
  }

  get success() {
    return this.status === 200
  }
}