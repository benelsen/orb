import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import * as time from './../../lib/time'

experiment('orb.time.JDtoMJD', () => {
  test('should convert JD to MJD', done => {
    expect( time.JDtoMJD(2456380.63071) ).to.be.about(56380.13071, 10e-6)
    done()
  })
})

experiment('orb.time.MJDtoJD', () => {
  test('should convert MJD to JD', done => {
    expect( time.MJDtoJD(56380.13071) ).to.be.about(2456380.63071, 10e-6)
    done()
  })
})

experiment('orb.time.TAItoTT', () => {
  test('should convert TAI to TT', done => {
    expect( time.TAItoTT(0) ).to.equal(32.184)
    done()
  })
})

experiment('orb.time.TTtoTAI', () => {
  test('should convert TT to TAI', done => {
    expect( time.TTtoTAI(0) ).to.equal(-32.184)
    done()
  })
})

experiment('orb.time.TAItoUTC', () => {
  test('should convert TAI to UTC', done => {
    expect( time.TAItoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 35.000)
    done()
  })
})

experiment('orb.time.UTCtoTAI', () => {
  test('should convert UTC to TAI', done => {
    expect( time.UTCtoTAI( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 35.000)
    done()
  })
})

experiment('orb.time.TAItoGPS', () => {
  test('should convert TAI to GPS', done => {
    expect( time.TAItoGPS(0) ).to.equal(-19.000)
    done()
  })
})

experiment('orb.time.GPStoTAI', () => {
  test('should convert GPS to TAI', done => {
    expect( time.GPStoTAI(0) ).to.equal(19.000)
    done()
  })
})

experiment('orb.time.UTCtoGPS', () => {
  test('should convert UTC to GPS', done => {
    expect( time.UTCtoGPS( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 + 16.000)
    done()
  })
})

experiment('orb.time.GPStoUTC', () => {
  test('should convert GPS to UTC', done => {
    expect( time.GPStoUTC( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 ) ).to.equal( new Date('2014-07-11T00:00:00.000Z').getTime() * 1e-3 - 16.000)
    done()
  })
})
