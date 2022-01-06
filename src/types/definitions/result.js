'use strict'

const { gql } = require('apollo-server-express')

/**
 * The test object
 * @typedef {Object} Test
 * @property {integer} result Simple Integer Test
 * @property {boolean} value_string Simple String Test
 * @property {boolean} value_boolean Simple Boolean Test
 */

module.exports = gql`
  union TypeResult = Test
  """
  The result of the count for user
  """
  type Result {
    """
    The result of the call
    """
    result: [TypeResult]!
    """
    The result of the call
    """
    info: Info!
  }

  """
  The information of the call
  """
  type Info {
    """
    The total of result
    """
    total: Int!
  }
`
