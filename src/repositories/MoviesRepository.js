import { AbstractMongooseRepository } from './AbstractMongooseRepository.js'
import { MovieModel } from '../models/MovieModel.js'

/**
 * Specialization of AbstractMongooseRepository for Movies.
 */
export class MoviesRepository extends AbstractMongooseRepository {
  /**
   * Constructor for MoviesRepository.
   *
   * @param {MovieModel} model - The Movie model class.
   */
  constructor (model = MovieModel) {
    super(model)
  }
}
