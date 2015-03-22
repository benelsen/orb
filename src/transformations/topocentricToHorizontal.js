/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
export function topocentricToHorizontal (x) {

  let azimuth = ( 2 * Math.PI + Math.atan2( x[1], x[0] ) ) % (2 * Math.PI);

  return [
    azimuth, // Azimuth
    Math.atan2( x[2], Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2)) ), // Elevation
    Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2) ) // Distance
  ];

}

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
export function horizontalToTopocentric (x) {

  return [
    x[2] * Math.cos( x[1] ) * Math.cos( x[0] ), // x
    x[2] * Math.cos( x[1] ) * Math.sin( x[0] ), // y
    x[2] * Math.sin( x[1] )                     // z
  ];

}
