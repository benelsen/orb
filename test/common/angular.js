var should = require('should');

var orb = require('./../../');

describe('orb.common.deg2rad', function() {

  var desiredAccuracy = 1e-18;

  it('should convert 0° to 0 rad', function() {
    orb.common.deg2rad(0).should.equal(0);
  });

  it('should convert 45° to π/4 rad', function() {
    orb.common.deg2rad(45).should.be.approximately(Math.PI/4, desiredAccuracy);
  });

  it('should convert -540° to -3π rad', function() {
    orb.common.deg2rad(-540).should.be.approximately(-3*Math.PI, desiredAccuracy);
  });

});

describe('orb.common.rad2deg', function() {

  var desiredAccuracy = 1e-15;

  it('should convert 0 rad to 0°', function() {
    orb.common.rad2deg(0).should.equal(0);
  });

  it('should convert π/4 rad to 45°', function() {
    orb.common.rad2deg(Math.PI/4).should.be.approximately(45, desiredAccuracy);
  });

  it('should convert -3π rad to -540°', function() {
    orb.common.rad2deg(-3*Math.PI).should.be.approximately(-540, desiredAccuracy);
  });

});
