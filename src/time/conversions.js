/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

import leapSeconds from 'leapseconds';
import constants from '../constants/time';

/*eslint-disable new-cap */

// JD -> MJD [days]
export function JDtoMJD (jd) {
  return jd + constants.MJDJD;
}

// MJD -> JD [days]
export function MJDtoJD (mjd) {
  return mjd - constants.MJDJD;
}

// TAI -> TT
export function TAItoTT (tai) {
  return tai + constants.TTTAI;
}

// TT -> TAI
export function TTtoTAI (tt) {
  return tt - constants.TTTAI;
}

// TAI -> UTC
export function TAItoUTC (tai) {
  return tai - leapSeconds(new Date( tai * 1e3 ));
}

// UTC -> TAI
export function UTCtoTAI (utc) {
  return utc + leapSeconds(new Date( utc * 1e3 ));
}

// TAI -> GPS
export function TAItoGPS (tai) {
  return tai - constants.TAIGPS;
}

// GPS -> TAI
export function GPStoTAI (gps) {
  return gps + constants.TAIGPS;
}

// UTC -> GPS
export function UTCtoGPS (utc) {
  return TAItoGPS( UTCtoTAI(utc) );
}

// GPS -> UTC
export function GPStoUTC (gps) {
  return TAItoUTC( GPStoTAI(gps) );
}

/*eslint-enable new-cap */
