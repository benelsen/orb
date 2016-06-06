import Lab from 'lab'
import { expect } from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import { era } from './../../lib/functions/era'

experiment('orb.functions.era', () => {
  test('should return the ERA after 0 days', done => {
    expect(era(0.0)).to.be.about(4.894961212823756, 1e-12)
    done()
  })

  test('should return the ERA after 1000 days', done => {
    expect(era(1000.0)).to.be.about(3.247584866529671, 1e-12)
    done()
  })
})
