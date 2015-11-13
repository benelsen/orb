import earthConstants from '../constants/earth'

// x: [ L, B, h ]
export function geodeticToCartesian (x, a=earthConstants.a, e=earthConstants.e) {

  var N = a / Math.sqrt( 1 - (e * Math.sin(x[1]))**2 ) //

  return [
    (N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
    (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
    (N * (1 - e**2) + x[2]) * Math.sin(x[1]),     // z
  ]

}

// x: [ x, y, z ]
export function cartesianToGeodetic (x, a=earthConstants.a, e=earthConstants.e) {

  const L = Math.atan2( x[1], x[0] )
  const p = Math.hypot( x[0], x[1] )

  let Btmp = Math.atan2(x[2], p), N, B, Ztmp

  var i = 0
  while (i < 100) {
    N = a / Math.sqrt( 1 - (e * Math.sin(Btmp))**2 )
    Ztmp = x[2] + e**2 * N * Math.sin(Btmp)
    B = Math.atan2(Ztmp, p)

    if ( Math.abs(B - Btmp) < 1e-15 ) {
      break
    } else {
      Btmp = B
    }
    i++
  }

  var h = p / Math.cos(B) - N

  return [L, B, h]
}
