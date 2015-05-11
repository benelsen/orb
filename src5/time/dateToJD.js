'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
/**
 * Converts a date to Julian Date
 *   Input and output are on the same continuous time scale.
 *   JD is usually specified in TT, corrections are needed
 *   to convert a UTC date to JD in TT: UTC -> TAI -> TT -> JD
 *
 * @param {array, date, number} date - The date to be converted to JD
 *        This can either be an Array of form [year, month, day, hour, minute, second]
 *                         or a Date
 * @return {number}
 */

exports['default'] = dateToJD;

function dateToJD(date) {

  var y = undefined,
      m = undefined,
      d = undefined,
      h = undefined;

  if (date instanceof Array) {

    y = date[0];
    m = date[1];
    d = date[2];
    h = date[3] + date[4] / 60 + date[5] / 3600;
  } else if (date instanceof Date || typeof date === 'number') {

    y = date.getUTCFullYear();
    m = date.getUTCMonth() + 1;
    d = date.getUTCDate();
    h = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  } else {
    throw new Error('date is of invalid type');
  }

  var f = m > 2 ? y : y - 1;
  var g = m > 2 ? m : m + 12;

  var a = 2 - Math.floor(f / 100) + Math.floor(f / 400);

  var jd = Math.floor(365.25 * f) + Math.floor(30.6001 * (g + 1)) + d + a + 1720994.5;

  return jd + h / 24;
}

module.exports = exports['default'];