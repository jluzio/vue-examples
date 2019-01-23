// eslint-disable-next-line no-unused-vars
import { ErrorBag } from 'vee-validate'

/**
 * @param {ErrorBag} errors
 * @param {String} name
 * @param {String} filter
 * @param  {...any} params
 */
export default function (errors, name, filter, ...params) {
  let messages = null
  if (errors.has(name)) {
    const filterResult = errors[filter].apply(errors, params)
    if (filterResult) {
      messages = Array.isArray(filterResult) ? filterResult : [filterResult]
    }
  }
  let tooltip = null
  if (messages) {
    tooltip = messages.join('\n')
  }
  return tooltip
}
