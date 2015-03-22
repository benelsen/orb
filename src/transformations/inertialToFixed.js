import earthConstants from '../constants/earth';
import vector from '../vector';

export function inertialToFixed (x, Δt, ω=earthConstants.ω, axis=3) {
  return vector.mm( vector.r( ω * Δt, 3), x );
}

export function fixedToInertial (x, Δt, ω, axis) {
  return inertialToFixed( x, Δt, -ω, axis );
}
