"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
exports.topocentricToHorizontal = topocentricToHorizontal;

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
exports.horizontalToTopocentric = horizontalToTopocentric;

function topocentricToHorizontal(x) {

  var azimuth = (2 * Math.PI + Math.atan2(x[1], x[0])) % (2 * Math.PI);

  return [azimuth, // Azimuth
  Math.atan2(x[2], Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2))), // Elevation
  Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2)) // Distance
  ];
}

function horizontalToTopocentric(x) {

  return [x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
  x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
  x[2] * Math.sin(x[1]) // z
  ];
}