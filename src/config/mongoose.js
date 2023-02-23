import mongoose from 'mongoose'

/**
 * Establishes a connection to the DB.
 *
 * @param {string} connectionString - Connection string to the MongoDB.
 * @returns {Promise} - Resolves to a connection or error.
 */
export const dbConnection = async (connectionString) => {
  const { connection } = mongoose

  connection.on('connected', () => console.log('Connection to DB established.'))
  connection.on('error', (error) => console.log('MongoDB error: ' + error))
  connection.on('disconnected', () => console.log('Connection to DB terminated.'))

  process.on('SIGINT', () => {
    connection.close(() => {
      console.log('Connection to DB terminated due to application exit.')
      process.exit(0)
    })
  })

  // https://mongoosejs.com/docs/guide.html#strictQuery
  mongoose.set('strictQuery', false)

  return mongoose.connect(connectionString)
}
