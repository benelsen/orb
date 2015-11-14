import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import matrixMultiplication from './../../lib/vector/matrixMultiplication'

experiment('orb.vector.matrixMultiplication', function () {

  test('should correctly multiply two 3x3 matrices', function (done) {
    var m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
      m2 = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    var r1 = matrixMultiplication(m1, m2)

    expect( r1 ).to.deep.equal([
      24,  30,  36,
      51,  66,  81,
      78, 102, 126,
    ])
    done()
  })

  test('should correctly multiply a 3x3 and a 3x1 matrix', function (done) {
    var m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
      m2 = [0, 1, 2]

    var r2 = matrixMultiplication(m1, m2)

    expect( r2 ).to.deep.equal([
      8,
      17,
      26,
    ])
    done()
  })

})

