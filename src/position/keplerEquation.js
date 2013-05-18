import "position";

orb.position.keplerEquation = function(e, M) {
  var E;

  if ( e < 0.8 ) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1;
  while ( Math.abs(dE) > 1e-12 ) {
    dE = (E - e*Math.sin(E) - M) / (1 - e*Math.cos(E));
    E = E - dE;
  }

  return E;
};
