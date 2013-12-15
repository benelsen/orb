!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):"undefined"!=typeof window?window.orb=e():"undefined"!=typeof global?global.orb=e():"undefined"!=typeof self&&(self.orb=e())}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
  "use strict";
  var orb = {
    version: "0.0.1"
  };
  orb.constants = {};
  orb.constants.common = {
    c: 299792458,
    // Speed of light
    G: 6.67428e-11
  };
  /**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */
  orb.constants.time = {
    // MJD = JD - 2400000.5 days
    MJDJD: -2400000.5,
    // days
    // TT = TAI + 32.184 seconds
    TTTAI: +32.184,
    // DUT1 = UT1 - UTC = -0.1
    // -0.1 seconds beginning 21 Nov 2013 at 0000 UTC
    DUT1: -.1,
    // TAI - UTC = 35.000 seconds (Leap seconds) (valid until at least 2013-12-31)
    TAIUTC: +35,
    // TAI - GPS = 19.000 seconds (fixed)
    TAIGPS: +19
  };
  // IERS numerical standards
  // (as per Technical Note No.36 Table 1.1)
  orb.constants.earth = {
    a: 6378136.6,
    // Equatorial radius
    f: .003352819697896193,
    // Flattening
    invf: 298.25642,
    // Reciprocal flattening
    e: .08181930087617338,
    // Eccentricity
    e2: .006694397995865785,
    // Eccentricity squared
    J2: .0010826359,
    // Dynamical form factor
    ω: 729211514670698e-19,
    // Rotation rate
    M: 5.9721986e24,
    // Mass [kg]
    GM: 3986004418e5,
    // Geocentric gravitational constant
    ε0: 23.439279444444445,
    // Obliquity of the ecliptic at J2000.0
    θ0: 4.894961212823756
  };
  orb.constants.grs80 = {
    GM: 3986005e8,
    a: 6378137,
    J2: .00108263,
    ω: 7292115e-11,
    f: .0033528106811836376,
    invf: 298.2572221008827,
    e: .08181919104283185,
    e2: .006694380022903416
  };
  orb.constants.wgs84 = {
    a: 6378137,
    f: .0033528106647474805,
    invf: 298.257223563,
    e: .08181919084262149,
    e2: .0066943799901413165
  };
  orb.common = {};
  orb.common.deg2rad = function(deg) {
    return deg * Math.PI / 180;
  };
  orb.common.rad2deg = function(rad) {
    return rad * 180 / Math.PI;
  };
  orb.vector = orb.v = {};
  orb.vector.matrixMultiplication = function(m1, m2) {
    if (m2.length === 9) {
      return [ m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6], m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7], m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8], m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6], m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7], m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8], m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6], m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7], m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8] ];
    } else if (m2.length === 3) {
      return [ m1[0] * m2[0] + m1[1] * m2[1] + m1[2] * m2[2], m1[3] * m2[0] + m1[4] * m2[1] + m1[5] * m2[2], m1[6] * m2[0] + m1[7] * m2[1] + m1[8] * m2[2] ];
    }
    return null;
  };
  orb.vector.mm = orb.vector.matrixMultiplication;
  /**
 * rotationMatrix() returns a matrix for a coordinate system rotation
 * of α radians around axis e relative to the origin.
 * These rotation matrices are for CRS transformations not geometric
 * point transformations!
 *
 * @param <Number> α [radians]
          <Integer> e {1,2,3}
 * @return <[Number]> // 3x3 matrix represented as Array with 9 elements
 */
  orb.vector.rotationMatrix = function(α, e) {
    α = α % (2 * Math.PI);
    var cosα, sinα;
    if (α === 0) {
      cosα = 1;
      sinα = 0;
    } else if (α === Math.PI / 2 || α === -3 / 2 * Math.PI) {
      cosα = 0;
      sinα = 1;
    } else if (α === Math.PI || α === -Math.PI) {
      cosα = -1;
      sinα = 0;
    } else if (α === 3 / 2 * Math.PI || α === -Math.PI / 2) {
      cosα = 0;
      sinα = -1;
    } else {
      cosα = Math.cos(α);
      sinα = Math.sin(α);
    }
    switch (e) {
     case 1:
      return [ 1, 0, 0, 0, cosα, sinα, 0, -sinα, cosα ];

     case 2:
      return [ cosα, 0, -sinα, 0, 1, 0, sinα, 0, cosα ];

     case 3:
      return [ cosα, sinα, 0, -sinα, cosα, 0, 0, 0, 1 ];

     default:
      throw new Error("rotation axis has to be 1, 2 or 3");
    }
  };
  orb.vector.r = orb.vector.rotationMatrix;
  orb.vector.mirrorMatrix = function(e) {
    var q = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
    q[--e * 4] *= -1;
    return q;
  };
  orb.vector.q = orb.vector.mirrorMatrix;
  orb.time = {};
  /**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */
  // JD -> MJD [days]
  orb.time.JDtoMJD = function(jd) {
    return jd + orb.constants.time.MJDJD;
  };
  // MJD -> JD [days]
  orb.time.MJDtoJD = function(mjd) {
    return mjd - orb.constants.time.MJDJD;
  };
  // TAI -> TT
  orb.time.TAItoTT = function(tai) {
    return tai + orb.constants.time.TTTAI;
  };
  // TT -> TAI
  orb.time.TTtoTAI = function(tt) {
    return tt - orb.constants.time.TTTAI;
  };
  // TAI -> UTC
  orb.time.TAItoUTC = function(tai) {
    return tai - orb.constants.time.TAIUTC;
  };
  // UTC -> TAI
  orb.time.UTCtoTAI = function(utc) {
    return utc + orb.constants.time.TAIUTC;
  };
  // TAI -> GPS
  orb.time.TAItoGPS = function(tai) {
    return tai - orb.constants.time.TAIGPS;
  };
  // GPS -> TAI
  orb.time.GPStoTAI = function(gps) {
    return gps + orb.constants.time.TAIGPS;
  };
  // UTC -> GPS
  orb.time.UTCtoGPS = function(utc) {
    return orb.time.TAItoGPS(orb.time.UTCtoTAI(utc));
  };
  // GPS -> UTC
  orb.time.GPStoUTC = function(gps) {
    return orb.time.TAItoUTC(orb.time.GPStoTAI(gps));
  };
  var leapSecondDates = [ new Date("1972-06-30T23:59:59.999Z"), new Date("1972-12-31T23:59:59.999Z"), new Date("1973-12-31T23:59:59.999Z"), new Date("1974-12-31T23:59:59.999Z"), new Date("1975-12-31T23:59:59.999Z"), new Date("1976-12-31T23:59:59.999Z"), new Date("1977-12-31T23:59:59.999Z"), new Date("1978-12-31T23:59:59.999Z"), new Date("1979-12-31T23:59:59.999Z"), new Date("1981-06-30T23:59:59.999Z"), new Date("1982-06-30T23:59:59.999Z"), new Date("1983-06-30T23:59:59.999Z"), new Date("1985-06-30T23:59:59.999Z"), new Date("1987-12-31T23:59:59.999Z"), new Date("1989-12-31T23:59:59.999Z"), new Date("1990-12-31T23:59:59.999Z"), new Date("1992-06-30T23:59:59.999Z"), new Date("1993-06-30T23:59:59.999Z"), new Date("1994-06-30T23:59:59.999Z"), new Date("1995-12-31T23:59:59.999Z"), new Date("1997-06-30T23:59:59.999Z"), new Date("1998-12-31T23:59:59.999Z"), new Date("2005-12-31T23:59:59.999Z"), new Date("2008-12-31T23:59:59.999Z"), new Date("2012-06-30T23:59:59.999Z") ];
  orb.time.leapSeconds = function(date) {
    return 10 + leapSecondDates.filter(function(d) {
      return date > d;
    }).length;
  };
  orb.transformations = {};
  // x: [ λ, φ, r ]
  orb.transformations.sphericalToCartesian = function(x) {
    return [ x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
    x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
    x[2] * Math.sin(x[1]) ];
  };
  // x: [ x, y, z ]
  orb.transformations.cartesianToSpherical = function(x) {
    return [ Math.atan2(x[1], x[0]), // λ
    Math.atan2(x[2], Math.sqrt(x[0] * x[0] + x[1] * x[1])), // φ
    Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]) ];
  };
  // x: [ L, β ]
  orb.transformations.ellipsoidalToCartesian = function(x, a, e) {
    if (a === undefined || e === undefined) {
      a = orb.constants.grs80.a;
      e = orb.constants.grs80.e;
    }
    var b = Math.sqrt(a * a * (1 - e * e));
    return [ a * Math.cos(x[1]) * Math.cos(x[0]), // x
    a * Math.cos(x[1]) * Math.sin(x[0]), // y
    b * Math.sin(x[1]) ];
  };
  // x: [ x, y, z ]
  orb.transformations.cartesianToEllipsoidal = function(x, a, e) {
    if (a === undefined || e === undefined) {
      a = orb.constants.grs80.a;
      e = orb.constants.grs80.e;
    }
    var p = Math.sqrt(x[0] * x[0] + x[1] * x[1]), b = Math.sqrt(a * a * (1 - e * e));
    return [ Math.atan2(x[1], x[0]), // L
    Math.atan2(x[2] * a, p * b) ];
  };
  // x: [ L, B, h ]
  orb.transformations.geodeticToCartesian = function(x, a, e) {
    if (a === undefined || e === undefined) {
      a = orb.constants.earth.a;
      e = orb.constants.earth.e;
    }
    var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(x[1]), 2));
    //
    return [ (N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
    (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
    (N * (1 - e * e) + x[2]) * Math.sin(x[1]) ];
  };
  // x: [ x, y, z ]
  orb.transformations.cartesianToGeodetic = function(x, a, e) {
    if (a === undefined || e === undefined) {
      a = orb.constants.earth.a;
      e = orb.constants.earth.e;
    }
    var L = Math.atan2(x[1], x[0]), p = Math.sqrt(x[0] * x[0] + x[1] * x[1]);
    var B_ = Math.atan2(x[2], p), N, B;
    var i = 0;
    while (i < 100) {
      N = a / Math.sqrt(1 - Math.pow(e * Math.sin(B_), 2));
      var Z_ = x[2] + e * e * N * Math.sin(B_);
      B = Math.atan2(Z_, p);
      if (Math.abs(B - B_) < 1e-15) {
        break;
      } else {
        B_ = B;
      }
      i++;
    }
    var h = p / Math.cos(B) - N;
    return [ L, B, h ];
  };
  orb.transformations.orbitalPlaneToInertial = function(x, Ω, ω, i) {
    return orb.v.mm(orb.v.r(-Ω, 3), orb.v.mm(orb.v.r(-i, 1), orb.v.mm(orb.v.r(-ω, 3), x)));
  };
  orb.transformations.inertialToFixed = function(x, Δt, ω, axis) {
    if (!axis) axis = 3;
    if (!ω) ω = orb.constants.earth.ω;
    return orb.v.mm(orb.v.r(ω * Δt, 3), x);
  };
  orb.transformations.fixedToInertial = function(x, Δt, ω, axis) {
    return orb.transformations.inertialToFixed(x, Δt, -ω, axis);
  };
  // x: [x, y, z], obs: [L, B, h]
  orb.transformations.fixedToTopocentric = function(x, obs, a, e, nwu) {
    if (!a) a = orb.constants.earth.a;
    if (!e && e !== 0) e = orb.constants.earth.e;
    var xObserver = orb.transformations.geodeticToCartesian(obs, a, e);
    var Δx = x.map(function(xi, i) {
      return xi - xObserver[i];
    });
    var rTopo;
    if (nwu) {
      rTopo = orb.v.mm(orb.v.r(Math.PI / 2 - obs[1], 2), orb.v.r(obs[0], 3));
    } else {
      rTopo = orb.v.mm(orb.v.q(1), orb.v.mm(orb.v.r(Math.PI / 2 - obs[1], 2), orb.v.r(obs[0], 3)));
    }
    return orb.v.mm(rTopo, Δx);
  };
  orb.transformations.topocentricToFixed = function(x, obs, a, e, nwu) {
    if (!a) a = orb.constants.earth.a;
    if (!e && e !== 0) e = orb.constants.earth.e;
    var xObserver = orb.transformations.geodeticToCartesian(obs, a, e);
    var rFixed;
    if (nwu) {
      rFixed = orb.v.mm(orb.v.r(-obs[0], 3), orb.v.r(obs[1] - Math.PI / 2, 2));
    } else {
      rFixed = orb.v.mm(orb.v.mm(orb.v.r(-obs[0], 3), orb.v.r(obs[1] - Math.PI / 2, 2)), orb.v.q(1));
    }
    var xFixed = orb.v.mm(rFixed, x);
    return xFixed.map(function(xi, i) {
      return xi + xObserver[i];
    });
  };
  /**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
  orb.transformations.topocentricToHorizontal = function(x) {
    var azimuth = (2 * Math.PI + Math.atan2(x[1], x[0])) % (2 * Math.PI);
    return [ azimuth, // Azimuth
    Math.atan2(x[2], Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2))), // Elevation
    Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2)) ];
  };
  /**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
  orb.transformations.horizontalToTopocentric = function(x) {
    return [ x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
    x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
    x[2] * Math.sin(x[1]) ];
  };
  orb.position = {};
  orb.position.keplerEquation = function(e, M) {
    var E;
    if (e < .8) {
      E = M;
    } else {
      E = Math.PI;
    }
    var dE = 1, i = 0;
    while (Math.abs(dE) > 1e-18 && i < 100) {
      dE = (M + e * Math.sin(E) - E) / (1 - e * Math.cos(E));
      E = E + dE;
      i++;
    }
    return E;
  };
  orb.position.simple = function(a, e, i, Ω, ω, t, T0, M0, m1, m2) {
    if (!M0) M0 = 0;
    var GM = orb.constants.earth.GM;
    if (m1) GM = orb.constants.common.G * m1;
    if (m2) m2 = orb.constants.common.G * (m1 + m2);
    var p = a * (1 - e * e);
    // Mean motion
    var n = Math.sqrt(GM / Math.pow(a, 3));
    // Mean anomaly at t
    var M = M0 + n * (t - T0);
    // Eccentric anomaly
    var E = orb.position.keplerEquation(e, M);
    // True anomaly
    var ν = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
    // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );
    // radius
    var r = p / (1 + e * Math.cos(ν));
    // position in orbital plane
    var x_o = [ r * Math.cos(ν), r * Math.sin(ν), 0 ];
    var xdot_o = [ -Math.sqrt(GM / p) * Math.sin(ν), Math.sqrt(GM / p) * (e + Math.cos(ν)), 0 ];
    var x = orb.transformations.orbitalPlaneToInertial(x_o, Ω, ω, i), xdot = orb.transformations.orbitalPlaneToInertial(xdot_o, Ω, ω, i);
    return [ x, xdot ];
  };
  return orb;
}();
},{}]},{},[1])
(1)
});
;