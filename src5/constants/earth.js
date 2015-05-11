"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

var earth = {
  a: 6378136.6, // Equatorial radius
  f: 0.003352819697896193, // Flattening
  invf: 298.25642, // Reciprocal flattening
  e: 0.08181930087617338, // Eccentricity
  e2: 0.006694397995865785, // Eccentricity squared
  J2: 0.0010826359, // Dynamical form factor
  ω: 0.0000729211514670698, // Rotation rate
  M: 5.9721986e+24, // Mass [kg]
  GM: 398600441800000, // Geocentric gravitational constant
  ε0: 23.439279444444445, // Obliquity of the ecliptic at J2000.0
  θ0: 4.894961212823756 // Earth Rotation Angle (ERA) J2000.0
};

earth.grs80 = {
  GM: 398600500000000,
  a: 6378137,
  J2: 0.00108263,
  ω: 0.00007292115,
  f: 0.0033528106811836376,
  invf: 298.2572221008827,
  e: 0.08181919104283185,
  e2: 0.006694380022903416
};

earth.wgs84 = {
  a: 6378137,
  f: 0.0033528106647474805,
  invf: 298.257223563,
  e: 0.08181919084262149,
  e2: 0.0066943799901413165
};

exports["default"] = earth;
module.exports = exports["default"];