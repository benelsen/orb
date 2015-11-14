import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {deg2rad, rad2deg} from './../../lib/common/angular'

experiment('orb.common.deg2rad', function() {

  var desiredAccuracy = 1e-18

  test('should convert 0° to 0 rad', function(done) {
    expect( deg2rad(0) ).to.equal(0)
    done()
  })

  test('should convert 45° to π/4 rad', function(done) {
    expect( deg2rad(45) ).to.be.about(Math.PI/4, desiredAccuracy)
    done()
  })

  test('should convert -540° to -3π rad', function(done) {
    expect( deg2rad(-540) ).to.be.about(-3*Math.PI, desiredAccuracy)
    done()
  })

})

experiment('orb.common.rad2deg', function() {

  var desiredAccuracy = 1e-15

  test('should convert 0 rad to 0°', function(done) {
    expect( rad2deg(0) ).to.equal(0)
    done()
  })

  test('should convert π/4 rad to 45°', function(done) {
    expect( rad2deg(Math.PI/4) ).to.be.about(45, desiredAccuracy)
    done()
  })

  test('should convert -3π rad to -540°', function(done) {
    expect( rad2deg(-3*Math.PI) ).to.be.about(-540, desiredAccuracy)
    done()
  })

})
