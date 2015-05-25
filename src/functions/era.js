
/**
 * Calculate the Earth Rotation Angle
 * @param  {number} days UT1 days since J2000.0
 * @return {number}      ERA (radians)
 */
export function era(days) {
  return 2 * Math.PI * ( 0.7790572732640 + 1.00273781191135448 * days ) % (2 * Math.PI);
}
