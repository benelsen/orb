import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import time from './../../lib/time'

experiment('orb.time.JDtoMJD', function () {
  test('should convert JD to MJD', function (done) {
    expect( time.JDtoMJD(2456380.63071) ).to.be.about(56380.13071, 10e-6)
    done()
  })
})

experiment('orb.time.MJDtoJD', function () {
  test('should convert MJD to JD', function (done) {
    expect( time.MJDtoJD(56380.13071) ).to.be.about(2456380.63071, 10e-6)
    done()
  })
})

experiment('orb.time.TAItoTT', function () {
  test('should convert TAI to TT', function (done) {
    expect( time.TAItoTT(0) ).to.equal(32.184)
    done()
  })
})

experiment('orb.time.TTtoTAI', function () {
  test('should convert TT to TAI', function (done) {
    expect( time.TTtoTAI(0) ).to.equal(-32.184)
    done()
  })
})

experiment('orb.time.TAItoUTC', function () {
  test('should convert TAI to UTC', function (done) {
    expect( time.TAItoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 35.000)
    done()
  })
})

experiment('orb.time.UTCtoTAI', function () {
  test('should convert UTC to TAI', function (done) {
    expect( time.UTCtoTAI( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 35.000)
    done()
  })
})

experiment('orb.time.TAItoGPS', function () {
  test('should convert TAI to GPS', function (done) {
    expect( time.TAItoGPS(0) ).to.equal(-19.000)
    done()
  })
})

experiment('orb.time.GPStoTAI', function () {
  test('should convert GPS to TAI', function (done) {
    expect( time.GPStoTAI(0) ).to.equal(19.000)
    done()
  })
})

experiment('orb.time.UTCtoGPS', function () {
  test('should convert UTC to GPS', function (done) {
    expect( time.UTCtoGPS( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 16.000)
    done()
  })
})

experiment('orb.time.GPStoUTC', function () {
  test('should convert GPS to UTC', function (done) {
    expect( time.GPStoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 16.000)
    done()
  })
})
