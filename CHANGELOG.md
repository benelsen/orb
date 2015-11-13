
# Changelog

> **Tags**:
> Added, Changed, Deprecated, Removed, Fixed, Security

## [Unreleased][Unreleased]

### Changed
- **orb.position** is now **orb.propagators**
- **orb.position.keplerEquation** has been moved to [orb.functions.keplerEquation](lib/functions/keplerEquation.js)
- API for [inertialToFixed](lib/transformations/inertialToFixed.js#L4) and [fixedToInertial](lib/transformations/inertialToFixed.js#L8) changed. Both now take a vector, an angle of rotation and an axis instead of a vector, a time, an angular velocity and an axis.

### Added
- [era](lib/functions/era.js#L7) to calculate the Earth Rotation Angle using amount of UT1 days since J2000.0 with the published ERA at J2000.0 and rate of advance from Petit, G., & Luzum, B. (2010). IERS conventions (2010)

### Fixed
- [dateToJD](lib/time/dateToJD.js) now has millisecond resolution

### Removed
- The time constants **DUT1** and **TAIUTC** have been removed.
