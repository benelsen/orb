
import constants from '../constants/index'
import {keplerEquation} from '../functions/keplerEquation'
import {orbitalPlaneToInertial} from '../transformations/orbitalPlaneToInertial'

export default function keplerian (a, e, i, Ω, ω, t, t0, M0=0, m1, m2) {

  let GM = constants.earth.GM

  if ( m1 && m2 ) {
    GM = constants.common.G * (m1 + m2)
  } else if ( m1 || m2 ) {
    GM = constants.common.G * (m1 || m2)
  }

  const p = a * (1 - e**2)

  // Mean motion
  const n = Math.sqrt( GM / a**3 )

  // Mean anomaly at t
  const M = M0 + n * ( t - t0 )

  // Eccentric anomaly
  const E = keplerEquation(e, M)

  // True anomaly
  const ν = 2 * Math.atan( Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2) )
  // const ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  const r = p / (1 + e * Math.cos(ν))

  // position in orbital plane
  const xOrbitalPlane = [
    r * Math.cos(ν),
    r * Math.sin(ν),
    0,
  ]

  const xDotOrbitalPlane = [
    -Math.sqrt(GM / p) * Math.sin(ν),
    Math.sqrt(GM / p) * (e + Math.cos(ν)),
    0,
  ]

  return [
    orbitalPlaneToInertial(xOrbitalPlane, Ω, ω, i),
    orbitalPlaneToInertial(xDotOrbitalPlane, Ω, ω, i),
  ]
}
