var wcag = require('../index')
  , assert = require('assert')
  ;

describe('wcag - inputs', function(){

  it('Should throw if uri is not supplied', function(done){
    var opts = {'id':'12345'};
    wcag(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: uri/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

  it('Should throw if uri is not supplied', function(done){
    var opts = {'uri':'https://github.com/zrrrzzt'};
    wcag(opts, function(err, data){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: id/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

});