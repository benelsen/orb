import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import orb from './../lib/'

experiment('orb', function () {

  test('should exist', function (done) {
    expect(orb).to.exist()
    done()
  })

  test('should be a object', function (done) {
    expect( orb ).to.be.an.instanceOf(Object)
    done()
  })

})
