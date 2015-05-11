# orb

orb offers a few simple methods for several common problems of orbital mechanics, like transformations between various coordinate systems and simple orbit propagation using Keplerian elements.

[![npm version](https://badge.fury.io/js/orbjs.svg)](http://badge.fury.io/js/orbjs)
[![Build Status](https://travis-ci.org/benelsen/orb.png)](https://travis-ci.org/benelsen/orb)
[![Join the chat at https://gitter.im/benelsen/orb](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/benelsen/orb?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Installation

```sh
npm install orbjs
```

## Usage

### ES5 - CommonJS

```javascript
var orb = require('orbjs');
```

### ES5 - Browser

```html
<script src="dist/orb.min.js"></script>
```

### ES6

```javascript
import orb from 'orbjs/src/orb';
```

## API

### orb.constants
[#](src/constants/common.js) orb.constants.common

[#](src/constants/time.js) orb.constants.time

[#](src/constants/earth.js#L4) orb.constants.earth

[#](src/constants/earth.js#L18) orb.constants.earth.wgs84

[#](src/constants/earth.js#L29) orb.constants.earth.grs80

### orb.common
[#](src/common/angular.js#L2) orb.common.**deg2rad**(deg) Converts degree to radian

[#](src/common/angular.js#L6) orb.common.**rad2deg**(rad) Converts radian to degree

### orb.time
[#](src/time/conversions.js#L10) orb.time.**JDtoMJD**(jd) JD to MJD [days]

[#](src/time/conversions.js#L15) orb.time.**MJDtoJD**(mjd) MJD to JD [days]

[#](src/time/conversions.js#L20) orb.time.**TAItoTT**(tai) TAI to TT

[#](src/time/conversions.js#L25) orb.time.**TTtoTAI**(tt) TT to TAI

[#](src/time/conversions.js#L30) orb.time.**TAItoUTC**(tai) TAI to UTC

[#](src/time/conversions.js#L36) orb.time.**UTCtoTAI**(utc) UTC to TAI

[#](src/time/conversions.js#L40) orb.time.**TAItoGPS**(tai) TAI to GPS

[#](src/time/conversions.js#L45) orb.time.**GPStoTAI**(gps) GPS to TAI

[#](src/time/conversions.js#L50) orb.time.**UTCtoGPS**(utc) UTC to GPS

[#](src/time/conversions.js#L55) orb.time.**GPStoUTC**(gps) GPS to UTC

[#](src/time/index.js#L2) orb.time.**leapSeconds**(date) Amount of leap seconds that occurred before `date`. `date` is a JS Date object.

[#](src/time/dateToJD.js#L13) orb.time.**dateToJD**(date) Convert a date to Julian Date. `date` is either a Date object, or an array of the form [y, m, d, h, m, s].

### orb.transformations
[#](src/transformations/spherical.js#L2) orb.transformations.**sphericalToCartesian**(x)

- Input:
	* x: [λ, φ, r] Spherical (longitude, (geocentric) latitude, radius)
- Output:
	* x: [x, y, z] Cartesian

[#](src/transformations/spherical.js#L13) orb.transformations.**cartesianToSpherical**(x)

- Input:
	* x: [x, y, z] Cartesian
- Output:
	* x: [λ, φ, r] Spherical (longitude, (geocentric) latitude, radius)

[#](src/transformations/ellipsoidal.js#L4) orb.transformations.**ellipsoidalToCartesian**(x, a, e)

- Input:
	* x: [L, β] Ellipsoidal (longitude, reduced latitude)
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Cartesian

[#](src/transformations/ellipsoidal.js#L17) orb.transformations.**cartesianToEllipsoidal**(x, a, e)

- Input:
	* x: [x, y, z] Cartesian
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [L, β] Ellipsoidal (longitude, reduced latitude)

[#](src/transformations/geodetic.js#L4) orb.transformations.**geodeticToCartesian**(x, a, e)

- Input:
	* x: [L, B, h] Geodetic (longitude, geodetic latitude, height above ellipsoid)
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Cartesian

[#](src/transformations/geodetic.js#L17) orb.transformations.**cartesianToGeodetic**(x, a, e)

- Input:
	* x: [x, y, z] Cartesian
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [L, B, h] Geodetic (longitude, geodetic latitude, height above ellipsoid)

[#](src/transformations/orbitalPlaneToInertial.js#L3) orb.transformations.**orbitalPlaneToInertial**(x, Ω, ω, i)

- Input:
	* x: [x, y] Position of object in orbital plane
	* Ω: right ascension of the ascending node
	* ω: argument of periapsis
	* i: inclination
- Output:
	* x: [x, y, z] Inertial

[#](src/transformations/inertialToFixed.js#L4) orb.transformations.**inertialToFixed**(x, Δt, ω, axis)

- Input:
	* x: [x, y, z] Inertial
	* Δt: time since x1 axis of inertial and fixed were congruent
	* ω: rotational speed of body
	* axis: 1, 2 or 3
- Output:
	* x: [x, y, z] Fixed

[#](src/transformations/inertialToFixed.js#L8) orb.transformations.**fixedToInertial**(x, Δt, ω, axis)

- Input:
	* x: [x, y, z] Fixed
	* Δt: time since x1 axis of inertial and fixed were congruent
	* ω: rotational speed of body
	* axis: 1, 2 or 3
- Output:
	* x: [x, y, z] Inertial

[#](src/transformations/fixedToTopocentric.js#L6) orb.transformations.**fixedToTopocentric**(x, obs, a, e, nwu)

- Input:
	* x: [x, y, z] Fixed
	* obs: [L, B, h]
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Topocentric

[#](src/transformations/fixedToTopocentric.js#L37) orb.transformations.**topocentricToFixed**(x, obs, a, e, nwu)

- Input:
	* x: [x, y, z] Topocentric
	* obs: [L, B, h]
	* a: semimajor-axis of body
	* e: eccentricity of body
- Output:
	* x: [x, y, z] Fixed

[#](src/transformations/topocentricToHorizontal.js#L5) orb.transformations.**topocentricToHorizontal**(x)

- Input:
	* x: [x, y, z] Topocentric
- Output:
	* x: [azimuth, elevation, distance] Horizontal

[#](src/transformations/topocentricToHorizontal.js#L21) orb.transformations.**horizontalToTopocentric**(x)

- Input:
	* x: [azimuth, elevation, distance] Horizontal
- Output:
	* x: [x, y, z] Topocentric

### orb.position
[#](src/position/keplerEquation.js#L2) orb.position.**keplerEquation**(e, M)

- Input:
	* e: eccentricity
	* M: mean anomaly
- Output:
	* ν: true anomaly

[#](src/position/keplerian.js#L6) orb.position.**keplerian**(a, e, i, Ω, ω, t, t0, M0, m1, m2)

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

[#](src/position/stateToKepler.js#L5) orb.position.**stateToKepler**(x, xDot, t, m1, m2)

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


### orb.vector
Common vector and matrix operations, these are only included to make dependencies unnecessary.
Don’t use these, there are a lot of better, more comprehensive and well tested libraries to do this.

## License

  [MIT](LICENSE)
