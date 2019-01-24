// eslint-disable-next-line no-unused-vars
import { Validation } from 'vuelidate'
import validationUtil from '@/utils/vuelidate-util'
import $appCfg from '@/$appCfg'

/**
 * @param {Validation} validation
 * @param {String} nested
 */
export default function (validation, nested = false) {
  return validationUtil.validationsMessages(validation, nested, $appCfg.i18n).join('\n')
}
