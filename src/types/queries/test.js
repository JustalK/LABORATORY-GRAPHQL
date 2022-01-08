'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  union TypeTestOrNull = Test | Void

  extend type Query {
    """
    Return the test
    """
    get_tests: Result! @isTest
    """
    Return the test by id
    """
    get_test_by_id(
      "The id of the test"
      id: String
    ): Test! @isTest

    """
    Return a random result (test by id or null)
    """
    random_get_by_id(
      "The id of the test"
      id: String
    ): TypeTestOrNull! @isTest
  }
`
