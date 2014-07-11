/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var timeConstants = require('../constants/time').time,
    leapSeconds = require('./leapSeconds').leapSeconds;

var conversions = {};

// JD -> MJD [days]
conversions.JDtoMJD = function(jd) {
  return jd + timeConstants.MJDJD;
};

// MJD -> JD [days]
conversions.MJDtoJD = function(mjd) {
  return mjd - timeConstants.MJDJD;
};

// TAI -> TT
conversions.TAItoTT = function(tai) {
  return tai + timeConstants.TTTAI;
};

// TT -> TAI
conversions.TTtoTAI = function(tt) {
  return tt - timeConstants.TTTAI;
};

// TAI -> UTC
conversions.TAItoUTC = function(tai) {
  return tai - leapSeconds(new Date(utc*1e3));
};

// UTC -> TAI
conversions.UTCtoTAI = function(utc) {
  return utc + leapSeconds(new Date(utc*1e3));
};

// TAI -> GPS
conversions.TAItoGPS = function(tai) {
  return tai - timeConstants.TAIGPS;
};

// GPS -> TAI
conversions.GPStoTAI = function(gps) {
  return gps + timeConstants.TAIGPS;
};

// UTC -> GPS
conversions.UTCtoGPS = function(utc) {
  return conversions.TAItoGPS( conversions.UTCtoTAI(utc) );
};

// GPS -> UTC
conversions.GPStoUTC = function(gps) {
  return conversions.TAItoUTC( conversions.GPStoTAI(gps) );
};

exports.conversions = conversions;
