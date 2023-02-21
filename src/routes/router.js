import express from 'express'

export const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('start')
})

router.use('*', (req, res, next) => {
  res.render('errors/404')
})
