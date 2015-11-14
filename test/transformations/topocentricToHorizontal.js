import Lab from 'lab'
import {expect} from 'code'

export const lab = Lab.script()
const {experiment, test} = lab

import {topocentricToHorizontal, horizontalToTopocentric} from './../../lib/transformations/topocentricToHorizontal'

experiment('orb.transformations.topocentricToHorizontal', function () {

  test('should calculate azimith, elevation and distance from x, y, z', function (done) {

    var x = [
      1, -1, 1,
    ]

    var hor = topocentricToHorizontal(x)
    expect( hor[0] ).to.be.about(7*Math.PI/4, 1e-12)
    expect( hor[1] ).to.be.about(Math.atan2( 1, Math.SQRT2 ), 1e-12)
    expect( hor[2] ).to.be.about(Math.sqrt(3), 1e-12)
    done()
  })

})

experiment('orb.transformations.horizontalToTopocentric', function () {

  test('should calculate x, y, z from azimith, elevation and distance', function (done) {

    var x = [
      7*Math.PI/4,
      Math.atan2( 1, Math.SQRT2 ),
      Math.sqrt(3),
    ]

    var topo = horizontalToTopocentric(x)
    expect( topo[0] ).to.be.about(1, 1e-12)
    expect( topo[1] ).to.be.about(-1, 1e-12)
    expect( topo[2] ).to.be.about(1, 1e-12)
    done()
  })

})
