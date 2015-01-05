!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.orb=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = require('./src/orb.js');

},{"./src/orb.js":10}],2:[function(require,module,exports){
var leapSecondDates = [
  "1972-07-01T00:00:00.000Z",
  "1973-01-01T00:00:00.000Z",
  "1974-01-01T00:00:00.000Z",
  "1975-01-01T00:00:00.000Z",
  "1976-01-01T00:00:00.000Z",
  "1977-01-01T00:00:00.000Z",
  "1978-01-01T00:00:00.000Z",
  "1979-01-01T00:00:00.000Z",
  "1980-01-01T00:00:00.000Z",
  "1981-07-01T00:00:00.000Z",
  "1982-07-01T00:00:00.000Z",
  "1983-07-01T00:00:00.000Z",
  "1985-07-01T00:00:00.000Z",
  "1988-01-01T00:00:00.000Z",
  "1990-01-01T00:00:00.000Z",
  "1991-01-01T00:00:00.000Z",
  "1992-07-01T00:00:00.000Z",
  "1993-07-01T00:00:00.000Z",
  "1994-07-01T00:00:00.000Z",
  "1996-01-01T00:00:00.000Z",
  "1997-07-01T00:00:00.000Z",
  "1999-01-01T00:00:00.000Z",
  "2006-01-01T00:00:00.000Z",
  "2009-01-01T00:00:00.000Z",
  "2012-07-01T00:00:00.000Z"
].map(function (d) {
  return new Date(d).getTime();
});

module.exports = function leapSeconds(date) {

  if ( !date ) {
    date = Date.now();
  } else if ( date instanceof Date ) {
    date = date.getTime()
  } else if ( isFinite(date) ) {
    date = +date;
  } else {
    date = new Date(date).getTime();
  }

  return leapSecondDates.reduce(function(m, d) {
    return date >= d ? m+1 : m;
  }, 10);

};

},{}],3:[function(require,module,exports){
module.exports={
  "name": "orbjs",
  "version": "0.1.4",
  "description": "orb offers a few simple methods for several common problems of orbital mechanics",
  "keywords": [
    "orbit",
    "orbital mechanics",
    "orbit determination"
  ],
  "homepage": "https://github.com/benelsen/orb",
  "author": {
    "name": "Ben Elsen",
    "url": "http://benelsen.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/benelsen/orb.git"
  },
  "main": "index.js",
  "dependencies": {
    "leapseconds": "^1.1.1"
  },
  "devDependencies": {
    "browserify": "^6.3.3",
    "complexity-report": "^1.0.6",
    "jshint": "^2.5.10",
    "mocha": "^2.0.1",
    "should": "^4.3.0",
    "uglify-js": "^2.4.15"
  },
  "scripts": {
    "test": "node_modules/.bin/mocha --recursive --reporter spec --require should",
    "prepublish": "make build test jshint -B"
  },
  "license": "MIT"
}

},{}],4:[function(require,module,exports){
var angular = {};

angular.deg2rad = function(deg) {
  return deg * Math.PI / 180;
};

angular.rad2deg = function(rad) {
  return rad * 180 / Math.PI;
};

exports.angular = angular;

},{}],5:[function(require,module,exports){
var common = {};

var angular = require('./angular').angular;
for ( var key in angular ) {
  common[key] = angular[key];
}

exports.common = common;

},{"./angular":4}],6:[function(require,module,exports){
var common = {
  c: 299792458,  // Speed of light
  G: 6.67428e-11 // Gravitational constant [m^3 kg^-1]
};

exports.common = common;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
var constants = {};

constants.common = require('./common').common;
constants.earth = require('./earth').earth;
constants.time = require('./time').time;

exports.constants = constants;

},{"./common":6,"./earth":7,"./time":9}],9:[function(require,module,exports){
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

  // DUT1 = UT1 - UTC = -0.4 (valid from 2014-09-25 until 2014-12-25)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/17/bulletind-120.txt
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/17/bulletind-121.txt
  DUT1   : -0.400,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid from 2012-07-01 until at least 2015-06-30)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/16/bulletinc-048.txt
  TAIUTC : +35.000,

  // TAI - GPS = 19.000 seconds (fixed)
  TAIGPS : +19.000
};

