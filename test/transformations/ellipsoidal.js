var should = require('should');

var orb = require('./../../');

var testLocation = {
  x:  6219769.555159878,
  y:   624058.538764035,
  z: -1262891.637653489,
  L:  0.1,
  β: -0.2
};

describe('orb.transformations.ellipsoidalToCartesian', function() {
  it('should convert to cartesian coordinates', function() {
    var cartesian = orb.transformations.ellipsoidalToCartesian([testLocation.L, testLocation.β]);
    cartesian[0].should.be.approximately(testLocation.x, 1e-6);
    cartesian[1].should.be.approximately(testLocation.y, 1e-6);
    cartesian[2].should.be.approximately(testLocation.z, 1e-6);
  });
});

describe('orb.transformations.cartesianToEllipsoidal', function() {
  it('should convert to ellipsoidal coordinates', function() {
    var ellipsoidal = orb.transformations.cartesianToEllipsoidal([testLocation.x, testLocation.y, testLocation.z]);
    ellipsoidal[0].should.be.approximately(testLocation.L, 1e-12);
    ellipsoidal[1].should.be.approximately(testLocation.β, 1e-12);
  });
});
