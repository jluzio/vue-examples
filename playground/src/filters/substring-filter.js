export default function(value, start, end) {
  if (!value) return ''
  return value.substring(start, end)
}
