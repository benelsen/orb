import "transformations";
import "../constants/earth";

orb.transformations.geodeticToCartesian = function(L, B, h, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var N = a / Math.sqrt( 1 - Math.pow( e * Math.sin(B), 2) );

  var x = (N + h) * Math.cos(B) * Math.cos(L),
      y = (N + h) * Math.cos(B) * Math.sin(L),
      z = (N * (1 - e*e) + h) * Math.sin(B);

  return [x, y, z];
};

orb.transformations.cartesianToGeodetic = function(x, y, z, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var L = Math.atan2(y,x),
      p = Math.sqrt( x*x + y*y );

  var B_ = Math.atan2(z,p),
      N, B;

  while (1) {
    N = a / Math.sqrt( 1 - Math.pow( e * Math.sin(B_), 2) );
    var Z_ = z + e*e * N * Math.sin(B_);
    B = Math.atan2(Z_, p);

    if ( Math.abs(B - B_) < 1e-12 ) {
      break;
    } else {
      B_ = B;
    }
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
};
