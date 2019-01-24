// eslint-disable-next-line no-unused-vars
import { ErrorBag } from 'vee-validate'

export const Filters = {
  All: 'all',
  First: 'first',
  Collect: 'collect'
}

class ValidationUtil {
  /**
   * @param {ErrorBag} errors
   * @param {String} filter
   * @param {String} name
   */
  filter(errors, filter, name) {
    let messages = []
    const resolvedFilter = filter || Filters.First
    if (resolvedFilter === Filters.All) {
      messages.push(...errors.all())
    } else if (resolvedFilter === Filters.First && errors.has(name)) {
      messages.push(errors.first(name))
    } else if (resolvedFilter === Filters.Collect && errors.has(name)) {
      messages.push(...errors.collect(name))
    }
    return messages
  }

  /**
   * @param {String[]} messages
   * @param {String} fieldName
   */
  removeFieldName(messages, fieldName) {
    return messages.map(m => m.replace(fieldName + ' ', ''))
  }

  /**
   * @param {String[]} messages
   * @param {String} replaceValue
   */
  replaceTokenFieldName(messages, replaceValue) {
    return messages.map(m => m.replace('{field}', replaceValue))
  }

  /**
   * @param {String} fieldName
   * @param {String} validatedHandlerName
   */
  getPendingValidationHandler(fieldName, validatedHandlerName) {
    return function() {
      /** @type {FieldFlags} */
      const field = this.fields[fieldName]
      /** @type {Function} */
      const validatedHandler = this[validatedHandlerName]
      if (field.dirty && !field.pending && field.valid) {
        validatedHandler()
      }
    }
  }
}

export default new ValidationUtil()
