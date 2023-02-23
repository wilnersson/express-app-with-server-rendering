/**
 * Service that supplies basic operations for Movies.
 *
 * @author Henrik Wilnersson <hw222nq@student.lnu.se>
 */

import { MoviesRepository } from '../repositories/MoviesRepository.js'

/**
 * Class for the Movies service.
 */
export class MoviesService {
  #repository

  /**
   * Constructor for MoviesService.
   *
   * @param {MoviesRepository} repository - Repository for the service to use.
   */
  constructor (repository = new MoviesRepository()) {
    this.#repository = repository
  }

  /**
   * Fetches all Movies.
   *
   * @returns {Promise<object>} - A promise that resolves to an array of Movie objects.
   */
  async get () {
    return this.#repository.get()
  }

  /**
   * Inserts a new document.
   *
   * @param {object} movieData - Valid movie data.
   * @returns {Promise<object>} - A promise that resolves to the newly inserted movie document.
   */
  async insert (movieData) {
    return this.#repository.insert(movieData)
  }
}
