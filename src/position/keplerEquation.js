
export default function keplerEquation (e, M, ε=1e-18, maxIter=100) {
  var E;

  if ( e < 0.8 ) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1,
      i = 0;
  while ( Math.abs(dE) > ε && i < maxIter ) {
    dE = (M + e * Math.sin(E) - E) / (1 - e * Math.cos(E));
    E = E + dE;
    i++;
  }

  return E;
}
