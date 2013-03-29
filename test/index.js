var should = require('should');

var orb = require('./../');

describe('orb', function() {

  it('should exist', function() {
    should.exist(orb);
  });

  it('should be a object', function() {
    orb.should.be.a('object');
  });

});
