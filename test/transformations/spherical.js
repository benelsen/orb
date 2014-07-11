var should = require('should');

var orb = require('./../../');

var testLocation = {
  x:  6219769.945228009,
  y:   624058.577901393,
  z: -1267140.2095092193,
  λ:  0.1,
  φ: -0.2,
  r:  6378137.0
};

describe('orb.transformations.sphericalToCartesian', function() {
  it('should convert to cartesian coordinates', function() {
    var cartesian = orb.transformations.sphericalToCartesian([testLocation.λ, testLocation.φ, testLocation.r]);
    cartesian[0].should.be.approximately(testLocation.x, 1e-6);
    cartesian[1].should.be.approximately(testLocation.y, 1e-6);
    cartesian[2].should.be.approximately(testLocation.z, 1e-6);
  });
});

describe('orb.transformations.cartesianToSpherical', function() {
  it('should convert to spherical coordinates', function() {
    var spherical = orb.transformations.cartesianToSpherical([testLocation.x, testLocation.y, testLocation.z]);
    spherical[0].should.be.approximately(testLocation.λ, 1e-12);
    spherical[1].should.be.approximately(testLocation.φ, 1e-12);
    spherical[2].should.be.approximately(testLocation.r, 1e-6);
  });
});
