// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

const earth = {
  a:    6378136.6, // Equatorial radius [m]
  f:    0.003352819697896193, // Flattening
  invf: 298.25642, // Reciprocal flattening
  e:    0.08181930087617338, // Eccentricity
  e2:   0.006694397995865785, // Eccentricity squared
  J2:   1.0826359e-3, // Dynamical form factor
  ω:    7.29211514670698e-5, // Rotation rate [rad s-1]
  M:    5.9721986e24, // Mass [kg]
  GM:   3.986004418e14, // Geocentric gravitational constant [m3 s-2]
  ε0:   23.439279444444445, // Obliquity of the ecliptic at J2000.0 [deg]
  θ0:   4.894961212823756 // Earth Rotation Angle (ERA) J2000.0 [rad]
};

earth.grs80 = {
  GM:   3.986005e14, // Geocentric gravitational constant [m3 s-2]
  a:    6378137, // Equatorial radius [m]
  J2:   1.08263e-3, // Dynamical form factor
  ω:    7.292115e-5, // Rotation rate [rad s-1]
  f:    0.0033528106811836376, // Flattening
  invf: 298.257222100882711243, // Reciprocal flattening
  e:    0.08181919104283185, // Eccentricity
  e2:   0.006694380022903416 // Eccentricity squared
};

earth.wgs84 = {
  a:    6378137, // Equatorial radius [m]
  f:    0.0033528106647474805, // Flattening
  invf: 298.257223563, // Reciprocal flattening
  e:    0.08181919084262149, // Eccentricity
  e2:   0.0066943799901413165 // Eccentricity squared
};

export default earth;
