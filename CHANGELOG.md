
# Changelog

## 0.3.0

  * **Breaking Changes**
    * API for [inertialToFixed](src/transformations/inertialToFixed.js#L4) and [fixedToInertial](src/transformations/inertialToFixed.js#L8) changed. Both now take a vector, an angle of rotation and an axis instead of a vector, a time, an angular velocity and an axis.
