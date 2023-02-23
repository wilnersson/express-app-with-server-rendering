import { TvshowsService } from '../services/TvshowsService.js'

/**
 * Class for TvshowsController.
 */
export class TvshowsController {
  #service

  /**
   * Constructor for TvshowsController.
   *
   * @param {TvshowsService} service - An instance of TvshowsService.
   */
  constructor (service = new TvshowsService()) {
    this.#service = service
  }

  /**
   * Renders the tv shows page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async renderTvshowsPage (req, res, next) {
    try {
      const viewData = { tvShows: await this.#service.get() }

      res.render('tvshows/index', { viewData })
    } catch (error) {
      console.error(error)
      next(error)
    }
  }

  /**
   * Adds a new TV-show.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async addTvShow (req, res, next) {
    try {
      await this.#service.insert({
        title: req.body.title,
        year: req.body.year,
        nrSeasons: req.body.nrSeasons,
        nrEpisodes: req.body.nrEpisodes
      })

      await this.renderTvshowsPage(req, res, next)
    } catch (error) {
      console.error(error)
      next(error)
    }
  }
}
