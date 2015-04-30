'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = keplerian;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _keplerEquation = require('./keplerEquation');

var _keplerEquation2 = _interopRequireDefault(_keplerEquation);

var _transformationsOrbitalPlaneToInertial = require('../transformations/orbitalPlaneToInertial');

function keplerian(a, e, i, Ω, ω, t, t0, _x, m1, m2) {
  var M0 = arguments[7] === undefined ? 0 : arguments[7];

  var GM = _constants2['default'].earth.GM;

  if (m1) {
    GM = _constants2['default'].common.G * m1;
  }

  if (m2) {
    GM = _constants2['default'].common.G * (m1 + m2);
  }

  var p = a * (1 - Math.pow(e, 2));

  // Mean motion
  var n = Math.sqrt(GM / Math.pow(a, 3));

  // Mean anomaly at t
  var M = M0 + n * (t - t0);

  // Eccentric anomaly
  var E = _keplerEquation2['default'](e, M);

  // True anomaly
  var ν = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var xOrbitalPlane = [r * Math.cos(ν), r * Math.sin(ν), 0];

  var xDotOrbitalPlane = [-Math.sqrt(GM / p) * Math.sin(ν), Math.sqrt(GM / p) * (e + Math.cos(ν)), 0];

  return [_transformationsOrbitalPlaneToInertial.orbitalPlaneToInertial(xOrbitalPlane, Ω, ω, i), _transformationsOrbitalPlaneToInertial.orbitalPlaneToInertial(xDotOrbitalPlane, Ω, ω, i)];
}

module.exports = exports['default'];