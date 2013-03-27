import "../constants/earth";

orb.transformations.ellipsoidalToCartesian = function(β, L, a, e) {
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

  var p = Math.sqrt( x*x + y*y );

  var L = Math.atan2(y,x),
      β = Math.acos( p / a );

  return [L, β];
};
