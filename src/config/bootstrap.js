import { MoviesController } from '../controllers/MoviesController.js'
import { TvshowsController } from '../controllers/TvshowsController.js'
import { MovieModel } from '../models/MovieModel.js'
import { TvshowModel } from '../models/TvshowModel.js'
import { MoviesRepository } from '../repositories/MoviesRepository.js'
import { TvshowsRepository } from '../repositories/TvshowsRepository.js'
import { MoviesService } from '../services/MoviesService.js'
import { TvshowsService } from '../services/TvshowsService.js'
import { IoCContainer } from '../util/IoCContainer.js'

const iocContainer = new IoCContainer()

iocContainer.registerService('connectionString', process.env.DB_CONNECTION_STRING)
iocContainer.registerService('listenPort', process.env.PORT)

iocContainer.registerService('MovieModelType', MovieModel, { isType: true })
iocContainer.registerService('MoviesRepositorySingleton', MoviesRepository, {
  dependencies: ['MovieModelType'],
  isSingleton: true
})
iocContainer.registerService('MoviesServiceSingleton', MoviesService, {
  dependencies: ['MoviesRepositorySingleton'],
  isSingleton: true
})
iocContainer.registerService('MoviesController', MoviesController, {
  dependencies: ['MoviesServiceSingleton']
})

iocContainer.registerService('TvshowModelType', TvshowModel, { isType: true })
iocContainer.registerService('TvshowsRepositorySingleton', TvshowsRepository, {
  dependencies: ['TvshowModelType'],
  isSingleton: true
})
iocContainer.registerService('TvshowsServiceSingleton', TvshowsService, {
  dependencies: ['TvshowsRepositorySingleton'],
  isSingleton: true
})
iocContainer.registerService('TvshowsController', TvshowsController, {
  dependencies: ['TvshowsServiceSingleton']
})

export const container = Object.freeze(iocContainer)
