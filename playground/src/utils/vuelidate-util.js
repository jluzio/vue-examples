// eslint-disable-next-line no-unused-vars
import { Validation } from 'vuelidate'
import $appCfg from '@/$appCfg'

export const Filters = {
  All: 'all',
  First: 'first'
}

class ValidationUtil {
  /**
   * @param {*} target
   * @param {Boolean} nested
   */
  validationsMessages(target, nested = false) {
    let messages = []
    if (nested) {
      Object.keys(target).filter(k => !this.flagKey(k)).forEach(fieldName => {
        messages.push(...this._validationMessages(target[fieldName], fieldName))
      })
    } else {
      messages.push(...this._validationMessages(target, null))
    }
    return messages
  }

  /**
   * @param {Validation} validation
   * @param {String} name
   */
  _validationMessages(validation, name) {
    let messages = []
    if (!validation.$pending && validation.$invalid) {
      for (let validationId in validation) {
        if (!this.flagKey(validationId) && !validation[validationId]) {
          const ctx = name ? `[${name}]` : ''
          const msgKey = 'validation.' + validationId
          let msg = null
          if ($appCfg.i18n.te(msgKey)) {
            msg = $appCfg.i18n.t(msgKey)
          } else {
            msg = `Validation${ctx} :: ${validationId} failed`
          }
          messages.push(msg)
        }
      }
    }
    return messages
  }

  /**
   * @param {String} key
   */
  flagKey(key) {
    return key.startsWith('$')
  }

  /**
   * @param {Validation} validation
   */
  invokeIfCompleteValid(validation, callback) {
    if (!validation.$pending && !validation.$invalid) {
      callback()
    }
  }
}

export default new ValidationUtil()
