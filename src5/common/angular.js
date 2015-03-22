"use strict";

exports.deg2rad = deg2rad;
exports.rad2deg = rad2deg;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}