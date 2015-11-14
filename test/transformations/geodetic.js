import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {geodeticToCartesian, cartesianToGeodetic} from './../../lib/transformations/geodetic'

var testLocation = {
  x:  6220786.460040262,
  y:   624160.5695817503,
  z: -1258863.440618736,
  L:  0.1,
  B: -0.2,
  h:  200.0,
}

experiment('orb.transformations.geodeticToCartesian', function () {
  test('should convert to cartesian coordinates', function (done) {
    var cartesian = geodeticToCartesian([testLocation.L, testLocation.B, testLocation.h])
    expect( cartesian[0] ).to.be.about(testLocation.x, 1e-6)
    expect( cartesian[1] ).to.be.about(testLocation.y, 1e-6)
    expect( cartesian[2] ).to.be.about(testLocation.z, 1e-6)
    done()
  })
})

experiment('orb.transformations.cartesianToGeodetic', function () {
  test('should convert to geodetic coordinates', function (done) {
    var geodetic = cartesianToGeodetic([testLocation.x, testLocation.y, testLocation.z])
    expect( geodetic[0] ).to.be.about(testLocation.L, 1e-8)
    expect( geodetic[1] ).to.be.about(testLocation.B, 1e-8)
    expect( geodetic[2] ).to.be.about(testLocation.h, 1e-8)
    done()
  })
})
