"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// x: [ λ, φ, r ]
exports.sphericalToCartesian = sphericalToCartesian;

// x: [ x, y, z ]
exports.cartesianToSpherical = cartesianToSpherical;

function sphericalToCartesian(x) {

  return [x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
  x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
  x[2] * Math.sin(x[1]) // z
  ];
}

function cartesianToSpherical(x) {

  return [Math.atan2(x[1], x[0]), // λ
  Math.atan2(x[2], Math.sqrt(x[0] * x[0] + x[1] * x[1])), // φ
  Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]) // r
  ];
}