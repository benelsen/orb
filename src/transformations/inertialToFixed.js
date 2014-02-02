var earthConstants = require('../constants/earth').earth,
    vector = require('../vector').vector;

var inertialToFixed = function(x, Δt, ω, axis) {

  if ( !axis ) axis = 3;
  if ( !ω ) ω = earthConstants.ω;

  return vector.mm( vector.r( ω * Δt, 3), x );
};

var fixedToInertial = function(x, Δt, ω, axis) {
  return inertialToFixed( x, Δt, -ω, axis );
};

exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;
