var should = require('should');

var orb = require('./../../');

describe('orb.time.JDtoMJD', function() {
  it('should convert JD to MJD', function() {
    orb.time.JDtoMJD(2456380.63071).should.be.approximately(56380.13071, 10-6);
  });
});

describe('orb.time.MJDtoJD', function() {
  it('should convert MJD to JD', function() {
    orb.time.MJDtoJD(56380.13071).should.be.approximately(2456380.63071, 10-6);
  });
});

describe('orb.time.TAItoTT', function() {
  it('should convert TAI to TT', function() {
    orb.time.TAItoTT(0).should.equal(32.184);
  });
});

describe('orb.time.TTtoTAI', function() {
  it('should convert TT to TAI', function() {
    orb.time.TTtoTAI(0).should.equal(-32.184);
  });
});

describe('orb.time.TAItoUTC', function() {
  it('should convert TAI to UTC', function() {
    orb.time.TAItoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 )
      .should.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 35.000);
  });
});

describe('orb.time.UTCtoTAI', function() {
  it('should convert UTC to TAI', function() {
    orb.time.UTCtoTAI( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 )
      .should.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 35.000);
  });
});

describe('orb.time.TAItoGPS', function() {
  it('should convert TAI to GPS', function() {
    orb.time.TAItoGPS(0).should.equal(-19.000);
  });
});

describe('orb.time.GPStoTAI', function() {
  it('should convert GPS to TAI', function() {
    orb.time.GPStoTAI(0).should.equal(19.000);
  });
});

describe('orb.time.UTCtoGPS', function() {
  it('should convert UTC to GPS', function() {
    orb.time.UTCtoGPS( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 )
      .should.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 16.000);
  });
});

describe('orb.time.GPStoUTC', function() {
  it('should convert GPS to UTC', function() {
    orb.time.GPStoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 )
      .should.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 16.000);
  });
});
