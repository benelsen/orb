"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = matrixMultiplication;

function matrixMultiplication(m1, m2) {

  if (m2.length === 9) {

    return [m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6], m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7], m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8], m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6], m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7], m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8], m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6], m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7], m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8]];
  } else if (m2.length === 3) {

    return [m1[0] * m2[0] + m1[1] * m2[1] + m1[2] * m2[2], m1[3] * m2[0] + m1[4] * m2[1] + m1[5] * m2[2], m1[6] * m2[0] + m1[7] * m2[1] + m1[8] * m2[2]];
  }

  return null;
}

module.exports = exports["default"];