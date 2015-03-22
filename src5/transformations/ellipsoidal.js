"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// x: [ L, β ]
exports.ellipsoidalToCartesian = ellipsoidalToCartesian;

// x: [ x, y, z ]
exports.cartesianToEllipsoidal = cartesianToEllipsoidal;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

function ellipsoidalToCartesian(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [a * Math.cos(x[1]) * Math.cos(x[0]), // x
  a * Math.cos(x[1]) * Math.sin(x[0]), // y
  b * Math.sin(x[1]) // z
  ];
}

function cartesianToEllipsoidal(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var p = Math.hypot(x[0], x[1]),
      b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [Math.atan2(x[1], x[0]), // L
  Math.atan2(x[2] * a, p * b) // β
  ];
}