import express from 'express'
import createError from 'http-errors'
import { router as homeRouter } from './homeRouter.js'
import { router as moviesRouter } from './moviesRouter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/movies', moviesRouter)

router.use('*', (req, res, next) => next(createError(404)))
