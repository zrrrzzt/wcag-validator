'use strict'

const tap = require('tap')
const wcag = require('../index')

tap.test('It returns error if param uri is not supplied', test => {
  const options = {
    id: '12345'
  }
  const expectedErrorMessage = 'Missing required param: uri'
  wcag(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It returns error if param uri contains invalid url', test => {
  const options = {
    id: '12345',
    uri: 'pysje'
  }
  const expectedErrorMessage = 'Invalid url'
  wcag(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('It returns error if param id is not supplied', test => {
  const options = {
    uri: 'https://github.com/zrrrzzt'
  }
  const expectedErrorMessage = 'Missing required param: id'
  wcag(options, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
