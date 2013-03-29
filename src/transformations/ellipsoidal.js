import "../constants/earth";

orb.transformations.ellipsoidalToCartesian = function(L, β, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var b = Math.sqrt( a*a * (1-e*e));

  var x = a * Math.cos(β) * Math.cos(L),
      y = a * Math.cos(β) * Math.sin(L),
      z = b * Math.sin(β);

  return [x, y, z];
};

orb.transformations.cartesianToEllipsoidal = function(x, y, z, a, e) {
  if ( a === undefined || e === undefined ) {
    a = orb.constants.earth.a;
    e = orb.constants.earth.e;
  }

  var p = Math.sqrt( x*x + y*y ),
      b = Math.sqrt( a*a * (1-e*e));

  var L = Math.atan2(y,x),
      β = Math.atan2( z*a, p*b );

  return [L, β];
};
