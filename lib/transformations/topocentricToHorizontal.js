/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
export function topocentricToHorizontal (x) {
  return [
    (2 * Math.PI + Math.atan2(x[1], x[0])) % (2 * Math.PI), // Azimuth
    Math.atan2(x[2], Math.hypot(x[0], x[1])),               // Elevation
    Math.hypot(x[0], x[1], x[2])                            // Distance
  ]
}

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
export function horizontalToTopocentric (x) {
  return [
    x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
    x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
    x[2] * Math.sin(x[1])                   // z
  ]
}
