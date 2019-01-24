// eslint-disable-next-line no-unused-vars
import { Validation } from 'vuelidate'

/**
 * @param {*} cssClassesOrValidation
 * @param {Validation} validation
 */
export default function (cssClassesOrValidation = {}, validationParam) {
  const cssClasses = validationParam === undefined ? {} : cssClassesOrValidation
  const validation = validationParam === undefined ? cssClassesOrValidation : validationParam
  return Object.assign(cssClasses, { invalid: validation.$invalid, valid: !validation.$invalid })
}
