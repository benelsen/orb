import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {ellipsoidalToCartesian, cartesianToEllipsoidal} from './../../lib/transformations/ellipsoidal'

var testLocation = {
  x:  6219769.555159878,
  y:   624058.538764035,
  z: -1262891.637653489,
  L:  0.1,
  β: -0.2,
}

experiment('orb.transformations.ellipsoidalToCartesian', function () {
  test('should convert to cartesian coordinates', function (done) {
    var cartesian = ellipsoidalToCartesian([testLocation.L, testLocation.β])
    expect( cartesian[0] ).to.be.about(testLocation.x, 1e-6)
    expect( cartesian[1] ).to.be.about(testLocation.y, 1e-6)
    expect( cartesian[2] ).to.be.about(testLocation.z, 1e-6)
    done()
  })
})

experiment('orb.transformations.cartesianToEllipsoidal', function () {
  test('should convert to ellipsoidal coordinates', function (done) {
    var ellipsoidal = cartesianToEllipsoidal([testLocation.x, testLocation.y, testLocation.z])
    expect( ellipsoidal[0] ).to.be.about(testLocation.L, 1e-12)
    expect( ellipsoidal[1] ).to.be.about(testLocation.β, 1e-12)
    done()
  })
})
