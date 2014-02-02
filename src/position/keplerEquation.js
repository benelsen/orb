var keplerEquation = function(e, M) {
  var E;

  if ( e < 0.8 ) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1,
      i = 0;
  while ( Math.abs(dE) > 1e-18 && i < 100 ) {
    dE = (M + e*Math.sin(E) - E) / (1 - e*Math.cos(E));
    E = E + dE;
    i++;
  }

  return E;
};

exports.keplerEquation = keplerEquation;
