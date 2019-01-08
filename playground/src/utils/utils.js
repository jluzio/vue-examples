import objects from './objects'
import { Formats, formatters } from './format'

class Utils {
  get objects() {
    return objects
  }
  get Formats() {
    return Formats
  }
  get formatters() {
    return formatters
  }
}
export default new Utils()
