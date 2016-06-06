/* eslint-disable no-multi-spaces */

import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import matrixMultiplication from './../../lib/vector/matrixMultiplication'

experiment('orb.vector.matrixMultiplication', () => {
  test('should correctly multiply two 3x3 matrices', (done) => {
    const m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const m2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    const r1 = matrixMultiplication(m1, m2)

    expect(r1).to.equal([
      24,  30,  36,
      51,  66,  81,
      78, 102, 126
    ])
    done()
  })

  test('should correctly multiply a 3x3 and a 3x1 matrix', (done) => {
    const m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const m2 = [0, 1, 2]

    const r2 = matrixMultiplication(m1, m2)

    expect(r2).to.equal([
      8,
      17,
      26
    ])
    done()
  })
})

