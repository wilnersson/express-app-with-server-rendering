import express from 'express'
import { TvshowsController } from '../controllers/TvshowsController.js'

export const router = express.Router()
const controller = new TvshowsController()

router.get('/', (req, res, next) => controller.renderTvshowsPage(req, res, next))
router.post('/', (req, res, next) => controller.addTvShow(req, res, next))
