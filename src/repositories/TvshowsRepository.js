import { AbstractMongooseRepository } from './AbstractMongooseRepository.js'
import { TvshowModel } from '../models/TvshowModel.js'

/**
 * Specialization of AbstractMongooseRepository for TV shows.
 */
export class TvshowsRepository extends AbstractMongooseRepository {
  /**
   * Constructor for TvshowsRepository.
   *
   * @param {TvshowModel} model - The TV show model class.
   */
  constructor (model = TvshowModel) {
    super(model)
  }
}
