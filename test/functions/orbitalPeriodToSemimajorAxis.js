import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {orbitalPeriodToSemimajorAxis, semimajorAxisToOrbitalPeriod} from './../../lib/functions/orbitalPeriodToSemimajorAxis'

experiment('orb.functions.orbitalPeriodToSemimajorAxis', function() {

  test('should return the semi-major axis with default parameters', function (done) {
    const T1 = 3 * 60**2
    const a1 = 10560273.918564
    expect( orbitalPeriodToSemimajorAxis(T1) ).to.be.about(a1, 1e-6)
    done()
  })

  test('should return', function (done) {
    const T1 = 60**2
    const m1 = 1e3
    const a1 = 0.279816735224899
    expect( orbitalPeriodToSemimajorAxis(T1, m1) ).to.be.about(a1, 1e-15)
    done()
  })

  test('should return', function (done) {
    const T1 = 27.321582 * 24 * 60**2
    const m1 = 5.9721986e24
    const m2 = 7.342e22
    const a1 = 384738212.727196
    expect( orbitalPeriodToSemimajorAxis(T1, m1, m2) ).to.be.about(a1, 1e-6)
    done()
  })

})

experiment('orb.functions.semimajorAxisToOrbitalPeriod', function() {

  test('should return', function (done) {
    const T1 = 3 * 60**2
    const a1 = 10560273.918564
    expect( semimajorAxisToOrbitalPeriod(a1) ).to.be.about(T1, 1e-9)
    done()
  })

  test('should return', function (done) {
    const T1 = 60**2
    const m1 = 1e3
    const a1 = 0.279816735224899
    expect( semimajorAxisToOrbitalPeriod(a1, m1) ).to.be.about(T1, 1e-11)
    done()
  })

  test('should return', function (done) {
    const T1 = 27.321582 * 24 * 60**2
    const m1 = 5.9721986e24
    const m2 = 7.342e22
    const a1 = 384738212.727196
    expect( semimajorAxisToOrbitalPeriod(a1, m1, m2) ).to.be.about(T1, 1e-8)
    done()
  })

})
