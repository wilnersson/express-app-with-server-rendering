import express from 'express'

export const router = express.Router()

/**
 * Resolve a controller from the IoC container.
 *
 * @param {object} req - Express request object.
 * @returns {object} - An instance of MoviesController.
 */
const resolveController = (req) => req.app.get('container').resolveService('MoviesController')

router.get('/', (req, res, next) => resolveController(req).renderMoviesPage(req, res, next))
router.post('/', (req, res, next) => resolveController(req).addMovie(req, res, next))
