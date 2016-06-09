import {earth as c} from '../constants/earth'

/**
 * Calculate the Earth Rotation Angle
 * @param  {number} Days UT1 days since J2000.0
 * @return {number} ERA
 */
export function era (days) {
  return (c.θ0 + c.ω * 86400 * days) % (2 * Math.PI)
}
