
# Changelog

> **Tags**:
> Added, Changed, Deprecated, Removed, Fixed, Security

## [Unreleased][Unreleased]

### Changed
- API for [inertialToFixed](src/transformations/inertialToFixed.js#L4) and [fixedToInertial](src/transformations/inertialToFixed.js#L8) changed. Both now take a vector, an angle of rotation and an axis instead of a vector, a time, an angular velocity and an axis.
- The time constants [DUT1](src/constants/time.js#L17) and [TAIUTC](src/constants/time.js#L22) have been marked as deprecated as they are no constants.
