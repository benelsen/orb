var should = require('should');

var orb = require('./../../');

describe('orb.time.JDtoMJD', function() {
  it('should convert JD to MJD', function() {
    orb.time.JDtoMJD(2456380.63071).should.be.approximately(56380.13071, 10-6);
  })
});

describe('orb.time.MJDtoJD', function() {
  it('should convert MJD to JD', function() {
    orb.time.MJDtoJD(56380.13071).should.be.approximately(2456380.63071, 10-6);
  })
});

describe('orb.time.TAItoTT', function() {
  it('should convert TAI to TT', function() {
    orb.time.TAItoTT(0).should.equal(32184);
  })
});

describe('orb.time.TTtoTAI', function() {
  it('should convert TT to TAI', function() {
    orb.time.TTtoTAI(0).should.equal(-32184);
  })
});

describe('orb.time.TAItoUTC', function() {
  it('should convert TAI to UTC', function() {
    orb.time.TAItoUTC(0).should.equal(-35000);
  })
});

describe('orb.time.UTCtoTAI', function() {
  it('should convert UTC to TAI', function() {
    orb.time.UTCtoTAI(0).should.equal(35000);
  })
});
