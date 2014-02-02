!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.orb=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = _dereq_('./src/orb.js');

},{"./src/orb.js":8}],2:[function(_dereq_,module,exports){
var angular = {};

angular.deg2rad = function(deg) {
  return deg * Math.PI / 180;
};

angular.rad2deg = function(rad) {
  return rad * 180 / Math.PI;
};

exports.angular = angular;

},{}],3:[function(_dereq_,module,exports){
var common = {};

var angular = _dereq_('./angular').angular;
for ( var key in angular ) {
  common[key] = angular[key];
}

exports.common = common;

},{"./angular":2}],4:[function(_dereq_,module,exports){
var common = {
  c: 299792458,  // Speed of light
  G: 6.67428e-11 // Gravitational constant [m^3 kg^-1]
};

exports.common = common;

},{}],5:[function(_dereq_,module,exports){
// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

var earth = {
  a:    6378136.6, // Equatorial radius
  f:    0.003352819697896193, // Flattening
  invf: 298.25642, // Reciprocal flattening
  e:    0.08181930087617338, // Eccentricity
  e2:   0.006694397995865785, // Eccentricity squared
  J2:   1.0826359e-3, // Dynamical form factor
  ω:    7.29211514670698e-5, // Rotation rate
  M:    5.9721986e24, // Mass [kg]
  GM:   3.986004418e14, // Geocentric gravitational constant
  ε0:   23.439279444444445, // Obliquity of the ecliptic at J2000.0
  θ0:   4.894961212823756, // Earth Rotation Angle (ERA) J2000.0
};

earth.grs80 = {
  GM:   3.986005e14,
  a:    6378137,
  J2:   1.08263e-3,
  ω:    7.292115e-5,
  f:    0.0033528106811836376,
  invf: 298.257222100882711243,
  e:    0.08181919104283185,
  e2:   0.006694380022903416
};

earth.wgs84 = {
  a:    6378137,
  f:    0.0033528106647474805,
  invf: 298.257223563,
  e:    0.08181919084262149,
  e2:   0.0066943799901413165
};

exports.earth = earth;

},{}],6:[function(_dereq_,module,exports){
var constants = {};

constants.common = _dereq_('./common').common;
constants.earth = _dereq_('./earth').earth;
constants.time = _dereq_('./time').time;

exports.constants = constants;

},{"./common":4,"./earth":5,"./time":7}],7:[function(_dereq_,module,exports){
/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

var time = {

  // MJD = JD - 2400000.5 days
  MJDJD  : -2400000.5, // days

  // TT = TAI + 32.184 seconds
  TTTAI  : +32.184,

  // DUT1 = UT1 - UTC = -0.1
  // -0.2 seconds beginning 20 February 2014 at 0000 UTC
  DUT1   : -0.200,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid until at least 2013-12-31)
  TAIUTC : +35.000,

  // TAI - GPS = 19.000 seconds (fixed)
  TAIGPS : +19.000
};

exports.time = time;

},{}],8:[function(_dereq_,module,exports){

var orb = { version: '0.1.2' };

orb.common = _dereq_('./common').common;
orb.constants = _dereq_('./constants').constants;
orb.time = _dereq_('./time').time;
orb.vector = orb.v = _dereq_('./vector').vector;
orb.transformations = _dereq_('./transformations').transformations;
orb.position = _dereq_('./position').position;

module.exports = orb;

},{"./common":3,"./constants":6,"./position":9,"./time":14,"./transformations":19,"./vector":24}],9:[function(_dereq_,module,exports){
var position = {};

position.simple = _dereq_('./simple').simple;
position.keplerEquation = _dereq_('./keplerEquation').keplerEquation;

exports.position = position;

},{"./keplerEquation":10,"./simple":11}],10:[function(_dereq_,module,exports){
var keplerEquation = function(e, M) {
  var E;

  if ( e < 0.8 ) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1,
      i = 0;
  while ( Math.abs(dE) > 1e-18 && i < 100 ) {
    dE = (M + e*Math.sin(E) - E) / (1 - e*Math.cos(E));
    E = E + dE;
    i++;
  }

  return E;
};

exports.keplerEquation = keplerEquation;

},{}],11:[function(_dereq_,module,exports){
var constants = _dereq_('../constants').constants,
    keplerEquation = _dereq_('./keplerEquation').keplerEquation,
    orbitalPlaneToInertial = _dereq_('../transformations/orbitalPlaneToInertial').orbitalPlaneToInertial;

var simple = function(a, e, i, Ω, ω, t, t0, M0, m1, m2) {

  if ( !M0 ) M0 = 0;

  var GM = constants.earth.GM;

  if ( m1 ) GM = constants.common.G * m1;

  if ( m2 ) GM = constants.common.G * (m1 + m2);

  var p = a * (1 - e*e);

  // Mean motion
  var n = Math.sqrt( GM / Math.pow(a,3) );

  // Mean anomaly at t
  var M = ( M0 + (n * ( t - t0 )) );

  // Eccentric anomaly
  var E = keplerEquation(e, M);

  // True anomaly
  var ν = 2*Math.atan( Math.sqrt((1+e)/(1-e)) * Math.tan(E/2) );
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var x_o = [
    r * Math.cos(ν),
    r * Math.sin(ν),
    0
  ];

  var xdot_o = [
    -Math.sqrt(GM/p) * Math.sin(ν),
     Math.sqrt(GM/p) * (e + Math.cos(ν)),
     0
  ];

  var x = orbitalPlaneToInertial(x_o, Ω, ω, i),
      xdot = orbitalPlaneToInertial(xdot_o, Ω, ω, i);

  return [x, xdot];
};

exports.simple = simple;

},{"../constants":6,"../transformations/orbitalPlaneToInertial":21,"./keplerEquation":10}],12:[function(_dereq_,module,exports){
/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var timeConstants = _dereq_('../constants/time').time;

var conversions = {};

// JD -> MJD [days]
conversions.JDtoMJD = function(jd) {
  return jd + timeConstants.MJDJD;
};

// MJD -> JD [days]
conversions.MJDtoJD = function(mjd) {
  return mjd - timeConstants.MJDJD;
};

// TAI -> TT
conversions.TAItoTT = function(tai) {
  return tai + timeConstants.TTTAI;
};

// TT -> TAI
conversions.TTtoTAI = function(tt) {
  return tt - timeConstants.TTTAI;
};

// TAI -> UTC
conversions.TAItoUTC = function(tai) {
  return tai - timeConstants.TAIUTC;
};

// UTC -> TAI
conversions.UTCtoTAI = function(utc) {
  return utc + timeConstants.TAIUTC;
};

// TAI -> GPS
conversions.TAItoGPS = function(tai) {
  return tai - timeConstants.TAIGPS;
};

// GPS -> TAI
conversions.GPStoTAI = function(gps) {
  return gps + timeConstants.TAIGPS;
};

// UTC -> GPS
conversions.UTCtoGPS = function(utc) {
  return conversions.TAItoGPS( conversions.UTCtoTAI(utc) );
};

// GPS -> UTC
conversions.GPStoUTC = function(gps) {
  return conversions.TAItoUTC( conversions.GPStoTAI(gps) );
};

exports.conversions = conversions;

},{"../constants/time":7}],13:[function(_dereq_,module,exports){

var dateToJD = function(date) {

  var y, m, d, h;

  if ( date instanceof Array ) {

    y = date[0];
    m = date[1];
    d = date[2];
    h = date[3] +
        date[4] / 60 +
        date[5] / 3600;

  } else if ( date instanceof Date ) {

    y = date.getUTCFullYear();
    m = date.getUTCMonth() + 1;
    d = date.getUTCDate();
    h = date.getUTCHours() +
      date.getUTCMinutes() / 60 +
      date.getUTCSeconds() / 3600;

  } else {
    throw new Error('date is of invalid type');
  }

  var f = m > 2 ? y : y - 1,
      g = m > 2 ? m : m + 12;

  var a = 2 - Math.floor( f / 100 ) + Math.floor( f / 400 );

  var jd = Math.floor( 365.25 * f ) + Math.floor( 30.6001 * ( g + 1 ) ) + d + a + 1720994.5;

  return jd + h / 24;

};

exports.dateToJD = dateToJD;

},{}],14:[function(_dereq_,module,exports){
var time = {};

var conversions = _dereq_('./conversions').conversions;
for ( var key in conversions ) {
  time[key] = conversions[key];
}

time.leapSeconds = _dereq_('./leapSeconds').leapSeconds;
time.dateToJD = _dereq_('./dateToJD').dateToJD;

exports.time = time;

},{"./conversions":12,"./dateToJD":13,"./leapSeconds":15}],15:[function(_dereq_,module,exports){
var leapSecondDates = [
  new Date("1972-06-30T23:59:59.999Z"),
  new Date("1972-12-31T23:59:59.999Z"),
  new Date("1973-12-31T23:59:59.999Z"),
  new Date("1974-12-31T23:59:59.999Z"),
  new Date("1975-12-31T23:59:59.999Z"),
  new Date("1976-12-31T23:59:59.999Z"),
  new Date("1977-12-31T23:59:59.999Z"),
  new Date("1978-12-31T23:59:59.999Z"),
  new Date("1979-12-31T23:59:59.999Z"),
  new Date("1981-06-30T23:59:59.999Z"),
  new Date("1982-06-30T23:59:59.999Z"),
  new Date("1983-06-30T23:59:59.999Z"),
  new Date("1985-06-30T23:59:59.999Z"),
  new Date("1987-12-31T23:59:59.999Z"),
  new Date("1989-12-31T23:59:59.999Z"),
  new Date("1990-12-31T23:59:59.999Z"),
  new Date("1992-06-30T23:59:59.999Z"),
  new Date("1993-06-30T23:59:59.999Z"),
  new Date("1994-06-30T23:59:59.999Z"),
  new Date("1995-12-31T23:59:59.999Z"),
  new Date("1997-06-30T23:59:59.999Z"),
  new Date("1998-12-31T23:59:59.999Z"),
  new Date("2005-12-31T23:59:59.999Z"),
  new Date("2008-12-31T23:59:59.999Z"),
  new Date("2012-06-30T23:59:59.999Z")
];

var leapSeconds = function(date) {

  return 10 + leapSecondDates.filter(function(d) {
    return date > d;
  }).length;

};

exports.leapSeconds = leapSeconds;

},{}],16:[function(_dereq_,module,exports){
// x: [ L, β ]
var earthConstants = _dereq_('../constants/earth').earth;

var ellipsoidalToCartesian = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = earthConstants.a;
    e = earthConstants.e;
  }

  var b = Math.sqrt( a*a * (1-e*e));

  return [
    a * Math.cos(x[1]) * Math.cos(x[0]), // x
    a * Math.cos(x[1]) * Math.sin(x[0]), // y
    b * Math.sin(x[1])                   // z
  ];

};

