import "./";
import "../constants/earth";

orb.transformations.geodeticToCartesian = function(L, B, h, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.wgs84.a;
    e = orb.constants.wgs84.e;
  }

  var N = a / Math.sqrt( 1 - Math.pow(e * Math.sin(B), 2) ); //

  var x = (N + h) * Math.cos(B) * Math.cos(L),
      y = (N + h) * Math.cos(B) * Math.sin(L),
      z = (N * (1 - e*e) + h) * Math.sin(B);

  return [x, y, z];
};

orb.transformations.cartesianToGeodetic = function(x, y, z, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.wgs84.a;
    e = orb.constants.wgs84.e;
  }

  var L = Math.atan2(y,x),
      p = Math.sqrt( x*x + y*y );

  var B_ = Math.atan2(z,p),
      N, B;

  var i = 0;
  while (i < 25) {
    N = a / Math.sqrt( 1 - Math.pow( e * Math.sin(B_), 2) );
    var Z_ = z + e*e * N * Math.sin(B_);
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
