
/**
 * Convert degrees to radians
 * @param  {number} deg Degrees
 * @return {number}
 */
export function deg2rad (deg) {
  return deg * Math.PI / 180
}

/**
 * Convert radians to degrees
 * @param  {number} rad Radians
 * @return {number}     Degrees
 */
export function rad2deg (rad) {
  return rad * 180 / Math.PI
}
