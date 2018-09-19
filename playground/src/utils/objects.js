class Objects {
  mergeProperties(prototype, ...sources) {
    return Object.setPrototypeOf(
      Object.assign({}, ...sources),
      prototype)
  }

  isUndefined(object) {
    return Object.is(object, undefined)
  }

  isNullOrUndefined(object) {
    return Object.is(object, undefined) || object === null
  }

  defaultIfNullOrUndefined(object, defaultValue) {
    return this.isNullOrUndefined(object) ? defaultValue : object
  }
}

export default new Objects()
