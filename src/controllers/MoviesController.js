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
    const viewData = { movies: await this.#moviesService.get() }

    res.render('movies/index', { viewData })
  }
}
