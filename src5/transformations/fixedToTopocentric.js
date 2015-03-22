"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// x: [x, y, z], obs: [L, B, h]
exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

var geodeticToCartesian = require("./geodetic").geodeticToCartesian;

var vector = _interopRequire(require("../vector"));

function fixedToTopocentric(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? earthConstants.a : arguments[2];
  var e = arguments[3] === undefined ? earthConstants.e : arguments[3];

  var xObserver = geodeticToCartesian(obs, a, e);

  var Δx = x.map(function (xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if (nwu) {

    rTopo = vector.mm(vector.r(Math.PI / 2 - obs[1], 2), vector.r(obs[0], 3));
  } else {

    rTopo = vector.mm(vector.q(1), vector.mm(vector.r(Math.PI / 2 - obs[1], 2), vector.r(obs[0], 3)));
  }

  return vector.mm(rTopo, Δx);
}

function topocentricToFixed(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? earthConstants.a : arguments[2];
  var e = arguments[3] === undefined ? earthConstants.e : arguments[3];

  var xObserver = geodeticToCartesian(obs, a, e);

  var rFixed;

  if (nwu) {

    rFixed = vector.mm(vector.r(-obs[0], 3), vector.r(obs[1] - Math.PI / 2, 2));
  } else {

    rFixed = vector.mm(vector.mm(vector.r(-obs[0], 3), vector.r(obs[1] - Math.PI / 2, 2)), vector.q(1));
  }

  var xFixed = vector.mm(rFixed, x);

  return xFixed.map(function (xi, i) {
    return xi + xObserver[i];
  });
}