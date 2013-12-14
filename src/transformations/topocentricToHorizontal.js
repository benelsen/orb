import "./";

orb.transformations.topocentricToHorizontal = function(x) {

  var azimuth = ( 2*Math.PI + Math.atan2( x[1], x[0] ) ) % (2*Math.PI);

  return [
    azimuth, // Azimuth
    Math.atan2( x[2], Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2)) ), // Elevation
    Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2) ) // Distance
  ];

};
