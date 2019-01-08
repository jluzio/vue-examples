import Vue from 'vue'

export function mapAppVars(config, mapVariable = defaultMappingStrategy) {
  return mapVars(config, Vue.prototype.$appCfg, mapVariable)
}

export function mapVars(config, rootVar, mapVariable = defaultMappingStrategy) {
  const varsMap = {}
  if (Array.isArray(config)) {
    for (let varExpr of config) {
      const varValues = resolveVariable(varExpr, rootVar)
      mapVariable(varsMap, varValues.localVarName, varValues.value)
    }
  } else {
    for (let varName in config) {
      const varExpr = config[varName]
      const varValues = resolveVariable(varExpr, rootVar)
      mapVariable(varsMap, varName, varValues.value)
    }
  }
  return varsMap
}

const resolveVariable = function(varExpr, rootVar) {
  let value = rootVar
  let localVarName = null
  for (let varNamePart of varExpr.split('.')) {
    value = value[varNamePart]
    localVarName = varNamePart
  }
  return { value, varExpr, localVarName }
}

export const MappingStrategies = {
  /**
   * Map the value directly
   * Note: currently it doesn't work with Vue computed properties, just Vue data
   * @param {Object} object
   * @param {String} property
   * @param {Object|Function} value
   */
  setValue(object, property, value) {
    object[property] = value
  }
}
const defaultMappingStrategy = MappingStrategies.setValue

// TODO: remove if can't make it work
// Research for handling Vue computed properties
export const IncubatingMappingStrategies = {
  _getValue(value) {
    return typeof value === 'function'
      ? value.call(this)
      : value
  },
  createGetter(object, property, value) {
    Object.defineProperty(object, property, {
      get() { return this._getValue(value) }
    })
  },
  mappedValueFunction(object, property, value) {
    object[property] = function mappedValue() {
      return this._getValue(value)
    }
  }
}
