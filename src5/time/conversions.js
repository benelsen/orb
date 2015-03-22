"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// JD -> MJD [days]
exports.JDtoMJD = JDtoMJD;

// MJD -> JD [days]
exports.MJDtoJD = MJDtoJD;

// TAI -> TT
exports.TAItoTT = TAItoTT;

// TT -> TAI
exports.TTtoTAI = TTtoTAI;

// TAI -> UTC
exports.TAItoUTC = TAItoUTC;

// UTC -> TAI
exports.UTCtoTAI = UTCtoTAI;

// TAI -> GPS
exports.TAItoGPS = TAItoGPS;

// GPS -> TAI
exports.GPStoTAI = GPStoTAI;

// UTC -> GPS
exports.UTCtoGPS = UTCtoGPS;

// GPS -> UTC
exports.GPStoUTC = GPStoUTC;
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var leapSeconds = _interopRequire(require("leapseconds"));

var constants = _interopRequire(require("../constants/time"));

function JDtoMJD(jd) {
  return jd + constants.MJDJD;
}

function MJDtoJD(mjd) {
  return mjd - constants.MJDJD;
}

function TAItoTT(tai) {
  return tai + constants.TTTAI;
}

function TTtoTAI(tt) {
  return tt - constants.TTTAI;
}

function TAItoUTC(tai) {
  return tai - leapSeconds(new Date(tai * 1000));
}

function UTCtoTAI(utc) {
  return utc + leapSeconds(new Date(utc * 1000));
}

function TAItoGPS(tai) {
  return tai - constants.TAIGPS;
}

function GPStoTAI(gps) {
  return gps + constants.TAIGPS;
}

function UTCtoGPS(utc) {
  return TAItoGPS(UTCtoTAI(utc));
}

function GPStoUTC(gps) {
  return TAItoUTC(GPStoTAI(gps));
}