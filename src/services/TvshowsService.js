import { TvshowsRepository } from '../repositories/TvshowsRepository.js'
import { AbstractMongooseService } from './AbstractMongooseService.js'

/**
 * Class for TvshowsService.
 */
export class TvshowsService extends AbstractMongooseService {
  /**
   * Constructor for TvshowsService.
   *
   * @param {TvshowsRepository} repository - Repository for the service to use.
   */
  constructor (repository = new TvshowsRepository()) {
    super(repository)
  }
}
