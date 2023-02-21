import express from 'express'
import createError from 'http-errors'

export const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('start')
})

router.use('*', (req, res, next) => next(createError(404)))
