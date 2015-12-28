
import vector from '../vector'
import constants from '../constants'

export default function stateToKepler(r, rDot, t, m1, m2) {

  let GM = constants.earth.GM

  if ( m1 && m2 ) {
    GM = constants.common.G * (m1 + m2)
  } else if ( m1 || m2 ) {
    GM = constants.common.G * (m1 || m2)
  }

  const h = vector.cross(r, rDot)

  const Ω = Math.atan2(h[0], -h[1])

  const i = Math.atan2(Math.hypot(...h.slice(0, 2)), h[2])

  const p = vector.dot(h, h) / GM

  const rLen = Math.hypot(...r)

  const e = Math.sqrt(
    p / GM * (vector.dot(r, rDot) / rLen)**2 + (p / rLen - 1)**2
  )

  const ν = Math.atan2( Math.sqrt( p / GM ) * vector.dot(r, rDot), p - rLen )

  const rb = vector.mm(
    vector.r(i, 1), vector.mm(
      vector.r(Ω, 3), r
    )
  )

  const ω = Math.atan2(rb[1], rb[0]) - ν

  if ( e < 1 ) {

    const a = p / (1 - e**2)

    const E = 2 * Math.atan( Math.sqrt( (1 - e) / (1 + e) ) * Math.tan(ν / 2) )

    const T0 = t - Math.sqrt( a**3 / GM ) * (E - e * Math.sin(E))

    return [a, e, i, Ω, ω, T0]

  } else if ( e > 1 ) {

    const a = p / (e**2 - 1)

    const H = 2 * Math.atanh( Math.sqrt( (1 - e) / (1 + e) ) * Math.tan(ν / 2) )

    const T0 = t + Math.sqrt( a**3 / GM ) * (H - e * Math.sinh(H))

    return [a, e, i, Ω, ω, T0]

  } else if ( e === 1 ) {

    const T0 = t - 0.5 * Math.sqrt( p**3 / GM ) * (Math.tan(ν / 2) + 1 / 3 * Math.tan(ν / 2)**3)

    return [p, e, i, Ω, ω, T0]

  }

}
