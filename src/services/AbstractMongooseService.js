import { AbstractMongooseRepository } from '../repositories/AbstractMongooseRepository.js'

/**
 * Class that encapsulates a basic Mongoose service.
 */
export class AbstractMongooseService {
  #repository

  /**
   * Constructor for AbstractMongooseService.
   *
   * @param {AbstractMongooseRepository} repository - Repository abstraction to use.
   */
  constructor (repository) {
    this.#repository = repository
  }

  /**
   * Fetches all documents.
   *
   * @returns {Promise<object[]>} - A promise that resolves to an array of objects.
   */
  async get () {
    return this.#repository.get()
  }

  /**
   * Inserts a new document.
   *
   * @param {object} data - Document data.
   * @returns {Promise<object>} - A promise that resolves to the newly inserted document.
   */
  async insert (data) {
    return this.#repository.insert(data)
  }
}
