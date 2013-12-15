var should = require('should');

var orb = require('./../../');

var e1 = 0.002,
    e2 = 0.9,
    M = 1.048037758440223,
    E1 = 1.049772378330563,
    E2 = 1.899773668961998;

describe('orb.position.keplerEquation', function() {

  it('should return the eccentric anomaly for low eccentricity', function() {
    orb.position.keplerEquation(e1, M).should.be.approximately(E1, 1e-12);
  });

  it('should return the eccentric anomaly for high eccentricity', function() {
    orb.position.keplerEquation(e2, M).should.be.approximately(E2, 1e-12);
  });

});
