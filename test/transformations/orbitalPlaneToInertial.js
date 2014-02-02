var should = require('should');

var orb = require('./../../');

var Ω = 118,
    ω = -250,
    i = 97;

var x_o = [
  100.0,
  500.0,
    0.0
];

var x = [
  -284.8506,
   414.7774,
    82.5825
];

describe('orb.transformations.orbitalPlaneToInertial', function() {
  it('should transform vector from orbital plance to ECI', function() {
    var eci = orb.transformations.orbitalPlaneToInertial(x_o, Ω, ω, i);
    eci[0].should.be.approximately(x[0], 1e-4);
    eci[1].should.be.approximately(x[1], 1e-4);
    eci[2].should.be.approximately(x[2], 1e-4);
  });
});