// x: [ x, y, z ]
var cartesianToEllipsoidal = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = earthConstants.a;
    e = earthConstants.e;
  }

  var p = Math.sqrt( x[0]*x[0] + x[1]*x[1] ),
      b = Math.sqrt( a*a * (1-e*e));

  return [
    Math.atan2( x[1], x[0] ), // L
    Math.atan2( x[2]*a, p*b ) // β
  ];

};

exports.ellipsoidalToCartesian = ellipsoidalToCartesian;
exports.cartesianToEllipsoidal = cartesianToEllipsoidal;

},{"../constants/earth":5}],17:[function(_dereq_,module,exports){
// x: [x, y, z], obs: [L, B, h]
var earthConstants = _dereq_('../constants/earth').earth,
    geodeticToCartesian = _dereq_('./geodetic').geodeticToCartesian,
    vector = _dereq_('../vector').vector;

var fixedToTopocentric = function(x, obs, a, e, nwu) {

  if ( !a ) a = earthConstants.a;
  if ( !e && e !== 0 ) e = earthConstants.e;

  var xObserver = geodeticToCartesian(obs, a, e);

  var Δx = x.map(function(xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if ( nwu ) {

    rTopo = vector.mm(
        vector.r( Math.PI/2 - obs[1], 2),
        vector.r( obs[0], 3)
      );

  } else {

    rTopo = vector.mm(
        vector.q(1), vector.mm(
          vector.r( Math.PI/2 - obs[1], 2),
          vector.r( obs[0], 3)
        )
      );

  }

  return vector.mm( rTopo, Δx );
};

var topocentricToFixed = function(x, obs, a, e, nwu) {

  if ( !a ) a = earthConstants.a;
  if ( !e && e !== 0 ) e = earthConstants.e;

  var xObserver = geodeticToCartesian(obs, a, e);

  var rFixed;

  if ( nwu ) {

    rFixed = vector.mm(
        vector.r( -obs[0], 3),
        vector.r( obs[1]- Math.PI/2, 2)
      );

  } else {

    rFixed = vector.mm(
        vector.mm(
          vector.r( -obs[0], 3),
          vector.r( obs[1]- Math.PI/2, 2)
        ), vector.q(1)
      );

  }

  var xFixed = vector.mm( rFixed, x );

  return xFixed.map(function(xi, i) {
    return xi + xObserver[i];
  });
};

exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;

},{"../constants/earth":5,"../vector":24,"./geodetic":18}],18:[function(_dereq_,module,exports){
// x: [ L, B, h ]
var earthConstants = _dereq_('../constants/earth').earth;

var geodeticToCartesian = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = earthConstants.a;
    e = earthConstants.e;
  }

  var N = a / Math.sqrt( 1 - Math.pow(e * Math.sin(x[1]), 2) ); //

  return [
    (N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
    (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
    (N * (1 - e*e) + x[2]) * Math.sin(x[1])       // z
  ];

};

// x: [ x, y, z ]
var cartesianToGeodetic = function(x, a, e) {
  if ( a === undefined || e === undefined ) {
    a = earthConstants.a;
    e = earthConstants.e;
  }

  var L = Math.atan2( x[1], x[0] ),
      p = Math.sqrt( x[0]*x[0] + x[1]*x[1] );

  var B_ = Math.atan2(x[2],p),
      N, B;

  var i = 0;
  while (i < 100) {
    N = a / Math.sqrt( 1 - Math.pow( e * Math.sin(B_), 2) );
    var Z_ = x[2] + e*e * N * Math.sin(B_);
    B = Math.atan2(Z_, p);

    if ( Math.abs(B - B_) < 1e-15 ) {
      break;
    } else {
      B_ = B;
    }
    i++;
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
};

exports.geodeticToCartesian = geodeticToCartesian;
exports.cartesianToGeodetic = cartesianToGeodetic;

},{"../constants/earth":5}],19:[function(_dereq_,module,exports){
var transformations = {};


transformations.sphericalToCartesian = _dereq_('./spherical').sphericalToCartesian;
transformations.cartesianToSpherical = _dereq_('./spherical').cartesianToSpherical;

transformations.ellipsoidalToCartesian = _dereq_('./ellipsoidal').ellipsoidalToCartesian;
transformations.cartesianToEllipsoidal = _dereq_('./ellipsoidal').cartesianToEllipsoidal;

transformations.geodeticToCartesian = _dereq_('./geodetic').geodeticToCartesian;
transformations.cartesianToGeodetic = _dereq_('./geodetic').cartesianToGeodetic;

transformations.fixedToTopocentric = _dereq_('./fixedToTopocentric').fixedToTopocentric;
transformations.topocentricToFixed = _dereq_('./fixedToTopocentric').topocentricToFixed;

transformations.inertialToFixed = _dereq_('./inertialToFixed').inertialToFixed;
transformations.fixedToInertial = _dereq_('./inertialToFixed').fixedToInertial;

transformations.orbitalPlaneToInertial = _dereq_('./orbitalPlaneToInertial').orbitalPlaneToInertial;

transformations.topocentricToHorizontal = _dereq_('./topocentricToHorizontal').topocentricToHorizontal;
transformations.horizontalToTopocentric = _dereq_('./topocentricToHorizontal').horizontalToTopocentric;

exports.transformations = transformations;

},{"./ellipsoidal":16,"./fixedToTopocentric":17,"./geodetic":18,"./inertialToFixed":20,"./orbitalPlaneToInertial":21,"./spherical":22,"./topocentricToHorizontal":23}],20:[function(_dereq_,module,exports){
var earthConstants = _dereq_('../constants/earth').earth,
    vector = _dereq_('../vector').vector;

var inertialToFixed = function(x, Δt, ω, axis) {

  if ( !axis ) axis = 3;
  if ( !ω ) ω = earthConstants.ω;

  return vector.mm( vector.r( ω * Δt, 3), x );
};

var fixedToInertial = function(x, Δt, ω, axis) {
  return inertialToFixed( x, Δt, -ω, axis );
};

exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;

},{"../constants/earth":5,"../vector":24}],21:[function(_dereq_,module,exports){
var vector = _dereq_('../vector').vector;

var orbitalPlaneToInertial = function(x, Ω, ω, i) {

  return vector.mm(
    vector.r(-Ω,3), vector.mm(
      vector.r(-i,1), vector.mm(
        vector.r(-ω,3), x
      )
    )
  );

};

exports.orbitalPlaneToInertial = orbitalPlaneToInertial;

},{"../vector":24}],22:[function(_dereq_,module,exports){
// x: [ λ, φ, r ]
var sphericalToCartesian = function(x) {

  return [
    x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
    x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
    x[2] * Math.sin(x[1])                   // z
  ];

};

// x: [ x, y, z ]
var cartesianToSpherical = function(x) {

  return [
    Math.atan2(x[1],x[0]),                                 // λ
    Math.atan2( x[2], Math.sqrt( x[0]*x[0] + x[1]*x[1]) ), // φ
    Math.sqrt( x[0]*x[0] + x[1]*x[1] + x[2]*x[2] )         // r
  ];

};

exports.sphericalToCartesian = sphericalToCartesian;
exports.cartesianToSpherical = cartesianToSpherical;


},{}],23:[function(_dereq_,module,exports){
/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
var topocentricToHorizontal = function(x) {

  var azimuth = ( 2*Math.PI + Math.atan2( x[1], x[0] ) ) % (2*Math.PI);

  return [
    azimuth, // Azimuth
    Math.atan2( x[2], Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2)) ), // Elevation
    Math.sqrt( Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2) ) // Distance
  ];

};

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
var horizontalToTopocentric = function(x) {

  return [
    x[2] * Math.cos( x[1] ) * Math.cos( x[0] ), // x
    x[2] * Math.cos( x[1] ) * Math.sin( x[0] ), // y
    x[2] * Math.sin( x[1] )                     // z
  ];

};

exports.topocentricToHorizontal = topocentricToHorizontal;
exports.horizontalToTopocentric = horizontalToTopocentric;

},{}],24:[function(_dereq_,module,exports){
var vector = {};

vector.matrixMultiplication = vector.mm = _dereq_('./matrixMultiplication').matrixMultiplication;
vector.mirrorMatrix         = vector.q  = _dereq_('./mirrorMatrix').mirrorMatrix;
vector.rotationMatrix       = vector.r  = _dereq_('./rotationMatrix').rotationMatrix;

exports.vector = vector;

},{"./matrixMultiplication":25,"./mirrorMatrix":26,"./rotationMatrix":27}],25:[function(_dereq_,module,exports){
var matrixMultiplication = function(m1, m2) {

  if ( m2.length === 9 ) {

    return [
      m1[0]*m2[0] + m1[1]*m2[3] + m1[2]*m2[6], m1[0]*m2[1] + m1[1]*m2[4] + m1[2]*m2[7], m1[0]*m2[2] + m1[1]*m2[5] + m1[2]*m2[8],
      m1[3]*m2[0] + m1[4]*m2[3] + m1[5]*m2[6], m1[3]*m2[1] + m1[4]*m2[4] + m1[5]*m2[7], m1[3]*m2[2] + m1[4]*m2[5] + m1[5]*m2[8],
      m1[6]*m2[0] + m1[7]*m2[3] + m1[8]*m2[6], m1[6]*m2[1] + m1[7]*m2[4] + m1[8]*m2[7], m1[6]*m2[2] + m1[7]*m2[5] + m1[8]*m2[8]
    ];

  } else if ( m2.length === 3 ) {

    return [
      m1[0]*m2[0] + m1[1]*m2[1] + m1[2]*m2[2],
      m1[3]*m2[0] + m1[4]*m2[1] + m1[5]*m2[2],
      m1[6]*m2[0] + m1[7]*m2[1] + m1[8]*m2[2]
    ];

  }

  return null;

};

exports.matrixMultiplication = matrixMultiplication;

},{}],26:[function(_dereq_,module,exports){
var mirrorMatrix = function(e) {

  var q = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  q[(--e)*4] *= -1;

  return q;
};

exports.mirrorMatrix = mirrorMatrix;

},{}],27:[function(_dereq_,module,exports){
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
var rotationMatrix = function(α, e) {

  α = α % ( 2*Math.PI );

  var cosα, sinα;

  if ( α === 0 ) {
    cosα = 1;
    sinα = 0;
  } else if ( α === Math.PI/2 || α === -3/2*Math.PI ) {
    cosα = 0;
    sinα = 1;
  } else if ( α === Math.PI || α === -Math.PI ) {
    cosα = -1;
    sinα = 0;
  } else if ( α === 3/2*Math.PI || α === -Math.PI/2 ) {
    cosα = 0;
    sinα = -1;
  } else {
    cosα = Math.cos(α);
    sinα = Math.sin(α);
  }

  switch(e) {
    case 1:
      return [
        1,     0,    0,
        0,  cosα, sinα,
        0, -sinα, cosα
      ];

    case 2:
      return [
        cosα, 0, -sinα,
           0, 1,     0,
        sinα, 0,  cosα
      ];

    case 3:
      return [
         cosα, sinα, 0,
        -sinα, cosα, 0,
            0,    0, 1
      ];

    default:
      throw new Error('rotation axis has to be 1, 2 or 3');

  }
};

exports.rotationMatrix = rotationMatrix;

},{}]},{},[1])
(1)
});