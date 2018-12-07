import ServiceFactory from './service-factory'
import ServiceConfig from './service-config'

const serviceConfig = new ServiceConfig()
export default new ServiceFactory(serviceConfig)
