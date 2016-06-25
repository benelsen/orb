# orb

orb offers a few simple methods for several common problems of orbital mechanics, like transformations between various coordinate systems and simple orbit propagation using Keplerian elements.

[![npm version](https://img.shields.io/npm/v/orbjs.svg)](https://www.npmjs.com/package/orbjs)
[![Build Status](https://travis-ci.org/benelsen/orb.svg?branch=v1)](https://travis-ci.org/benelsen/orb)
[![Dependency Status](https://david-dm.org/benelsen/orb/v1.svg)](https://david-dm.org/benelsen/orb/v1)
[![devDependency Status](https://david-dm.org/benelsen/orb/v1/dev-status.svg)](https://david-dm.org/benelsen/orb/v1#info=devDependencies)

## Installation

```sh
npm install orbjs
```

## Usage

```javascript
// ES Module
import orb from 'orbjs'

// CommonJS Module
var orb = require('orbjs')
```

```html
<!-- Browser -->
<script src="dist/orb.min.js"></script>
```

## API

### orb.constants
[#](lib/constants/common.js) orb.constants.common

[#](lib/constants/time.js) orb.constants.time

[#](lib/constants/earth.js) orb.constants.earth

[#](lib/constants/earth.js) orb.constants.earth.wgs84

[#](lib/constants/earth.js) orb.constants.earth.grs80

### orb.common
[#](lib/common/angular.js) orb.common.**deg2rad**(deg) Converts degree to radian

[#](lib/common/angular.js) orb.common.**rad2deg**(rad) Converts radian to degree

### orb.time
[#](lib/time/conversions.js) orb.time.**JDtoMJD**(jd) JD to MJD [days]

[#](lib/time/conversions.js) orb.time.**MJDtoJD**(mjd) MJD to JD [days]

[#](lib/time/conversions.js) orb.time.**TAItoTT**(tai) TAI to TT

[#](lib/time/conversions.js) orb.time.**TTtoTAI**(tt) TT to TAI

[#](lib/time/conversions.js) orb.time.**TAItoUTC**(tai) TAI to UTC

[#](lib/time/conversions.js) orb.time.**UTCtoTAI**(utc) UTC to TAI

[#](lib/time/conversions.js) orb.time.**TAItoGPS**(tai) TAI to GPS

[#](lib/time/conversions.js) orb.time.**GPStoTAI**(gps) GPS to TAI

[#](lib/time/conversions.js) orb.time.**UTCtoGPS**(utc) UTC to GPS

[#](lib/time/conversions.js) orb.time.**GPStoUTC**(gps) GPS to UTC

[#](lib/time/index.js) orb.time.**leapSeconds**(date) Amount of leap seconds that occurred before `date`. `date` is a JS Date object.

[#](lib/time/dateToJD.js) orb.time.**dateToJD**(date) Convert a date to Julian Date. `date` is either a Date object, an array of the form [Y, M, D, h, m, s, ms] or a Unix Offset (milliseconds).

### orb.transformations
[#](lib/transformations/spherical.js) orb.transformations.**sphericalToCartesian**(x)

- Input:
	* x: [λ, φ, r] Spherical (longitude, (geocentric) latitude, radius)
- Output:
	* x: [x, y, z] Cartesian

[#](lib/transformations/spherical.js) orb.transformations.**cartesianToSpherical**(x)

- Input:
	* x: [x, y, z] Cartesian
- Output:
	* x: [λ, φ, r] Spherical (longitude, (geocentric) latitude, radius)

[#](lib/transformations/ellipsoidal.js) orb.transformations.**ellipsoidalToCartesian**(x, a, e)

- Input:
	* x: [L, β] Ellipsoidal (longitude, reduced latitude)
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Cartesian

[#](lib/transformations/ellipsoidal.js) orb.transformations.**cartesianToEllipsoidal**(x, a, e)

- Input:
	* x: [x, y, z] Cartesian
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [L, β] Ellipsoidal (longitude, reduced latitude)

[#](lib/transformations/geodetic.js) orb.transformations.**geodeticToCartesian**(x, a, e)

- Input:
	* x: [L, B, h] Geodetic (longitude, geodetic latitude, height above ellipsoid)
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Cartesian

[#](lib/transformations/geodetic.js) orb.transformations.**cartesianToGeodetic**(x, a, e)

- Input:
	* x: [x, y, z] Cartesian
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [L, B, h] Geodetic (longitude, geodetic latitude, height above ellipsoid)

[#](lib/transformations/orbitalPlaneToInertial.js) orb.transformations.**orbitalPlaneToInertial**(x, Ω, ω, i)

- Input:
	* x: [x, y] Position of object in orbital plane
	* Ω: right ascension of the ascending node
	* ω: argument of periapsis
	* i: inclination
- Output:
	* x: [x, y, z] Inertial

[#](lib/transformations/inertialToFixed.js) orb.transformations.**inertialToFixed**(x, α, axis)

- Input:
	* x: [x, y, z] Inertial
	* α: angle between the inertial and fixed systems
	* axis: 1, 2 or 3
- Output:
	* x: [x, y, z] Fixed

[#](lib/transformations/inertialToFixed.js) orb.transformations.**fixedToInertial**(x, α, axis)

- Input:
	* x: [x, y, z] Fixed
	* α: angle between the fixed and inertial systems
	* axis: 1, 2 or 3
- Output:
	* x: [x, y, z] Inertial

[#](lib/transformations/fixedToTopocentric.js) orb.transformations.**fixedToTopocentric**(x, obs, a, e, nwu)

- Input:
	* x: [x, y, z] Fixed
	* obs: [L, B, h]
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Topocentric

[#](lib/transformations/fixedToTopocentric.js) orb.transformations.**topocentricToFixed**(x, obs, a, e, nwu)

- Input:
	* x: [x, y, z] Topocentric
	* obs: [L, B, h]
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Fixed

[#](lib/transformations/topocentricToHorizontal.js) orb.transformations.**topocentricToHorizontal**(x)

- Input:
	* x: [x, y, z] Topocentric
- Output:
	* x: [azimuth, elevation, distance] Horizontal

[#](lib/transformations/topocentricToHorizontal.js) orb.transformations.**horizontalToTopocentric**(x)

- Input:
	* x: [azimuth, elevation, distance] Horizontal
- Output:
	* x: [x, y, z] Topocentric

### orb.propagators

[#](lib/propagators/keplerian.js) orb.propagators.**keplerian**(a, e, i, Ω, ω, t, t0, M0, m1, m2)

- Input:
	* a: semimajor-axis of orbit
	* e: eccentricity
	* i: inclination
	* Ω: right ascension of the ascending node
	* ω: argument of periapsis
	* t: time t
	* t0: epoch of given elements
	* M0: mean anomaly at epoch (optional, default: 0)
	* m1: mass of body 1 (optional, default: GM = orb.constants.earth.GM)
	* m2: mass of body 2 (optional, default: 0)
- Output:
	* [ x, xDot ]
		* x: [x, y, z] Position in inertial CRS
		* xDot: [vx, vy, vz] Velocity in inertial CRS

[#](lib/propagators/stateToKepler.js) orb.propagators.**stateToKepler**(x, xDot, t, m1, m2)

- Input:
  * x: [x, y, z] Position in inertial CRS
  * xDot: [vx, vy, vz] Velocity in inertial CRS
  * t: time t
  * m1: mass of body 1 (optional, default: GM = orb.constants.earth.GM)
  * m2: mass of body 2 (optional, default: 0)
- Output:
  * [a, e, i, Ω, ω, T0]
    * a: semimajor-axis of orbit (or focal parameter for e = 1)
    * e: eccentricity
    * i: inclination
    * Ω: right ascension of the ascending node
    * ω: argument of periapsis
    * T0: time of perihelion passage

### orb.functions
[#](lib/functions/era.js) orb.functions.**era**(days)

- Input:
	* days: UT1 days since J2000.0
- Output:
	* era: ERA (radians)

[#](lib/functions/keplerEquation.js) orb.functions.**keplerEquation**(e, M)

- Input:
	* e: eccentricity
	* M: mean anomaly
- Output:
	* ν: true anomaly

[#](lib/functions/orbitalPeriodToSemimajorAxis.js) orb.functions.**orbitalPeriodToSemimajorAxis**(T, m1, m2)

- Input:
	* T: orbital period
	* m1: mass of object 1 (optional, default: GM = orb.constants.earth.GM)
	* m2: mass of object 2 (optional, default: 0)
- Output:
	* a: semi-major axis

[#](lib/functions/semimajorAxisToOrbitalPeriod.js) orb.functions.**semimajorAxisToOrbitalPeriod**(a, m1, m2)

- Input:
	* a: semi-major axis
	* m1: mass of object 1 (optional, default: GM = orb.constants.earth.GM)
	* m2: mass of object 2 (optional, default: 0)
- Output:
	* T: orbital period

### orb.vector
Common vector and matrix operations, these are only included to make dependencies unnecessary.
Don’t use these, there are a lot of better, more comprehensive and well tested libraries to do this.

## License

  [MIT](LICENSE)
