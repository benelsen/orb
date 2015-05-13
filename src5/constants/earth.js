"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

var earth = {
  a: 6378136.6, // Equatorial radius [m]
  f: 0.003352819697896193, // Flattening
  invf: 298.25642, // Reciprocal flattening
  e: 0.08181930087617338, // Eccentricity
  e2: 0.006694397995865785, // Eccentricity squared
  J2: 0.0010826359, // Dynamical form factor
  ω: 0.0000729211514670698, // Rotation rate [rad s-1]
  M: 5.9721986e+24, // Mass [kg]
  GM: 398600441800000, // Geocentric gravitational constant [m3 s-2]
  ε0: 23.439279444444445, // Obliquity of the ecliptic at J2000.0 [deg]
  θ0: 4.894961212823756 // Earth Rotation Angle (ERA) J2000.0 [rad]
};

earth.grs80 = {
  GM: 398600500000000, // Geocentric gravitational constant [m3 s-2]
  a: 6378137, // Equatorial radius [m]
  J2: 0.00108263, // Dynamical form factor
  ω: 0.00007292115, // Rotation rate [rad s-1]
  f: 0.0033528106811836376, // Flattening
  invf: 298.2572221008827, // Reciprocal flattening
  e: 0.08181919104283185, // Eccentricity
  e2: 0.006694380022903416 // Eccentricity squared
};

earth.wgs84 = {
  a: 6378137, // Equatorial radius [m]
  f: 0.0033528106647474805, // Flattening
  invf: 298.257223563, // Reciprocal flattening
  e: 0.08181919084262149, // Eccentricity
  e2: 0.0066943799901413165 // Eccentricity squared
};

exports["default"] = earth;
module.exports = exports["default"];