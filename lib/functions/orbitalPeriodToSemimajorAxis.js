import {G} from '../constants/common'
import {GM as earthGM} from '../constants/earth'

/**
 * Kepler’s third law
 * Calculate the semi-major axis given an orbital period
 * @param  {number} T    Orbital period (seconds)
 * @param  {number} [m1] Mass of object 1 (kg)
 * @param  {number} [m2] Mass of object 2 (kg)
 * @return {number}      Semi-major axis (m)
 */
export const orbitalPeriodToSemimajorAxis = (T, m1, m2) => {
  const μ = m1 ? G * ( m1 + (m2 || 0) ) : earthGM
  return Math.cbrt( μ * ( T / (2 * Math.PI))**2 )
}

/**
 * Kepler’s third law
 * Calculate the orbital period give a semi-major axis
 * @param  {number} a    Semi-major axis (m)
 * @param  {number} [m1] Mass of object 1 (kg)
 * @param  {number} [m2] Mass of object 2 (kg)
 * @return {number}      Orbital period (seconds)
 */
export const semimajorAxisToOrbitalPeriod = (a, m1, m2) => {
  const μ = m1 ? G * ( m1 + (m2 || 0) ) : earthGM
  return 2 * Math.PI * Math.sqrt( a**3 / μ )
}
