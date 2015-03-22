"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.orbitalPlaneToInertial = orbitalPlaneToInertial;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector = _interopRequire(require("../vector"));

function orbitalPlaneToInertial(x, Ω, ω, i) {

  return vector.mm(vector.r(-Ω, 3), vector.mm(vector.r(-i, 1), vector.mm(vector.r(-ω, 3), x)));
}