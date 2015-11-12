/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

import leapSeconds from 'leapseconds'
import * as constants from '../constants/time'

/*eslint-disable new-cap */

/**
 * Converts JD to MJD
 * @param   {number} jd  Julian Date
 * @returns {number} mjd Modified Julian Date
 */
export function JDtoMJD (jd) {
  return jd + constants.MJDJD
}

/**
 * Converts MJD to JD
 * @param   {number} mjd Modified Julian Date
 * @returns {number} jd  Julian Date
 */
export function MJDtoJD (mjd) {
  return mjd - constants.MJDJD
}

/**
 * Converts TAI to TT
 * @param   {number} tai TAI (seconds)
 * @returns {number} tt  TT (seconds)
 */
export function TAItoTT (tai) {
  return tai + constants.TTTAI
}

/**
 * Converts TT to TAI
 * @param   {number} tt  TT (seconds)
 * @returns {number} tai TAI (seconds)
 */
export function TTtoTAI (tt) {
  return tt - constants.TTTAI
}

/**
 * Converts TAI to UTC
 * @param   {number} tai TAI (seconds)
 * @returns {number} utc UTC (seconds)
 */
// TAI -> UTC
export function TAItoUTC (tai) {
  return tai - leapSeconds(new Date( tai * 1e3 ))
}

/**
 * Converts UTC to TAI
 * @param   {number} utc UTC (seconds)
 * @returns {number} tai TAI (seconds)
 */
export function UTCtoTAI (utc) {
  return utc + leapSeconds(new Date( utc * 1e3 ))
}

/**
 * Converts TAI to GPS
 * @param   {number} tai TAI (seconds)
 * @returns {number} gps GPS (seconds)
 */
export function TAItoGPS (tai) {
  return tai - constants.TAIGPS
}

/**
 * Converts GPS to TAI
 * @param   {number} gps GPS (seconds)
 * @returns {number} tai TAI (seconds)
 */
export function GPStoTAI (gps) {
  return gps + constants.TAIGPS
}

/**
 * Converts UTC to GPS
 * @param   {number} utc UTC (seconds)
 * @returns {number} gps GPS (seconds)
 */
export function UTCtoGPS (utc) {
  return TAItoGPS( UTCtoTAI(utc) )
}

/**
 * Converts GPS to UTC
 * @param   {number} gps GPS (seconds)
 * @returns {number} utc UTC (seconds)
 */
export function GPStoUTC (gps) {
  return TAItoUTC( GPStoTAI(gps) )
}

/*eslint-enable new-cap */
