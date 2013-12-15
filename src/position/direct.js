orb.position.directMethod = function(a, e, i, Ω, ω, t, T0, M0, m1, m2) {

  if ( !M0 ) M0 = 0;

  var GM = orb.constants.earth.GM;

  if ( m1 ) GM = orb.constants.common.G * m1;

  if ( m2 ) m2 = orb.constants.common.G * (m1 + m2);

  var p = a * (1 - e*e);

  // Mean motion
  var n = Math.sqrt( GM / Math.pow(a,3) );

  // Mean anomaly at t
  var M = ( M0 + (n * ( t - T0 )) );

  // Eccentric anomaly
  var E = orb.position.keplerEquation(e, M);

  // True anomaly
  var ν = 2*Math.atan( Math.sqrt((1+e)/(1-e)) * Math.tan(E/2) );
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var x_o = [
    r * Math.cos(ν),
    r * Math.sin(ν),
    0
  ];

  var xdot_o = [
    -Math.sqrt(GM/p) * Math.sin(ν),
     Math.sqrt(GM/p) * (e + Math.cos(ν)),
     0
  ];

  var x = orb.transformations.orbitalPlaneToInertial(x_o, Ω, ω, i),
      xdot = orb.transformations.orbitalPlaneToInertial(xdot_o, Ω, ω, i);

  return [x, xdot];
};
