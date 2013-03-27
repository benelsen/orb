import "time";
import "../constants/time";

/**
 * Common conversions between time standards
 * All time values are in milliseconds
 */

orb.time.JDtoMJD = function(jd) {
  return jd + orb.constants.time.MJDJD;
}

orb.time.MJDtoJD = function(mjd) {
  return mjd - orb.constants.time.MJDJD;
}

orb.time.TAItoTT = function(tai) {
  return tai + orb.constants.time.TTTAI;
}

orb.time.TTtoTAI = function(tt) {
  return tt - orb.constants.time.TTTAI;
}

orb.time.TAItoUTC = function(tai) {
  return tai - orb.constants.time.TAIUTC;
}

orb.time.UTCtoTAI = function(utc) {
  return utc + orb.constants.time.TAIUTC;
}