exports.time = time;

},{}],10:[function(require,module,exports){

var orb = {
  version: require('../package.json').version
};

orb.common = require('./common').common;
orb.constants = require('./constants').constants;
orb.time = require('./time').time;
orb.vector = orb.v = require('./vector').vector;
orb.transformations = require('./transformations').transformations;
orb.position = require('./position').position;

module.exports = orb;

},{"../package.json":3,"./common":5,"./constants":8,"./position":11,"./time":16,"./transformations":21,"./vector":26}],11:[function(require,module,exports){
var position = {};

position.simple = require('./simple').simple;
position.keplerEquation = require('./keplerEquation').keplerEquation;

exports.position = position;

},{"./keplerEquation":12,"./simple":13}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
var constants = require('../constants').constants;
var keplerEquation = require('./keplerEquation').keplerEquation;
var orbitalPlaneToInertial = require('../transformations/orbitalPlaneToInertial').orbitalPlaneToInertial;

var keplerian = function keplerian (a, e, i, Ω, ω, t, t0, M0, m1, m2) {

  if ( !M0 ) {
    M0 = 0;
  }

  var GM = constants.earth.GM;

  if ( m1 ) {
    GM = constants.common.G * m1;
  }

  if ( m2 ) {
    GM = constants.common.G * (m1 + m2);
  }

  var p = a * (1 - e*e);

  // Mean motion
  var n = Math.sqrt( GM / Math.pow(a,3) );

  // Mean anomaly at t
  var M = M0 + n * ( t - t0 );

  // Eccentric anomaly
  var E = keplerEquation(e, M);

  // True anomaly
  var ν = 2 * Math.atan( Math.sqrt((1+e)/(1-e)) * Math.tan(E/2) );
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

  var x = orbitalPlaneToInertial(x_o, Ω, ω, i);
  var xdot = orbitalPlaneToInertial(xdot_o, Ω, ω, i);

  return [x, xdot];
};

exports.keplerian = keplerian;
exports.simple = exports.keplerian;

},{"../constants":8,"../transformations/orbitalPlaneToInertial":23,"./keplerEquation":12}],14:[function(require,module,exports){
/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var timeConstants = require('../constants/time').time,
    leapSeconds = require('./leapSeconds').leapSeconds;

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
  return tai - leapSeconds(new Date( tai*1e3 ));
};

// UTC -> TAI
conversions.UTCtoTAI = function(utc) {
  return utc + leapSeconds(new Date( utc*1e3 ));
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

},{"../constants/time":9,"./leapSeconds":17}],15:[function(require,module,exports){
/**
 * Converts a date to Julian Date
 *   Input and output are on the same continuous time scale.
 *   JD is usually specified in TT, corrections are needed
 *   to convert a UTC date to JD in TT: UTC -> TAI -> TT -> JD
 * 
 * @param {array, date, number} date - The date to be converted to JD
 *        This can either be an Array of form [year, month, day, hour, minute, second]
 *                         or a Date
 * @return {number} 
 */
var dateToJD = function dateToJD (date) {

  var y, m, d, h;

  if ( date instanceof Array ) {

    y = date[0];
    m = date[1];
    d = date[2];
    h = date[3] +
        date[4] / 60 +
        date[5] / 3600;

  } else if ( date instanceof Date || typeof date === 'number' ) {

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

},{}],16:[function(require,module,exports){
var time = {};

var conversions = require('./conversions').conversions;
for ( var key in conversions ) {
  time[key] = conversions[key];
}

time.leapSeconds = require('./leapSeconds').leapSeconds;
time.dateToJD = require('./dateToJD').dateToJD;

exports.time = time;

},{"./conversions":14,"./dateToJD":15,"./leapSeconds":17}],17:[function(require,module,exports){

exports.leapSeconds = require('leapseconds');

},{"leapseconds":2}],18:[function(require,module,exports){
// x: [ L, β ]
var earthConstants = require('../constants/earth').earth;

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

},{"../constants/earth":7}],19:[function(require,module,exports){
// x: [x, y, z], obs: [L, B, h]
var earthConstants = require('../constants/earth').earth,
    geodeticToCartesian = require('./geodetic').geodeticToCartesian,
    vector = require('../vector').vector;

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

},{"../constants/earth":7,"../vector":26,"./geodetic":20}],20:[function(require,module,exports){
// x: [ L, B, h ]
var earthConstants = require('../constants/earth').earth;

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

},{"../constants/earth":7}],21:[function(require,module,exports){
var transformations = {};


transformations.sphericalToCartesian = require('./spherical').sphericalToCartesian;
transformations.cartesianToSpherical = require('./spherical').cartesianToSpherical;

transformations.ellipsoidalToCartesian = require('./ellipsoidal').ellipsoidalToCartesian;
transformations.cartesianToEllipsoidal = require('./ellipsoidal').cartesianToEllipsoidal;

transformations.geodeticToCartesian = require('./geodetic').geodeticToCartesian;
transformations.cartesianToGeodetic = require('./geodetic').cartesianToGeodetic;

transformations.fixedToTopocentric = require('./fixedToTopocentric').fixedToTopocentric;
transformations.topocentricToFixed = require('./fixedToTopocentric').topocentricToFixed;

transformations.inertialToFixed = require('./inertialToFixed').inertialToFixed;
transformations.fixedToInertial = require('./inertialToFixed').fixedToInertial;

transformations.orbitalPlaneToInertial = require('./orbitalPlaneToInertial').orbitalPlaneToInertial;

transformations.topocentricToHorizontal = require('./topocentricToHorizontal').topocentricToHorizontal;
transformations.horizontalToTopocentric = require('./topocentricToHorizontal').horizontalToTopocentric;

exports.transformations = transformations;

},{"./ellipsoidal":18,"./fixedToTopocentric":19,"./geodetic":20,"./inertialToFixed":22,"./orbitalPlaneToInertial":23,"./spherical":24,"./topocentricToHorizontal":25}],22:[function(require,module,exports){
var earthConstants = require('../constants/earth').earth,
    vector = require('../vector').vector;

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

},{"../constants/earth":7,"../vector":26}],23:[function(require,module,exports){
var vector = require('../vector').vector;

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

},{"../vector":26}],24:[function(require,module,exports){
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


},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
var vector = {};

vector.matrixMultiplication = vector.mm = require('./matrixMultiplication').matrixMultiplication;
vector.mirrorMatrix         = vector.q  = require('./mirrorMatrix').mirrorMatrix;
vector.rotationMatrix       = vector.r  = require('./rotationMatrix').rotationMatrix;

exports.vector = vector;

},{"./matrixMultiplication":27,"./mirrorMatrix":28,"./rotationMatrix":29}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}]},{},[1])(1)
});