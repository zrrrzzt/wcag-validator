#!/usr/bin/env node
'use strict';

var fs = require('fs')
  , validator = require('./index')
  , pkg = require('./package.json')
  , query = process.argv[2]
  , argv = require('minimist')((process.argv.slice(2)))
  , opts = {}
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ wcag-validator --uri=<uri> --id=<id>');
  console.log('');
  console.log('Optional params');
  console.log('See http://achecker.ca/documentation/web_service_api.php for more');
  console.log('  $ wcag-validator --url=<url> --id=<id> --output=<output> --guide=<guide> --offset=<offset>');
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if(query.indexOf('http') !== -1) {
  opts.uri = argv._[0];
}

if(argv.uri){
  opts.uri = argv.uri;
}

if(argv.id){
  opts.id = argv.id;
}

if(argv.output){
  opts.output = argv.output;
}

if(argv.guide){
  opts.guide = argv.guide;
}

if(argv.offset){
  opts.offset = argv.offset;
}

validator(opts, function(err, data){
  if(err) throw err;
  console.log(data);
});