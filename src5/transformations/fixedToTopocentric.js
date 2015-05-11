'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// x: [x, y, z], obs: [L, B, h]
exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

var _geodetic = require('./geodetic');

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function fixedToTopocentric(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? _constantsEarth2['default'].a : arguments[2];
  var e = arguments[3] === undefined ? _constantsEarth2['default'].e : arguments[3];

  var xObserver = _geodetic.geodeticToCartesian(obs, a, e);

  var Δx = x.map(function (xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if (nwu) {

    rTopo = _vector2['default'].mm(_vector2['default'].r(Math.PI / 2 - obs[1], 2), _vector2['default'].r(obs[0], 3));
  } else {

    rTopo = _vector2['default'].mm(_vector2['default'].q(1), _vector2['default'].mm(_vector2['default'].r(Math.PI / 2 - obs[1], 2), _vector2['default'].r(obs[0], 3)));
  }

  return _vector2['default'].mm(rTopo, Δx);
}

function topocentricToFixed(x, obs, _x3, _x4, nwu) {
  var a = arguments[2] === undefined ? _constantsEarth2['default'].a : arguments[2];
  var e = arguments[3] === undefined ? _constantsEarth2['default'].e : arguments[3];

  var xObserver = _geodetic.geodeticToCartesian(obs, a, e);

  var rFixed;

  if (nwu) {

    rFixed = _vector2['default'].mm(_vector2['default'].r(-obs[0], 3), _vector2['default'].r(obs[1] - Math.PI / 2, 2));
  } else {

    rFixed = _vector2['default'].mm(_vector2['default'].mm(_vector2['default'].r(-obs[0], 3), _vector2['default'].r(obs[1] - Math.PI / 2, 2)), _vector2['default'].q(1));
  }

  var xFixed = _vector2['default'].mm(rFixed, x);

  return xFixed.map(function (xi, i) {
    return xi + xObserver[i];
  });
}