'use strict'

const { gql } = require('apollo-server-express')

module.exports = gql`
  extend type Query {
    """
    Return the test
    """
    get_tests: [Result]! @isTest
    """
    Return the test by id
    """
    get_test_by_id(
      "The id of the test"
      id: String
    ): Test! @isTest
  }
`
