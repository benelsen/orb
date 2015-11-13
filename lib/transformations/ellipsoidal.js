import earthConstants from '../constants/earth'

// x: [ L, β ]
export function ellipsoidalToCartesian (x, a=earthConstants.a, e=earthConstants.e) {

  const b = Math.sqrt( a**2 * (1 - e**2) )

  return [
    a * Math.cos(x[1]) * Math.cos(x[0]), // x
    a * Math.cos(x[1]) * Math.sin(x[0]), // y
    b * Math.sin(x[1]),                   // z
  ]

}

// x: [ x, y, z ]
export function cartesianToEllipsoidal (x, a=earthConstants.a, e=earthConstants.e) {

  const p = Math.hypot( x[0], x[1] )
  const b = Math.sqrt( a**2 * (1 - e**2) )

  return [
    Math.atan2( x[1], x[0] ),      // L
    Math.atan2( x[2] * a, p * b ), // β
  ]

}
