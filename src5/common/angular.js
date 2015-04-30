"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.rad2deg = rad2deg;

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}