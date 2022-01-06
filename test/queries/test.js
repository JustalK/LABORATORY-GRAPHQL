'use strict'

require('module-alias/register')
const m_utils = require('@test/libs/utils')

module.exports = {
  get_tests: async () => {
    return m_utils.getter({
      query: `
        query {
          get_tests {
            result {
              ... on Test {
                _id
                value_number
                value_string
                value_boolean
              }
            }
            info {
              total
            }
          }
        }`
    })
  },
  get_test_by_id: async (id) => {
    return m_utils.getter({
      query: `
        query {
          get_test_by_id(id: "${id}") {
            _id
            value_number
            value_string
            value_boolean
          }
        }`
    })
  }
}
