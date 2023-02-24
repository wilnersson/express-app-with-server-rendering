import { MoviesService } from '../services/MoviesService.js'

/**
 * Class for MoviesController.
 */
export class MoviesController {
  #moviesService

  /**
   * Constructor for MoviesController.
   *
   * @param {MoviesService} moviesService - An instance of MoviesService.
   */
  constructor (moviesService = new MoviesService()) {
    this.#moviesService = moviesService
  }

  /**
   * Renders the movies page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async renderMoviesPage (req, res, next) {
    try {
      const viewData = { movies: await this.#moviesService.get() }

      res.render('movies/index', { viewData })
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  /**
   * Adds a new movie.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async addMovie (req, res, next) {
    try {
      await this.#moviesService.insert({
        title: req.body.title,
        year: req.body.year,
        durationInMinutes: req.body.durationInMinutes
      })

      await this.renderMoviesPage(req, res, next)
    } catch (error) {
      console.error(error)
      next(error)
    }
  }
}
