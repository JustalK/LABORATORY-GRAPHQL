/**
* The resolver for managing the result object type
* @module resolvers/config
*/
'use strict'

module.exports = {
  /**
  * Process the result node
  * @return {Object} The result with the information wanted
  **/
  __resolveType (obj, context, info) {
    return 'Test'
  }
}
