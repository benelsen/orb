"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keplerEquation;

function keplerEquation(e, M) {
  var ε = arguments[2] === undefined ? 1e-18 : arguments[2];
  var maxIter = arguments[3] === undefined ? 100 : arguments[3];

  var E;

  if (e < 0.8) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1,
      i = 0;
  while (Math.abs(dE) > ε && i < maxIter) {
    dE = (M + e * Math.sin(E) - E) / (1 - e * Math.cos(E));
    E = E + dE;
    i++;
  }

  return E;
}

module.exports = exports["default"];