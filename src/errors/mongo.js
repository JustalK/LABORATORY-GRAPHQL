const { ApolloError } = require('apollo-server-errors')

/**
 * The AggregateError object which means a mongo request has crashed
 * @typedef {Object} AggregateError
 * @property {string} location The path where the error happened
 * @property {string} meta The meta of the error
 * @property {string} message The message of the error
 * @property {Object} extentions The informations relative to the error
 */

class AggregateError extends ApolloError {
  constructor (location, meta, message = 'Error Unknown') {
    super(`[${location}] \n${message}`)
    this.extensions = {
      code: 'MONGO_AGGREGATE_ERROR',
      meta
    }
  }
}

module.exports = { AggregateError }
