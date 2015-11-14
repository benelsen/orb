import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import keplerEquation from './../../lib/functions/keplerEquation'

const e1 = 0.002
const e2 = 0.9
const M = 1.048037758440223
const E1 = 1.049772378330563
const E2 = 1.899773668961998

experiment('orb.functions.keplerEquation', function() {

  test('should return the eccentric anomaly for low eccentricity', function (done) {
    expect( keplerEquation(e1, M) ).to.be.about(E1, 1e-12)
    done()
  })

  test('should return the eccentric anomaly for high eccentricity', function (done) {
    expect( keplerEquation(e2, M) ).to.be.about(E2, 1e-12)
    done()
  })

})
