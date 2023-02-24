import express from 'express'

export const router = express.Router()

/**
 * Resolves a TvshowsController from the IoC container.
 *
 * @param {object} req - Express requrest object.
 * @returns {object} - An instance of TvshowsController.
 */
const resolveController = (req) => req.app.get('container').resolveService('TvshowsController')

router.get('/', (req, res, next) => resolveController(req).renderTvshowsPage(req, res, next))
router.post('/', (req, res, next) => resolveController(req).addTvShow(req, res, next))
