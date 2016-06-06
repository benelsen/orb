
/**
 * Convert spherical to cartesian coordinates
 * @param  {Array<number>} x Spherical coordinates (λ, φ, r)
 * @return {Array<number>}   Cartesian coordinates (x, y, z)
 */
export function sphericalToCartesian (x) {

  return [
    x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
    x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
    x[2] * Math.sin(x[1]),                  // z
  ]

}

/**
 * Convert cartesian to spherical coordinates
 * @param  {Array<number>} x Cartesian coordinates (x, y, z)
 * @return {Array<number>}   Spherical coordinates (λ, φ, r)
 */
export function cartesianToSpherical (x) {

  return [
    Math.atan2(x[1], x[0]),                   // λ
    Math.atan2(x[2], Math.hypot(x[0], x[1])), // φ
    Math.hypot(x[0], x[1], x[2]),             // r
  ]

}
