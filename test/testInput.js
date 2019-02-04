const tap = require('tap')
const wcag = require('../index')

tap.test('It returns error if param uri is not supplied', async test => {
  const options = {
    id: '12345'
  }
  const expectedErrorMessage = 'Missing required param: uri'
  try {
    const data = await wcag(options)
    console.log(data)
  } catch (error) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  }
})

tap.test('It returns error if param uri contains invalid url', async test => {
  const options = {
    id: '12345',
    uri: 'pysje'
  }
  const expectedErrorMessage = 'Invalid url'
  try {
    const data = await wcag(options)
    console.log(data)
  } catch (error) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  }
})

tap.test('It returns error if param id is not supplied', async test => {
  const options = {
    uri: 'https://github.com/zrrrzzt'
  }
  const expectedErrorMessage = 'Missing required param: id'
  try {
    const data = await wcag(options)
    console.log(data)
  } catch (error) {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  }
})
