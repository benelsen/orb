import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import dateToJD from './../../lib/time/dateToJD'

experiment('orb.time.dateToJD', () => {

  test('should convert a Date to JD', done => {

    expect( dateToJD( new Date( Date.UTC(2014, 0, 30, 0, 0, 0, 0) ) ) ).to.equal(2456687.500000)
    expect( dateToJD( new Date( Date.UTC(2014, 0, 30, 22, 56, 35, 100) ) ) ).to.equal(2456688.455961806)

    done()
  })

  test('should convert an Array to JD', done => {

    expect( dateToJD( [2014, 1, 30, 0, 0, 0, 0] ) ).to.equal(2456687.500000)
    expect( dateToJD( [2014, 1, 30, 22, 56, 35, 100] ) ).to.equal(2456688.455961806)

    done()
  })

})
