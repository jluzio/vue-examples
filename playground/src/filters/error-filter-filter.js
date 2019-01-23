import validations from '@/utils/validations'

export default function (errors, name, filter) {
  let messages = validations.filter(errors, name, filter)
  messages = validations.replace(name, '')
  return messages.join('\n')
}
