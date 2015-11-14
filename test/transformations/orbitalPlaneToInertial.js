import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {orbitalPlaneToInertial} from './../../lib/transformations/orbitalPlaneToInertial'

var Ω = 118,
  ω = -250,
  i = 97

var x_o = [
  100.0,
  500.0,
  0.0,
]

var x = [
  -284.8506,
  414.7774,
  82.5825,
]

experiment('orb.transformations.orbitalPlaneToInertial', function () {
  test('should transform vector from orbital plance to ECI', function (done) {
    var eci = orbitalPlaneToInertial(x_o, Ω, ω, i)
    expect( eci[0] ).to.be.about(x[0], 1e-4)
    expect( eci[1] ).to.be.about(x[1], 1e-4)
    expect( eci[2] ).to.be.about(x[2], 1e-4)
    done()
  })
})


