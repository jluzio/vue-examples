import Router from 'vue-router'

router.FocusDirective
Test.prototype.test
Test2.prototype.test

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

  clone(object) {
    return JSON.parse(JSON.stringify(object))
  }

  assign(object, propertyPath, value) {
    const varExpCtx = this.getVarExpressionContext(object, propertyPath)
    varExpCtx.target[varExpCtx.targetProperty] = value
  }

  getVarExpressionContext(object, propertyPath) {
    const propertyPaths = propertyPath.split('.')
    const target = propertyPaths.slice(0, propertyPaths.length - 1).reduce(
      (currentObject, property) => currentObject[property],
      object
    )
    const targetProperty = propertyPaths[propertyPaths.length - 1]
    return {
      object,
      propertyPath,
      target,
      targetProperty
    }
  }
}

export default new Objects()
