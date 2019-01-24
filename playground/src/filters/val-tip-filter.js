// eslint-disable-next-line no-unused-vars
import { Validation } from 'vuelidate'
import validationUtil from '@/utils/vuelidate-util'

/**
 * @param {Validation} validation
 * @param {String} nested
 */
export default function (validation, nested = false) {
  return validationUtil.validationsMessages(validation, nested).join('\n')
}
