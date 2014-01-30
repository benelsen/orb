var should = require('should');

var orb = require('./../../');

describe('orb.time.dateToJD', function() {

  it('should convert a Date to JD', function() {

    orb.time.dateToJD( new Date( Date.UTC(2014, 0, 30, 0, 0, 0) ) ).should.be.approximately(2456687.500000, 10-6);

    orb.time.dateToJD( new Date( Date.UTC(2014, 0, 30, 22, 56, 35.1) ) ).should.be.approximately(2456688.455962, 10-6);

  });

  it('should convert an Array to JD', function() {

    orb.time.dateToJD( [2014, 1, 30, 0, 0, 0] ).should.be.approximately(2456687.500000, 10-6);

    orb.time.dateToJD( [2014, 1, 30, 22, 56, 35.1] ).should.be.approximately(2456688.455962, 10-6);

  });

});
