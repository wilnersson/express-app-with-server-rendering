import { IoCContainer } from '../util/IoCContainer.js'

const iocContainer = new IoCContainer()

iocContainer.registerService('connectionString', process.env.DB_CONNECTION_STRING)
iocContainer.registerService('listenPort', process.env.PORT)

export const container = Object.freeze(iocContainer)
