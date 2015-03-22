"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var matrixMultiplication = _interopRequire(require("./matrixMultiplication"));

var mirrorMatrix = _interopRequire(require("./mirrorMatrix"));

var rotationMatrix = _interopRequire(require("./rotationMatrix"));

var vector = {
  matrixMultiplication: matrixMultiplication, mm: matrixMultiplication,
  mirrorMatrix: mirrorMatrix, q: mirrorMatrix,
  rotationMatrix: rotationMatrix, r: rotationMatrix
};

module.exports = vector;