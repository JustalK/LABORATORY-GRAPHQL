/**
* Module for managing the dbs for test
* @module dbs/test
*/
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('@src/models/' + filename)

const { AggregateError } = require('@src/errors/mongo')
const { DocumentNotFound } = require('@src/errors/documentNotFound')

module.exports = {
  /**
  * Call mongodb for getting every document in the collection
  * @return {[Test]} The tests or null
  **/
  get_all: async () => {
    const rsl = await model.aggregate([{
      $facet: {
        info: [
          {
            $count: 'total'
          }
        ],
        result: [
          { $match: { _id: { $exists: true } } }
        ]
      }
    },
    {
      $addFields: {
        info: {
          $arrayElemAt: ['$info', 0]
        }
      }
    }], (error) => {
      if (error) {
        throw new AggregateError(__filename, error)
      }
    })

    return rsl ? rsl[0] : null
  },
  /**
  * Call mongodb for getting one document by id or something else
  * @return {Test} The test id or null
  **/
  random_get_by_id: async (_id) => {
    const test = await model.findOne({ _id })

    if (!test) {
      throw new DocumentNotFound(__filename, `There is no document with the id (${_id}).`)
    }

    return test
  },
  /**
  * Call mongodb for getting one document by id in the collection
  * @return {Test} The test id or null
  **/
  get_by_id: (_id) => {
    return model.find({ _id })
  },
  /**
  * Call mongodb for adding an user to the database
  * @param {Test} test The test to add to the database
  * @return {Test} The test added with the id
  **/
  insert: (test) => {
    return model.create(test)
  }
}
