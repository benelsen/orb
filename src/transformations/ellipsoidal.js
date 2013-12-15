// x: [ L, β ]
orb.transformations.ellipsoidalToCartesian = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.grs80.a;
    e = orb.constants.grs80.e;
  }

  var b = Math.sqrt( a*a * (1-e*e));

  return [
    a * Math.cos(x[1]) * Math.cos(x[0]), // x
    a * Math.cos(x[1]) * Math.sin(x[0]), // y
    b * Math.sin(x[1])                   // z
  ];

};

// x: [ x, y, z ]
orb.transformations.cartesianToEllipsoidal = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.grs80.a;
    e = orb.constants.grs80.e;
  }

  var p = Math.sqrt( x[0]*x[0] + x[1]*x[1] ),
      b = Math.sqrt( a*a * (1-e*e));

  return [
    Math.atan2( x[1], x[0] ), // L
    Math.atan2( x[2]*a, p*b ) // β
  ];

};
