import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {deg2rad} from './../../lib/common/angular'
import stateToKepler from './../../lib/propagators/stateToKepler'

experiment('orb.propagators.stateToKepler', () => {

  test('should return the state vectors of a satellite after 900s', done => {

    const a = 6649e3
    const e = 0.002
    const i = deg2rad(97)
    const Ω = deg2rad(118)
    const ω = deg2rad(-250+360)
    const T0 = 0
    const t = 15*60

    const testPosition = {
      x: {
        x:  3194418.35653,
        y: -5715730.19269,
        z:  1116844.10036,
      },
      v: {
        x:  -199.07213470,
        y: -1607.83626052,
        z: -7579.15862735,
      },
    }

    const x = stateToKepler(
      [testPosition.x.x, testPosition.x.y, testPosition.x.z],
      [testPosition.v.x, testPosition.v.y, testPosition.v.z], t
    )

    expect( x[0] ).to.be.about(a, 1e-3)
    expect( x[1] ).to.be.about(e, 1e-5)
    expect( x[2] ).to.be.about(i, 1e-5)
    expect( x[3] ).to.be.about(Ω, 1e-5)
    expect( x[4] ).to.be.about(ω, 1e-5)
    expect( x[5] ).to.be.about(T0, 1e-5)

    done()
  })

  test('should return the state vectors of earth after 1yr', done => {

    const a = 149598261150
    const e = 0.01671123
    const i = deg2rad(7.155)
    const Ω = deg2rad(348.73936)
    const ω = deg2rad(114.20783)
    const T0 = 0
    const t = 365.256363004*86400

    const m1 = 1.988546944e30
    const m2 = 5.9725801308e24*1.0123000371

    const testPosition = {
      x: {
        x: -33158216645.818844,
        y: 142334785036.72403,
        z:  16710733601.488567,
      },
      v: {
        x: -29497.972100017116,
        y:  -6690.245698136594,
        z:  -1546.7484094314725,
      },
    }

    const x = stateToKepler(
      [testPosition.x.x, testPosition.x.y, testPosition.x.z],
      [testPosition.v.x, testPosition.v.y, testPosition.v.z], t, m1, m2
    )

    expect( x[0] ).to.be.about(a, 1e-3)
    expect( x[1] ).to.be.about(e, 1e-5)
    expect( x[2] ).to.be.about(i, 1e-5)
    expect( x[3] ).to.be.about(Ω-2*Math.PI, 1e-5)
    expect( x[4] ).to.be.about(ω, 1e-5)
    expect( x[5] - t ).to.be.about(T0, 1e+3)

    done()
  })

})
