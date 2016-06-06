import vector from '../vector/index'

export function inertialToFixed (x, α, axis = 3) {
  return vector.mm(vector.r(α, axis), x)
}

export function fixedToInertial (x, α, axis = 3) {
  return inertialToFixed(x, -α, axis)
}
