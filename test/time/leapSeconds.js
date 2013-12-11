var should = require('should');

var orb = require('./../../');

describe('orb.time.leapSeconds', function() {

  it('should return correct leap seconds for date', function() {

    orb.time.leapSeconds( new Date('1972-06-30T23:59:59.999Z') ).should.equal(10);
    orb.time.leapSeconds( new Date('1972-07-01T00:00:00.000Z') ).should.equal(11);

    orb.time.leapSeconds( new Date('2012-06-30T23:59:59.999Z') ).should.equal(34);
    orb.time.leapSeconds( new Date('2012-07-01T00:00:00.000Z') ).should.equal(35);

  });

});
