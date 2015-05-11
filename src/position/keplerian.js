
import constants from '../constants';
import keplerEquation from './keplerEquation';
import {orbitalPlaneToInertial} from '../transformations/orbitalPlaneToInertial';

export default function keplerian (a, e, i, Ω, ω, t, t0, M0=0, m1, m2) {

  var GM = constants.earth.GM;

  if ( m1 ) {
    GM = constants.common.G * m1;
  }

  if ( m2 ) {
    GM = constants.common.G * (m1 + m2);
  }

  var p = a * (1 - Math.pow(e, 2));

  // Mean motion
  var n = Math.sqrt( GM / Math.pow(a, 3) );

  // Mean anomaly at t
  var M = M0 + n * ( t - t0 );

  // Eccentric anomaly
  var E = keplerEquation(e, M);

  // True anomaly
  var ν = 2 * Math.atan( Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2) );
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var xOrbitalPlane = [
    r * Math.cos(ν),
    r * Math.sin(ν),
    0
  ];

  var xDotOrbitalPlane = [
    -Math.sqrt(GM / p) * Math.sin(ν),
     Math.sqrt(GM / p) * (e + Math.cos(ν)),
     0
  ];

  return [
    orbitalPlaneToInertial(xOrbitalPlane, Ω, ω, i),
    orbitalPlaneToInertial(xDotOrbitalPlane, Ω, ω, i)
  ];
}
