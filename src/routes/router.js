import express from 'express'

export const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(Buffer.from('Hello World!'))
    .status(200)
    .end()
})
