'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function inertialToFixed(x, Δt) {
  var ω = arguments[2] === undefined ? _constantsEarth2['default'].ω : arguments[2];
  var axis = arguments[3] === undefined ? 3 : arguments[3];

  return _vector2['default'].mm(_vector2['default'].r(ω * Δt, 3), x);
}

function fixedToInertial(x, Δt, ω, axis) {
  return inertialToFixed(x, Δt, -ω, axis);
}