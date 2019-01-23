class Validations {
  filter(errors, name, filter) {
    let messages = []
    const resolvedFilter = filter || 'first'
    if (resolvedFilter === 'all') {
      messages.push(...errors.all())
    } else if (resolvedFilter === 'first' && errors.has(name)) {
      messages.push(errors.first(name))
    } else if (resolvedFilter === 'collect' && errors.has(name)) {
      messages.push(...errors.collect(name))
    }
    if (name) {
      messages = messages.map(m => m.replace(name + ' ', ''))
    }
    return messages.join('\n')
  }

  replace(messages, name, replaceValue) {
    const searchValue = replaceValue ? name : name + ' '
    return messages.map(m => m.replace(searchValue, replaceValue))
  }
}

export default new Validations()
