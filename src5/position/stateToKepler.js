"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

module.exports = stateToKepler;

var vector = _interopRequire(require("../vector"));

var constants = _interopRequire(require("../constants"));

function stateToKepler(r, rDot, t, m1, m2) {

  var GM;

  if (m1 && m2) {
    GM = constants.common.G * (m1 + m2);
  } else if (m1) {
    GM = constants.common.G * m1;
  } else {
    GM = constants.earth.GM;
  }

  var h = vector.cross(r, rDot);

  var Ω = Math.atan2(h[0], -h[1]);

  var i = Math.atan2(Math.hypot.apply(Math, _toConsumableArray(h.slice(0, 2))), h[2]);

  var p = vector.dot(h, h) / GM;

  var rLen = Math.hypot.apply(Math, _toConsumableArray(r));

  var e = Math.sqrt(p / GM * Math.pow(vector.dot(r, rDot) / rLen, 2) + Math.pow(p / rLen - 1, 2));

  var ν = Math.atan2(Math.sqrt(p / GM) * vector.dot(r, rDot), p - rLen);

  var rb = vector.mm(vector.r(i, 1), vector.mm(vector.r(Ω, 3), r));

  var ω = Math.atan2(rb[1], rb[0]) - ν;

  var T0 = undefined,
      a = undefined;

  if (e < 1) {

    a = p / (1 - Math.pow(e, 2));

    var E = 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    T0 = t - Math.sqrt(Math.pow(a, 3) / GM) * (E - e * Math.sin(E));
  } else if (e > 1) {

    a = p / (Math.pow(e, 2) - 1);

    var H = 2 * Math.atanh(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    T0 = t + Math.sqrt(Math.pow(a, 3) / GM) * (H - e * Math.sinh(H));
  } else if (e === 1) {

    T0 = t - 0.5 * Math.sqrt(Math.pow(p, 3) / GM) * (Math.tan(ν / 2) + 1 / 3 * Math.pow(Math.tan(ν / 2), 3));
  }

  return [a || p, e, i, Ω, ω, T0];
}