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

const currentDirectoryFullPath = dirname(fileURLToPath(import.meta.url))
const baseURL = process.env.BASE_URL || '/'

const app = express()

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
  const viewData = { stackTrace: error.stack }

  res
    .status(error.status || 500)
    .render('errors/500', { viewData })
})

app.listen(process.env.PORT, () => {
  console.log('Server up! Go to http://localhost:' + process.env.PORT)
  console.log('Ctrl-C to terminate...')
})
