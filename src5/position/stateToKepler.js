'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stateToKepler;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function stateToKepler(r, rDot, t, m1, m2) {

  var GM;

  if (m1 && m2) {
    GM = _constants2['default'].common.G * (m1 + m2);
  } else if (m1) {
    GM = _constants2['default'].common.G * m1;
  } else {
    GM = _constants2['default'].earth.GM;
  }

  var h = _vector2['default'].cross(r, rDot);

  var Ω = Math.atan2(h[0], -h[1]);

  var i = Math.atan2(Math.hypot.apply(Math, _toConsumableArray(h.slice(0, 2))), h[2]);

  var p = _vector2['default'].dot(h, h) / GM;

  var rLen = Math.hypot.apply(Math, _toConsumableArray(r));

  var e = Math.sqrt(p / GM * Math.pow(_vector2['default'].dot(r, rDot) / rLen, 2) + Math.pow(p / rLen - 1, 2));

  var ν = Math.atan2(Math.sqrt(p / GM) * _vector2['default'].dot(r, rDot), p - rLen);

  var rb = _vector2['default'].mm(_vector2['default'].r(i, 1), _vector2['default'].mm(_vector2['default'].r(Ω, 3), r));

  var ω = Math.atan2(rb[1], rb[0]) - ν;

  if (e < 1) {

    var a = p / (1 - Math.pow(e, 2));

    var E = 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    var T0 = t - Math.sqrt(Math.pow(a, 3) / GM) * (E - e * Math.sin(E));

    return [a, e, i, Ω, ω, T0];
  } else if (e > 1) {

    var a = p / (Math.pow(e, 2) - 1);

    var H = 2 * Math.atanh(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    var T0 = t + Math.sqrt(Math.pow(a, 3) / GM) * (H - e * Math.sinh(H));

    return [a, e, i, Ω, ω, T0];
  } else if (e === 1) {

    var T0 = t - 0.5 * Math.sqrt(Math.pow(p, 3) / GM) * (Math.tan(ν / 2) + 1 / 3 * Math.pow(Math.tan(ν / 2), 3));

    return [p, e, i, Ω, ω, T0];
  }
}

module.exports = exports['default'];