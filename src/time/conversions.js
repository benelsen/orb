import "./";
import "../constants/time";

/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
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

// TAI -> GPS
orb.time.TAItoGPS = function(tai) {
  return tai - orb.constants.time.TAIGPS;
};

// GPS -> TAI
orb.time.GPStoTAI = function(gps) {
  return gps + orb.constants.time.TAIGPS;
};

// UTC -> GPS
orb.time.UTCtoGPS = function(utc) {
  return orb.time.TAItoGPS( orb.time.UTCtoTAI(utc) );
};

// GPS -> UTC
orb.time.GPStoUTC = function(gps) {
  return orb.time.TAItoUTC( orb.time.GPStoTAI(gps) );
};
