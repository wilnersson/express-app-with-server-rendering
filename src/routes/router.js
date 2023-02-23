import express from 'express'
import createError from 'http-errors'
import { router as homeRouter } from './homeRouter.js'
import { router as moviesRouter } from './moviesRouter.js'
import { router as tvShowsRouter } from './tvShowsRouter.js'

export const router = express.Router()

router.use('/', homeRouter)
router.use('/movies', moviesRouter)
router.use('/tvshows', tvShowsRouter)

router.use('*', (req, res, next) => next(createError(404)))
