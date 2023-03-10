/**
 * Main starting point of the application.
 * Configuration of Express web server.
 */

import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import logger from 'morgan'
import { router } from './routes/router.js'
import { dbConnection } from './config/mongoose.js'
import { container } from './config/bootstrap.js'

try {
  await dbConnection(container.resolveService('connectionString'))

  const currentDirectoryFullPath = dirname(fileURLToPath(import.meta.url))
  const baseURL = process.env.BASE_URL || '/'

  const app = express()

  app.set('container', container)

  app.use(logger('dev'))

  app.set('view engine', 'ejs')
  app.set('views', join(currentDirectoryFullPath, 'views'))
  app.use(expressLayouts)
  app.set('layout', join(currentDirectoryFullPath, 'views', 'layout', 'default'))

  app.use(express.urlencoded({ extended: false }))

  app.use(express.static(join(currentDirectoryFullPath, '..', 'public')))

  app.use((req, res, next) => {
    res.locals.baseURL = baseURL

    next()
  })

  app.use('/', router)

  // Error handling.
  app.use((error, req, res, next) => {
    if (error.status === 404) {
      return res
        .status(error.status)
        .render('errors/404')
    }

    const viewData = { stackTrace: error.stack || 'No stack trace.' }

    res
      .status(error.status || 500)
      .render('errors/500', { viewData })
  })

  app.listen(container.resolveService('listenPort'), () => {
    console.log('Server up! Go to http://localhost:' + container.resolveService('listenPort'))
    console.log('Ctrl-C to terminate...')
  })
} catch (error) {
  console.error(error)
  process.exitCode = 1
}
