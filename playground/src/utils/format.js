import moment from 'moment'

const optionalApply = (value, func) => value ? func(value) : value

const Formats = {
  ISO_LOCAL_DATE: 'YYYY-MM-DD',
  ISO_LOCAL_DATE_TIME: 'YYYY-MM-DD[T]HH:mm:ss',
  ISO_DATE_TIME: 'YYYY-MM-DD[T]HH:mm:ssSSSZ'
}

class Formatters {
  date(value, format) {
    return optionalApply(value, v => moment(v).format(format))
  }
  isoLocalDate(value) {
    return this.date(value, Formats.ISO_LOCAL_DATE)
  }
  isoLocalDateTime(value) {
    return this.date(value, Formats.ISO_LOCAL_DATE_TIME)
  }
  isoDateTime(value) {
    return this.date(value, Formats.ISO_DATE_TIME)
  }
}
const formatters = new Formatters()

export { Formats, formatters }
export default formatters
