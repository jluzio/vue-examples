// eslint-disable-next-line no-unused-vars
import { Validation } from 'vuelidate'
// eslint-disable-next-line no-unused-vars
import VueI18n from 'vue-i18n'

export const Filters = {
  All: 'all',
  First: 'first'
}

class ValidationUtil {
  /**
   * @param {*} target
   * @param {Boolean} nested
   * @param {VueI18n} i18n
   */
  validationsMessages(target, nested, i18n) {
    let messages = []
    if (nested) {
      Object.keys(target).filter(k => !this.flagKey(k)).forEach(fieldName => {
        messages.push(...this._validationMessages(target[fieldName], fieldName, i18n))
      })
    } else {
      messages.push(...this._validationMessages(target, null, i18n))
    }
    return messages
  }

  /**
   * @param {Validation} validation
   * @param {String} name
   * @param {VueI18n} i18n
   */
  _validationMessages(validation, name, i18n) {
    let messages = []
    if (!validation.$pending && validation.$invalid) {
      for (let validationId in validation) {
        if (!this.flagKey(validationId) && !validation[validationId]) {
          const ctx = name ? `[${name}]` : ''
          const msgKey = 'validation.' + validationId
          let msg = null
          if (i18n && i18n.te(msgKey)) {
            msg = i18n.t(msgKey)
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
