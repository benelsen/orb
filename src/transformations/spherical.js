import "./";

orb.transformations.sphericalToCartesian = function(λ, φ, r) {
  var x = r * Math.cos(φ) * Math.cos(λ),
      y = r * Math.cos(φ) * Math.sin(λ),
      z = r * Math.sin(φ);

  return [x, y, z];
};

orb.transformations.cartesianToSpherical = function(x, y, z) {
  var r = Math.sqrt( x*x + y*y + z*z );
  var λ = Math.atan2(y,x);
  var φ = Math.atan2( z, Math.sqrt( x*x + y*y) );

  return [λ, φ, r];
};
