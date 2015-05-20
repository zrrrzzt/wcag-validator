'use strict';

var request = require('request');
var validUrl = require('valid-url');

function mkReqOpts(opts) {
  return {
    uri: 'http://achecker.ca/checkacc.php',
    qs: {
      uri:opts.uri,
      id:opts.id,
      output:opts.output || 'html',
      guide: opts.guide || 'WCAG2-AA',
      offset: opts.offset || 0
    }
  };
}

module.exports = function(opts, callback) {

  if (!opts.uri) {
    return callback(new Error('Missing required param: uri'), null);
  }

  if (opts.uri && !validUrl.isWebUri(opts.uri)) {
    return callback(new Error('Invalid url'), null);
  }

  if (!opts.id) {
    return callback(new Error('Missing required param: id'), null);
  }

  var reqOpts = mkReqOpts(opts);

  request(reqOpts, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    return callback(null, body);
  });
};
