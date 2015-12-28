import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {deg2rad} from './../../lib/common/angular'
import keplerian from './../../lib/propagators/keplerian'

experiment('orb.propagators.keplerian', () => {

  test('should return the state vectors of a satellite after 900s', done => {

    const a = 6649e3
    const e = 0.002
    const i = deg2rad(97)
    const Ω = deg2rad(118)
    const ω = deg2rad(-250)
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

    const x = keplerian(a, e, i, Ω, ω, t, T0)
    expect( x[0][0] ).to.be.about(testPosition.x.x, 1e-5)
    expect( x[0][1] ).to.be.about(testPosition.x.y, 1e-5)
    expect( x[0][2] ).to.be.about(testPosition.x.z, 1e-5)
    expect( x[1][0] ).to.be.about(testPosition.v.x, 1e-7)
    expect( x[1][1] ).to.be.about(testPosition.v.y, 1e-7)
    expect( x[1][2] ).to.be.about(testPosition.v.z, 1e-7)

    done()
  })

  test('should return the state vectors of earth after 1yr', done => {

    const a = 149598261150
    const e = 0.01671123
    const i = deg2rad(7.155)
    const Ω = deg2rad(348.73936)
    const ω = deg2rad(114.20783)
    const T0 = 0
    const t = 1*365.256363004*86400

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

    const x = keplerian(a, e, i, Ω, ω, t, T0, 0, m1, m2)
    expect( x[0][0] ).to.be.about(testPosition.x.x, 1e-3)
    expect( x[0][1] ).to.be.about(testPosition.x.y, 1e-3)
    expect( x[0][2] ).to.be.about(testPosition.x.z, 1e-3)
    expect( x[1][0] ).to.be.about(testPosition.v.x, 1e-3)
    expect( x[1][1] ).to.be.about(testPosition.v.y, 1e-3)
    expect( x[1][2] ).to.be.about(testPosition.v.z, 1e-3)

    done()
  })

})
