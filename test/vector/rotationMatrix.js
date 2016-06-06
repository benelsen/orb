/* eslint-disable no-multi-spaces, indent, space-in-parens */

import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import rotationMatrix from './../../lib/vector/rotationMatrix'

experiment('orb.vector.rotationMatrix', () => {
  test('should return correct values for Ri(0 + n∙2π)', (done) => {
    const r1 = rotationMatrix(0, 1)

    expect(r1).to.equal([
      1,  0,  0,
      0,  1,  0,
      0, -0,  1
    ])

    const r2 = rotationMatrix(2 * Math.PI, 2)

    expect(r2).to.equal([
      1,  0, -0,
      0,  1,  0,
      0,  0,  1
    ])

    const r3 = rotationMatrix(-4 * Math.PI, 3)

    expect(r3).to.equal([
       1, -0,  0,
       0,  1,  0,
       0,  0,  1
    ])
    done()
  })

  test('should return correct values for Ri(α)', (done) => {
    const r1 = rotationMatrix(Math.PI / 4, 1)

    expect(r1[0]).to.be.about(            1, 1e-15)
    expect(r1[1]).to.be.about(            0, 1e-15)
    expect(r1[2]).to.be.about(            0, 1e-15)
    expect(r1[3]).to.be.about(            0, 1e-15)
    expect(r1[4]).to.be.about( Math.SQRT1_2, 1e-15)
    expect(r1[5]).to.be.about( Math.SQRT1_2, 1e-15)
    expect(r1[6]).to.be.about(            0, 1e-15)
    expect(r1[7]).to.be.about(-Math.SQRT1_2, 1e-15)
    expect(r1[8]).to.be.about( Math.SQRT1_2, 1e-15)

    const r2 = rotationMatrix(-Math.PI / 3, 2)

    expect(r2[0]).to.be.about(               0.5, 1e-15)
    expect(r2[1]).to.be.about(                 0, 1e-15)
    expect(r2[2]).to.be.about(  Math.sqrt(3) / 2, 1e-15)
    expect(r2[3]).to.be.about(                 0, 1e-15)
    expect(r2[4]).to.be.about(                 1, 1e-15)
    expect(r2[5]).to.be.about(                 0, 1e-15)
    expect(r2[6]).to.be.about( -Math.sqrt(3) / 2, 1e-15)
    expect(r2[7]).to.be.about(                 0, 1e-15)
    expect(r2[8]).to.be.about(               0.5, 1e-15)

    const r3 = rotationMatrix(7 * Math.PI / 6, 3)

    expect(r3[0]).to.be.about( -Math.sqrt(3) / 2, 1e-15)
    expect(r3[1]).to.be.about(              -0.5, 1e-15)
    expect(r3[2]).to.be.about(                 0, 1e-15)
    expect(r3[3]).to.be.about(               0.5, 1e-15)
    expect(r3[4]).to.be.about( -Math.sqrt(3) / 2, 1e-15)
    expect(r3[5]).to.be.about(                 0, 1e-15)
    expect(r3[6]).to.be.about(                 0, 1e-15)
    expect(r3[7]).to.be.about(                 0, 1e-15)
    expect(r3[8]).to.be.about(                 1, 1e-15)
    done()
  })
})
