import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {fixedToTopocentric, topocentricToFixed} from './../../lib/transformations/fixedToTopocentric'

experiment('orb.transformations.fixedToTopocentric', () => {

  test('should correctly perform B rotation', done => {

    const x1 = [
      1, 0, Math.sqrt( 3 ),
    ]

    const obs = [
      0,
      60 * Math.PI/180,
      0,
    ]

    const topo = fixedToTopocentric(x1, obs, 1, 0)
    expect( topo[0] ).to.be.about(0, 1e-15)
    expect( topo[1] ).to.be.about(0, 1e-15)
    expect( topo[2] ).to.be.about(1, 1e-15)

    done()
  })

  test('should correctly perform L rotation', done => {

    const x1 = [
      1, 1, 0,
    ]

    const obs = [
      45 * Math.PI/180,
      0,
      0,
    ]

    const topo = fixedToTopocentric(x1, obs, 1, 0)
    expect( topo[0] ).to.be.about(0, 1e-15)
    expect( topo[1] ).to.be.about(0, 1e-15)
    expect( topo[2] ).to.be.about(Math.SQRT2 - 1, 1e-15)

    done()
  })

})

experiment('orb.transformations.topocentricToFixed', () => {

  test('should correctly perform B rotation', done => {

    const x1 = [
      0, 0, 1,
    ]

    const obs = [
      0,
      60 * Math.PI/180,
      0,
    ]

    const fixed = topocentricToFixed(x1, obs, 1, 0)

    expect( fixed[0] ).to.be.about(1, 1e-15)
    expect( fixed[1] ).to.be.about(0, 1e-15)
    expect( fixed[2] ).to.be.about(Math.sqrt( 3 ), 1e-15)

    done()
  })

  test('should correctly perform L rotation', done => {

    const x1 = [
      0, 0, Math.SQRT2 - 1,
    ]

    const obs = [
      45 * Math.PI/180,
      0,
      0,
    ]

    const fixed = topocentricToFixed(x1, obs, 1, 0)

    expect( fixed[0] ).to.be.about(1, 1e-15)
    expect( fixed[1] ).to.be.about(1, 1e-15)
    expect( fixed[2] ).to.be.about(0, 1e-15)

    done()
  })

})
