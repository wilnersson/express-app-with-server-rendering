/**
 * Class for HomeController.
 */
export class HomeController {
  /**
   * Renders the startpage.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  renderStartPage (req, res, next) {
    res.render('start')
  }
}
