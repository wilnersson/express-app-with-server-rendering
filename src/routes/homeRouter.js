import express from 'express'
import { HomeController } from '../controllers/HomeController.js'

export const router = express.Router()
const controller = new HomeController()

router.get('/', (req, res, next) => controller.renderStartPage(req, res, next))
