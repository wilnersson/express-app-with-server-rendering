/**
 * Main starting point of the application.
 * Configuration of Express web server.
 */

import express from 'express'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import logger from 'morgan'
import { router } from './routes/router.js'

const currentDirectoryFullPath = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(logger('dev'))
app.use('/', router)

// Error handling.
app.use((error, req, res, next) => {
  if (error.status === 404) {
    return res.status(404).end()
  }

  if (req.app.get('env') !== 'development') {
    return res.status(500).end()
  }
})

app.listen('8080', () => {
  console.log('Server up! Go to http://localhost:' + '8080')
  console.log('Ctrl-C to terminate...')
})
