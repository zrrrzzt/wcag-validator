var request = require('request');

function mkReqOpts(opts){
  var newOpts = {
    uri: 'http://achecker.ca/checkacc.php',
    qs: {
      uri:opts.uri,
      id:opts.id,
      output:opts.output || 'html',
      guide: opts.guide || 'WCAG2-AA',
      offset: opts.offset || 0
    }
  }

  return newOpts;
}

module.exports = function(opts, callback){

  if(!opts.uri || !opts.id){
    return callback(new Error('Missing required params.'), null);
  }

  var reqOpts = mkReqOpts(opts);

  request(reqOpts, function(error, response, body){
    if(error) {
      return callback(error, null);
    }
    return callback(null, body);
  });
}