var should = require('should');

var orb = require('./../../');

describe('orb.functions.era', function() {

  it('should return the ERA after 0 days', function() {
    orb.functions.era(0.0).should.be.exactly(4.894961212823756);
  });

  it('should return the ERA after 1000 days', function() {
    orb.functions.era(1000.0).should.be.exactly(6305.282447967655);
  });

});
