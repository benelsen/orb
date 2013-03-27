
orb.transformations.sphericalToCartesian = function(φ,λ,r) {
  var x = r * Math.sin(λ) * Math.cos(φ),
      y = r * Math.sin(λ) * Math.sin(φ),
      z = r * Math.sin(φ);

  return [x,y,z];
};

orb.transformations.cartesianToSpherical = function(x,y,z) {
  var r = Math.sqrt( x*x + y*y + z*z );
  var λ = Math.acos(z/r);
  var φ = Math.atan2(y,x);

  return [φ,λ,r];
};
