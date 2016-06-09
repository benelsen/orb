/* eslint-disable key-spacing */

// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

// Note: TCG/TCB, zero tide values
export const earth = {
  ω:    7.29211514670698e-5, // Rotation rate [rad s^-1]
  ε0:   23.43927944, // Obliquity of the ecliptic at J2000.0 [deg]
  θ0:   4.894961212823756, // Earth Rotation Angle (ERA) J2000.0 [rad]

  GM:   3.986004418e14, // Geocentric gravitational constant [m^3 s^-2]
  a:    6378136.6, // Equatorial radius [m]
  J2:   1.0826359e-3, // Dynamical form factor
  invf: 298.25642, // Reciprocal flattening
  g:    9.7803278, // Mean equatorial gravity [m s^-2]
  W0:   62636856.0, // Potential of the geoid [m^2 s^-2]
  R0:   6363672.6, // Geopotential scale factor (GM/W0) [m]
  H:    3273795e-9, // Dynamical flattening
  // Derived:
  f:    0.003352819697896193, // Flattening
  e:    0.08181930087617338, // Eccentricity
  e2:   0.006694397995865785, // Eccentricity squared
  M:    5.972186390142457e24 // Mass [kg]
}

earth.grs80 = {
  GM:   3.986005e14, // Geocentric gravitational constant [m^3 s^-2]
  a:    6378137, // Equatorial radius [m]
  J2:   1.08263e-3, // Dynamical form factor
  ω:    7.292115e-5, // Rotation rate [rad s^-1]
  invf: 298.257222101, // Reciprocal flattening
  // Derived:
  f:    0.003352810681182319, // Flattening
  e:    0.08181919104281579, // Eccentricity
  e2:   0.006694380022900787 // Eccentricity squared
}

earth.wgs84 = {
  a:    6378137, // Equatorial radius [m]
  invf: 298.257223563, // Reciprocal flattening
  // Derived:
  f:    0.0033528106647474805, // Flattening
  e:    0.08181919084262149, // Eccentricity
  e2:   0.0066943799901413165 // Eccentricity squared
}
