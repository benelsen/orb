import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {inertialToFixed, fixedToInertial} from './../../lib/transformations/inertialToFixed'

experiment('orb.transformations.inertialToFixed', () => {
  const x1 = [
    1, 0, 0.2
  ]

  const ω = 2 * Math.PI

  test('should be rotated pi/2 after 1/4 second', (done) => {
    const fixed = inertialToFixed(x1, 0.25 * ω, 3)
    expect(fixed[0]).to.be.about(0, 1e-15)
    expect(fixed[1]).to.be.about(-1, 1e-15)
    expect(fixed[2]).to.be.about(0.2, 1e-15)

    done()
  })

  test('should be in same position after 1 second', (done) => {
    const fixed = inertialToFixed(x1, 1 * ω, 3)
    expect(fixed[0]).to.be.about(1, 1e-15)
    expect(fixed[1]).to.be.about(0, 1e-15)
    expect(fixed[2]).to.be.about(0.2, 1e-15)

    done()
  })
})

experiment('orb.transformations.fixedToInertial', () => {
  const x1 = [
    1, 0, 0.2
  ]

  const ω = 2 * Math.PI

  test('should be rotated -pi/2 after 1/4 second', (done) => {
    const fixed = fixedToInertial(x1, 0.25 * ω, 3)
    expect(fixed[0]).to.be.about(0, 1e-15)
    expect(fixed[1]).to.be.about(1, 1e-15)
    expect(fixed[2]).to.be.about(0.2, 1e-15)

    done()
  })

  test('should be in same position after 1 second', (done) => {
    const fixed = fixedToInertial(x1, 1 * ω, 3)
    expect(fixed[0]).to.be.about(1, 1e-15)
    expect(fixed[1]).to.be.about(0, 1e-15)
    expect(fixed[2]).to.be.about(0.2, 1e-15)

    done()
  })
})
