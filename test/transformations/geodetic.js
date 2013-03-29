var should = require('should');

var orb = require('./../../');

var testLocation = {
  x:  6220786.847952958,
  y:   624160.6085028435,
  z: -1258863.5418955733,
  L:  0.1,
  B: -0.2,
  h:  200.0
}

describe('orb.transformations.geodeticToCartesian', function() {
  it('should convert to cartesian coordinates', function() {
    var cartesian = orb.transformations.geodeticToCartesian(testLocation.L, testLocation.B, testLocation.h);
    cartesian[0].should.be.approximately(testLocation.x, 1e-4);
    cartesian[1].should.be.approximately(testLocation.y, 1e-4);
    cartesian[2].should.be.approximately(testLocation.z, 1e-4);
  })
});

describe('orb.transformations.cartesianToGeodetic', function() {
  it('should convert to geodetic coordinates', function() {
    var geodetic = orb.transformations.cartesianToGeodetic(testLocation.x, testLocation.y, testLocation.z);
    geodetic[0].should.be.approximately(testLocation.L, 1e-12);
    geodetic[1].should.be.approximately(testLocation.B, 1e-12);
    geodetic[2].should.be.approximately(testLocation.h, 1e-4);
  })
});
