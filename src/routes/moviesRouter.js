import express from 'express'
import { MoviesController } from '../controllers/MoviesController.js'

export const router = express.Router()
const controller = new MoviesController()

router.get('/', (req, res, next) => controller.renderMoviesPage(req, res, next))
router.post('/', (req, res, next) => controller.addMovie(req, res, next))
