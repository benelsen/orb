"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = keplerian;

var constants = _interopRequire(require("../constants"));

var keplerEquation = _interopRequire(require("./keplerEquation"));

var orbitalPlaneToInertial = require("../transformations/orbitalPlaneToInertial").orbitalPlaneToInertial;

function keplerian(a, e, i, Ω, ω, t, t0, _x, m1, m2) {
  var M0 = arguments[7] === undefined ? 0 : arguments[7];

  var GM = constants.earth.GM;

  if (m1) {
    GM = constants.common.G * m1;
  }

  if (m2) {
    GM = constants.common.G * (m1 + m2);
  }

  var p = a * (1 - Math.pow(e, 2));

  // Mean motion
  var n = Math.sqrt(GM / Math.pow(a, 3));

  // Mean anomaly at t
  var M = M0 + n * (t - t0);

  // Eccentric anomaly
  var E = keplerEquation(e, M);

  // True anomaly
  var ν = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var x_o = [r * Math.cos(ν), r * Math.sin(ν), 0];

  var xdot_o = [-Math.sqrt(GM / p) * Math.sin(ν), Math.sqrt(GM / p) * (e + Math.cos(ν)), 0];

  var x = orbitalPlaneToInertial(x_o, Ω, ω, i);
  var xdot = orbitalPlaneToInertial(xdot_o, Ω, ω, i);

  return [x, xdot];
}