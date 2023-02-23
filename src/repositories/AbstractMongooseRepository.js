import mongoose from 'mongoose'

/**
 * Encapsulates a Mongoose repository and supplies basic operations.
 */
export class AbstractMongooseRepository {
  #model

  /**
   * Constructor for AbstractMongooseRepository.
   *
   * @param {mongoose.Model} model - A mongoose model.
   */
  constructor (model) {
    this.#model = model
  }

  /**
   * Gets and returns all documents from the DB.
   *
   * @returns {Promise<object>} - A promise that resolves to an array of documents.
   */
  async get () {
    return this.#model.find()
  }

  /**
   * Creates a new document and inserts it to the DB.
   *
   * @param {object} document - Document to insert.
   * @returns {Promise<object>} - A promise that resolves to the newly inserted document.
   */
  async insert (document) {
    return this.#model.create(document)
  }
}
