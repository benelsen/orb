"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var matrixMultiplication = _interopRequire(require("./matrixMultiplication"));

var mirrorMatrix = _interopRequire(require("./mirrorMatrix"));

var rotationMatrix = _interopRequire(require("./rotationMatrix"));

var crossProduct = _interopRequire(require("./crossProduct"));

var dotProduct = _interopRequire(require("./dotProduct"));

var vector = {
  matrixMultiplication: matrixMultiplication, mm: matrixMultiplication,
  mirrorMatrix: mirrorMatrix, q: mirrorMatrix,
  rotationMatrix: rotationMatrix, r: rotationMatrix,
  crossProduct: crossProduct, cross: crossProduct,
  dotProduct: dotProduct, dot: dotProduct
};

module.exports = vector;