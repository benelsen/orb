import "time";
import "../constants/time";

/**
 * Common conversions between time standards
 * All time values are in milliseconds
 * unless specified
 */

// JD -> MJD [days]
orb.time.JDtoMJD = function(jd) {
  return jd + orb.constants.time.MJDJD;
};

// MJD -> JD [days]
orb.time.MJDtoJD = function(mjd) {
  return mjd - orb.constants.time.MJDJD;
};

// TAI -> TT
orb.time.TAItoTT = function(tai) {
  return tai + orb.constants.time.TTTAI;
};

// TT -> TAI
orb.time.TTtoTAI = function(tt) {
  return tt - orb.constants.time.TTTAI;
};

// TAI -> UTC
orb.time.TAItoUTC = function(tai) {
  return tai - orb.constants.time.TAIUTC;
};

// UTC -> TAI
orb.time.UTCtoTAI = function(utc) {
  return utc + orb.constants.time.TAIUTC;
};
