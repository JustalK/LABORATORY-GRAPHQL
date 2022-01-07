const { ApolloError } = require('apollo-server-errors')

/**
 * The DocumentNotFound object which means a document has not been found
 * @typedef {Object} DocumentNotFound
 * @property {string} message The message of the error
 * @property {Object} extentions The informations relative to the error
 */

class AggregateError extends ApolloError {
  constructor (location, meta, message = 'Unexpected Error') {
    super(`[${location}] ${message}`)
    this.extensions = {
      code: 'MONGO_AGGREGATE_ERROR',
      meta
    }
  }
}

module.exports = { AggregateError }
