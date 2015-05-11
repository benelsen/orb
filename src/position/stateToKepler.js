
import vector from '../vector';
import constants from '../constants';

export default function stateToKepler(r, rDot, t, m1, m2) {

  var GM;

  if ( m1 && m2 ) {
    GM = constants.common.G * (m1 + m2);
  } else if ( m1 ) {
    GM = constants.common.G * m1;
  } else {
    GM = constants.earth.GM;
  }

  let h = vector.cross(r, rDot);

  let Ω = Math.atan2(h[0], -h[1]);

  let i = Math.atan2(Math.hypot(...h.slice(0, 2)), h[2]);

  let p = vector.dot(h, h) / GM;

  let rLen = Math.hypot(...r);

  let e = Math.sqrt(
    p / GM * Math.pow(vector.dot(r, rDot) / rLen, 2) +
      Math.pow(p / rLen - 1, 2)
  );

  let ν = Math.atan2( Math.sqrt( p / GM ) * vector.dot(r, rDot), p - rLen );

  let rb = vector.mm(
    vector.r(i, 1), vector.mm(
      vector.r(Ω, 3), r
    )
  );

  let ω = Math.atan2(rb[1], rb[0]) - ν;

  if ( e < 1 ) {

    let a = p / (1 - Math.pow(e, 2));

    let E = 2 * Math.atan( Math.sqrt( (1 - e) / (1 + e) ) * Math.tan(ν / 2) );

    let T0 = t - Math.sqrt( Math.pow(a, 3) / GM ) * (E - e * Math.sin(E));

    return [a, e, i, Ω, ω, T0];

  } else if ( e > 1 ) {

    let a = p / (Math.pow(e, 2) - 1);

    let H = 2 * Math.atanh( Math.sqrt( (1 - e) / (1 + e) ) * Math.tan(ν / 2) );

    let T0 = t + Math.sqrt( Math.pow(a, 3) / GM ) * (H - e * Math.sinh(H));

    return [a, e, i, Ω, ω, T0];

  } else if ( e === 1 ) {

    let T0 = t - 0.5 * Math.sqrt( Math.pow(p, 3) / GM ) *
      (Math.tan(ν / 2) + 1 / 3 * Math.pow( Math.tan(ν / 2), 3) );

    return [p, e, i, Ω, ω, T0];

  }

}
