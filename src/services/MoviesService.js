/**
 * Service that supplies basic operations for Movies.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 */

import { MoviesRepository } from '../repositories/MoviesRepository.js'
import { AbstractMongooseService } from './AbstractMongooseService.js'

/**
 * Class for the Movies service.
 */
export class MoviesService extends AbstractMongooseService {
  /**
   * Constructor for MoviesService.
   *
   * @param {MoviesRepository} repository - Repository for the service to use.
   */
  constructor (repository = new MoviesRepository()) {
    super(repository)
  }
}
