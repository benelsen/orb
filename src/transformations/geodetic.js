// x: [ L, B, h ]
orb.transformations.geodeticToCartesian = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var N = a / Math.sqrt( 1 - Math.pow(e * Math.sin(x[1]), 2) ); //

  return [
    (N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
    (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
    (N * (1 - e*e) + x[2]) * Math.sin(x[1])       // z
  ];

};

// x: [ x, y, z ]
orb.transformations.cartesianToGeodetic = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var L = Math.atan2( x[1], x[0] ),
      p = Math.sqrt( x[0]*x[0] + x[1]*x[1] );

  var B_ = Math.atan2(x[2],p),
      N, B;

  var i = 0;
  while (i < 100) {
    N = a / Math.sqrt( 1 - Math.pow( e * Math.sin(B_), 2) );
    var Z_ = x[2] + e*e * N * Math.sin(B_);
    B = Math.atan2(Z_, p);

    if ( Math.abs(B - B_) < 1e-15 ) {
      break;
    } else {
      B_ = B;
    }
    i++;
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
};
