orb.transformations.inertialToFixed = function(x, Δt, ω, axis) {

  if ( !axis ) axis = 3;
  if ( !ω ) ω = orb.constants.earth.ω;

  return orb.v.mm( orb.v.r( ω * Δt, 3), x );
};

orb.transformations.fixedToInertial = function(x, Δt, ω, axis) {

  return orb.transformations.inertialToFixed( x, Δt, -ω, axis );
};
