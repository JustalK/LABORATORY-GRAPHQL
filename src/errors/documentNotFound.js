const { ApolloError } = require('apollo-server-errors')

/**
 * The DocumentNotFound object which means a document has not been found
 * @typedef {Object} DocumentNotFound
 * @property {string} location The path where the error happened
 * @property {string} meta The meta of the error
 * @property {string} message The message of the error
 * @property {Object} extentions The informations relative to the error
 */

class DocumentNotFound extends ApolloError {
  constructor (location, message = 'Error Unknown') {
    super(`[${location}] \n${message}`)
    this.extensions = {
      code: 'NOT_FOUND'
    }
  }
}

module.exports = { DocumentNotFound }
