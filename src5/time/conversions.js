'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

/*eslint-disable new-cap */

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var _leapseconds = require('leapseconds');

var _leapseconds2 = _interopRequireDefault(_leapseconds);

var _constantsTime = require('../constants/time');

var _constantsTime2 = _interopRequireDefault(_constantsTime);

function JDtoMJD(jd) {
  return jd + _constantsTime2['default'].MJDJD;
}

function MJDtoJD(mjd) {
  return mjd - _constantsTime2['default'].MJDJD;
}

function TAItoTT(tai) {
  return tai + _constantsTime2['default'].TTTAI;
}

function TTtoTAI(tt) {
  return tt - _constantsTime2['default'].TTTAI;
}

function TAItoUTC(tai) {
  return tai - _leapseconds2['default'](new Date(tai * 1000));
}

function UTCtoTAI(utc) {
  return utc + _leapseconds2['default'](new Date(utc * 1000));
}

function TAItoGPS(tai) {
  return tai - _constantsTime2['default'].TAIGPS;
}

function GPStoTAI(gps) {
  return gps + _constantsTime2['default'].TAIGPS;
}

function UTCtoGPS(utc) {
  return TAItoGPS(UTCtoTAI(utc));
}

function GPStoUTC(gps) {
  return TAItoUTC(GPStoTAI(gps));
}

/*eslint-enable new-cap */