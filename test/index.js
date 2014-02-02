var should = require('should');

var orb = require('./../');

describe('orb', function() {

  it('should exist', function() {
    should.exist(orb);
  });

  it('should be a object', function() {
    orb.should.be.an.instanceOf(Object);
  });

  it('should have a version', function() {
    orb.should.have.property('version');
  });

});
