/* eslint-disable no-multi-spaces, indent */

import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import mirrorMatrix from './../../lib/vector/mirrorMatrix'

experiment('orb.vector.mirrorMatrix', () => {
  test('should return a correct Q1 matrix', (done) => {
    const q1 = mirrorMatrix(1)

    expect(q1).to.equal([
      -1, 0, 0,
       0, 1, 0,
       0, 0, 1
    ])
    done()
  })

  test('should return a correct Q2 matrix', (done) => {
    const q2 = mirrorMatrix(2)

    expect(q2).to.equal([
      1,  0, 0,
      0, -1, 0,
      0,  0, 1
    ])
    done()
  })

  test('should return a correct Q3 matrix', (done) => {
    const q3 = mirrorMatrix(3)

    expect(q3).to.equal([
      1, 0,  0,
      0, 1,  0,
      0, 0, -1
    ])
    done()
  })
})
