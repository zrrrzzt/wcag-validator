#!/usr/bin/env node
'use strict'

var validator = require('./index')
var pkg = require('./package.json')
var query = process.argv[2]
var argv = require('minimist')((process.argv.slice(2)))
var opts = {}

function printHelp () {
  var msg = '$ wcag-validator <uri> --id=<id> --output=<output> --guide=<guide> --offset=<offset>'
  console.log(pkg.description)
  console.log('')
  console.log('Usage:')
  console.log('  $ wcag-validator <uri> --id=<id>')
  console.log('')
  console.log('Optional params')
  console.log('See http://achecker.ca/documentation/web_service_api.php for more')
  console.log(msg)
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp()
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (query.indexOf('http') !== -1) {
  opts.uri = argv._[0]
}

if (argv.uri) {
  opts.uri = argv.uri
}

if (argv.id) {
  opts.id = argv.id
}

if (argv.output) {
  opts.output = argv.output
}

if (argv.guide) {
  opts.guide = argv.guide
}

if (argv.offset) {
  opts.offset = argv.offset
}

validator(opts, function (err, data) {
  if (err) {
    throw err
  }
  console.log(data)
})
