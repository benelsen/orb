'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// x: [ L, B, h ]
exports.geodeticToCartesian = geodeticToCartesian;

// x: [ x, y, z ]
exports.cartesianToGeodetic = cartesianToGeodetic;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

function geodeticToCartesian(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(x[1]), 2)); //

  return [(N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
  (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
  (N * (1 - Math.pow(e, 2)) + x[2]) * Math.sin(x[1]) // z
  ];
}

function cartesianToGeodetic(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var L = Math.atan2(x[1], x[0]),
      p = Math.hypot(x[0], x[1]);

  var Btmp = Math.atan2(x[2], p),
      N,
      B,
      Ztmp;

  var i = 0;
  while (i < 100) {
    N = a / Math.sqrt(1 - Math.pow(e * Math.sin(Btmp), 2));
    Ztmp = x[2] + Math.pow(e, 2) * N * Math.sin(Btmp);
    B = Math.atan2(Ztmp, p);

    if (Math.abs(B - Btmp) < 1e-15) {
      break;
    } else {
      Btmp = B;
    }
    i++;
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
}