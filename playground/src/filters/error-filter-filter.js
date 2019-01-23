import validations from '@/utils/validations'

export default function (errors, filter, name) {
  let messages = validations.filter(errors, filter, name)
  return validations.removeFieldName(messages).join('\n')
}
