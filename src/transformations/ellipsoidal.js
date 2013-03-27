
orb.transformations.ellipsoidalToCartesian = function(β, L, r) {
  var x = a * Math.cos(β) * Math.cos(L),
      y = a * Math.cos(β) * Math.sin(L),
      z = b * Math.sin(β);
  return [x,y,z];
};

orb.transformations.cartesianToEllipsoidal = function(x, y, z) {
  return [];
};
