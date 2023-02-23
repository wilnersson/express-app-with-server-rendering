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
   * Creates a new document and inserts it to the DB.
   *
   * @param {object} document - Document to insert.
   * @returns {object} - The newly inserted document.
   */
  async insert (document) {
    const insertedDocument = await this.#model.create(document)
    return insertedDocument
  }
}
