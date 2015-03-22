"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

var vector = _interopRequire(require("../vector"));

function inertialToFixed(x, Δt) {
  var ω = arguments[2] === undefined ? earthConstants.ω : arguments[2];
  var axis = arguments[3] === undefined ? 3 : arguments[3];

  return vector.mm(vector.r(ω * Δt, 3), x);
}

function fixedToInertial(x, Δt, ω, axis) {
  return inertialToFixed(x, Δt, -ω, axis);
}