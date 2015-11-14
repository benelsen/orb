import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {sphericalToCartesian, cartesianToSpherical} from './../../lib/transformations/spherical'

var testLocation = {
  x:  6219769.945228009,
  y:   624058.577901393,
  z: -1267140.2095092193,
  λ:  0.1,
  φ: -0.2,
  r:  6378137.0,
}

experiment('orb.transformations.sphericalToCartesian', function () {
  test('should convert to cartesian coordinates', function (done) {
    var cartesian = sphericalToCartesian([testLocation.λ, testLocation.φ, testLocation.r])
    expect( cartesian[0] ).to.be.about(testLocation.x, 1e-6)
    expect( cartesian[1] ).to.be.about(testLocation.y, 1e-6)
    expect( cartesian[2] ).to.be.about(testLocation.z, 1e-6)
    done()
  })
})

experiment('orb.transformations.cartesianToSpherical', function () {
  test('should convert to spherical coordinates', function (done) {
    var spherical = cartesianToSpherical([testLocation.x, testLocation.y, testLocation.z])
    expect( spherical[0] ).to.be.about(testLocation.λ, 1e-12)
    expect( spherical[1] ).to.be.about(testLocation.φ, 1e-12)
    expect( spherical[2] ).to.be.about(testLocation.r, 1e-6)
    done()
  })
})
