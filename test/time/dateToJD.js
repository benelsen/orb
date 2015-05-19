var should = require('should');

var orb = require('./../../');

describe('orb.time.dateToJD', function() {

  it('should convert a Date to JD', function() {

    orb.time.dateToJD( new Date( Date.UTC(2014, 0, 30, 0, 0, 0, 0) ) ).should.be.exactly(2456687.500000);

    orb.time.dateToJD( new Date( Date.UTC(2014, 0, 30, 22, 56, 35, 100) ) ).should.be.exactly(2456688.455961806);

  });

  it('should convert an Array to JD', function() {

    orb.time.dateToJD( [2014, 1, 30, 0, 0, 0, 0] ).should.be.exactly(2456687.500000);

    orb.time.dateToJD( [2014, 1, 30, 22, 56, 35, 100] ).should.be.exactly(2456688.455961806);

  });

});
