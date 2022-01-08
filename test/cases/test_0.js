'use strict'

const queries_test = require('@test/queries/test')
const mutations_test = require('@test/mutations/test')

const cases = (test) => {
  test('[TEST] A test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.result.length, 1)
    t.is(response.get_tests.info.total, 1)
  })

  test.only('[TEST] Test by id or null', async t => {
    const response = await queries_test.random_get_by_id('60b8b8b2a56e2735c4465857')
    console.log(response)
    t.is(response.get_tests.random_get_by_id.value_number, 10)
  })

  test('[TEST] Another test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.result.length, 1)
  })

  test('[TEST] Again another test getting the actual element in the seed in another file (1 total)', async t => {
    const response = await queries_test.get_tests()
    t.is(response.get_tests.result.length, 1)
  })

  test('[TEST] A test adding one element in another file (2 total)', async t => {
    await mutations_test.add_test('String in a file', 568, true)
    const response_after = await queries_test.get_tests()
    t.is(response_after.get_tests.result.length, 2)
  })
}

module.exports = {
  cases
}
