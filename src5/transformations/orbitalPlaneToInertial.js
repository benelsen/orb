'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.orbitalPlaneToInertial = orbitalPlaneToInertial;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function orbitalPlaneToInertial(x, Ω, ω, i) {

  return _vector2['default'].mm(_vector2['default'].r(-Ω, 3), _vector2['default'].mm(_vector2['default'].r(-i, 1), _vector2['default'].mm(_vector2['default'].r(-ω, 3), x)));
}