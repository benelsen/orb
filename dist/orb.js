(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.orb = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  "2012-07-01T00:00:00.000Z",
  "2015-07-01T00:00:00.000Z"
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

},{}],2:[function(require,module,exports){
module.exports={
  "name": "orbjs",
  "version": "1.0.0",
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
    "babelify": "^5.0.4",
    "browserify": "^9.0.3",
    "complexity-report": "^1.0.6",
    "eslint": "^0.17.1",
    "exorcist": "^0.1.6",
    "mocha": "^2.0.1",
    "should": "^4.3.0",
    "uglify-js": "^2.4.15"
  },
  "scripts": {
    "lint": "eslint src/",
    "browserify": "browserify src/orb.js -d -s orb -t [babelify --experimental --sourceMapRelative ./dist] | exorcist dist/orb.js.map > dist/orb.js",
    "uglifyjs": "uglifyjs dist/orb.js -o dist/orb.min.js --source-map dist/orb.min.js.map --source-map-url orb.min.js.map --in-source-map dist/orb.js.map",
    "build": "npm run browserify && npm run uglifyjs",
    "test": "node_modules/.bin/mocha --recursive --reporter spec --require should",
    "prepublish": "npm run build && npm run test"
  },
  "license": "MIT"
}

},{}],3:[function(require,module,exports){
"use strict";

exports.deg2rad = deg2rad;
exports.rad2deg = rad2deg;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}

},{}],4:[function(require,module,exports){
"use strict";

var _angular = require("./angular");

var deg2rad = _angular.deg2rad;
var rad2deg = _angular.rad2deg;

var common = {
  deg2rad: deg2rad, rad2deg: rad2deg
};

module.exports = common;

},{"./angular":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var c = 299792458;
exports.c = c;
var G = 6.67428e-11;
exports.G = G;

},{}],6:[function(require,module,exports){
// IERS numerical standards
// (as per Technical Note No.36 Table 1.1)

"use strict";

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

module.exports = earth;

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var common = _interopRequireWildcard(require("./common"));

var earth = _interopRequire(require("./earth"));

var time = _interopRequire(require("./time"));

var constants = {
  common: common, earth: earth, time: time
};

module.exports = constants;

},{"./common":5,"./earth":6,"./time":8}],8:[function(require,module,exports){
/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

"use strict";

var time = {

  // MJD = JD - 2400000.5 days
  MJDJD: -2400000.5, // days

  // TT = TAI + 32.184 seconds
  TTTAI: +32.184,

  // DUT1 = UT1 - UTC = -0.5 (valid from 2014-12-25)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/17/bulletind-121.txt
  DUT1: -0.5,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid from 2012-07-01 until at least 2015-06-30)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/16/bulletinc-048.txt
  TAIUTC: +35,

  // TAI - GPS = 19.000 seconds (fixed)
  TAIGPS: +19
};

module.exports = time;

},{}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var version = require("../package.json").version;

var common = _interopRequire(require("./common"));

var constants = _interopRequire(require("./constants"));

var time = _interopRequire(require("./time"));

var vector = _interopRequire(require("./vector"));

var transformations = _interopRequire(require("./transformations"));

var position = _interopRequire(require("./position"));

var orb = {
  version: version, common: common, constants: constants, time: time, vector: vector, v: vector, transformations: transformations, position: position
};

module.exports = orb;

},{"../package.json":2,"./common":4,"./constants":7,"./position":10,"./time":15,"./transformations":19,"./vector":24}],10:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var keplerian = _interopRequire(require("./keplerian"));

var keplerEquation = _interopRequire(require("./keplerEquation"));

var position = {
  keplerian: keplerian,
  simple: keplerian,
  keplerEquation: keplerEquation
};

module.exports = position;

},{"./keplerEquation":11,"./keplerian":12}],11:[function(require,module,exports){
"use strict";

module.exports = keplerEquation;

function keplerEquation(e, M) {
  var ε = arguments[2] === undefined ? 1e-18 : arguments[2];
  var maxIter = arguments[3] === undefined ? 100 : arguments[3];

  var E;

  if (e < 0.8) {
    E = M;
  } else {
    E = Math.PI;
  }

  var dE = 1,
      i = 0;
  while (Math.abs(dE) > ε && i < maxIter) {
    dE = (M + e * Math.sin(E) - E) / (1 - e * Math.cos(E));
    E = E + dE;
    i++;
  }

  return E;
}

},{}],12:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = keplerian;

var constants = _interopRequire(require("../constants"));

var keplerEquation = _interopRequire(require("./keplerEquation"));

var orbitalPlaneToInertial = require("../transformations/orbitalPlaneToInertial").orbitalPlaneToInertial;

function keplerian(a, e, i, Ω, ω, t, t0, _x, m1, m2) {
  var M0 = arguments[7] === undefined ? 0 : arguments[7];

  var GM = constants.earth.GM;

  if (m1) {
    GM = constants.common.G * m1;
  }

  if (m2) {
    GM = constants.common.G * (m1 + m2);
  }

  var p = a * (1 - Math.pow(e, 2));

  // Mean motion
  var n = Math.sqrt(GM / Math.pow(a, 3));

  // Mean anomaly at t
  var M = M0 + n * (t - t0);

  // Eccentric anomaly
  var E = keplerEquation(e, M);

  // True anomaly
  var ν = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var x_o = [r * Math.cos(ν), r * Math.sin(ν), 0];

  var xdot_o = [-Math.sqrt(GM / p) * Math.sin(ν), Math.sqrt(GM / p) * (e + Math.cos(ν)), 0];

  return [orbitalPlaneToInertial(x_o, Ω, ω, i), orbitalPlaneToInertial(xdot_o, Ω, ω, i)];
}

},{"../constants":7,"../transformations/orbitalPlaneToInertial":21,"./keplerEquation":11}],13:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// JD -> MJD [days]
exports.JDtoMJD = JDtoMJD;

// MJD -> JD [days]
exports.MJDtoJD = MJDtoJD;

// TAI -> TT
exports.TAItoTT = TAItoTT;

// TT -> TAI
exports.TTtoTAI = TTtoTAI;

// TAI -> UTC
exports.TAItoUTC = TAItoUTC;

// UTC -> TAI
exports.UTCtoTAI = UTCtoTAI;

// TAI -> GPS
exports.TAItoGPS = TAItoGPS;

// GPS -> TAI
exports.GPStoTAI = GPStoTAI;

// UTC -> GPS
exports.UTCtoGPS = UTCtoGPS;

// GPS -> UTC
exports.GPStoUTC = GPStoUTC;
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var leapSeconds = _interopRequire(require("leapseconds"));

var constants = _interopRequire(require("../constants/time"));

function JDtoMJD(jd) {
  return jd + constants.MJDJD;
}

function MJDtoJD(mjd) {
  return mjd - constants.MJDJD;
}

function TAItoTT(tai) {
  return tai + constants.TTTAI;
}

function TTtoTAI(tt) {
  return tt - constants.TTTAI;
}

function TAItoUTC(tai) {
  return tai - leapSeconds(new Date(tai * 1000));
}

function UTCtoTAI(utc) {
  return utc + leapSeconds(new Date(utc * 1000));
}

function TAItoGPS(tai) {
  return tai - constants.TAIGPS;
}

function GPStoTAI(gps) {
  return gps + constants.TAIGPS;
}

function UTCtoGPS(utc) {
  return TAItoGPS(UTCtoTAI(utc));
}

function GPStoUTC(gps) {
  return TAItoUTC(GPStoTAI(gps));
}

},{"../constants/time":8,"leapseconds":1}],14:[function(require,module,exports){
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

"use strict";

module.exports = dateToJD;

function dateToJD(date) {

  var y = undefined,
      m = undefined,
      d = undefined,
      h = undefined;

  if (date instanceof Array) {

    y = date[0];
    m = date[1];
    d = date[2];
    h = date[3] + date[4] / 60 + date[5] / 3600;
  } else if (date instanceof Date || typeof date === "number") {

    y = date.getUTCFullYear();
    m = date.getUTCMonth() + 1;
    d = date.getUTCDate();
    h = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  } else {
    throw new Error("date is of invalid type");
  }

  var f = m > 2 ? y : y - 1;
  var g = m > 2 ? m : m + 12;

  var a = 2 - Math.floor(f / 100) + Math.floor(f / 400);

  var jd = Math.floor(365.25 * f) + Math.floor(30.6001 * (g + 1)) + d + a + 1720994.5;

  return jd + h / 24;
}

},{}],15:[function(require,module,exports){
"use strict";

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var leapSeconds = _interopRequire(require("leapseconds"));

var conversions = _interopRequireWildcard(require("./conversions"));

var dateToJD = _interopRequire(require("./dateToJD"));

var time = {
  leapSeconds: leapSeconds,
  dateToJD: dateToJD
};

for (var key in conversions) {
  time[key] = conversions[key];
}

module.exports = time;

},{"./conversions":13,"./dateToJD":14,"leapseconds":1}],16:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// x: [ L, β ]
exports.ellipsoidalToCartesian = ellipsoidalToCartesian;

// x: [ x, y, z ]
exports.cartesianToEllipsoidal = cartesianToEllipsoidal;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

function ellipsoidalToCartesian(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [a * Math.cos(x[1]) * Math.cos(x[0]), // x
  a * Math.cos(x[1]) * Math.sin(x[0]), // y
  b * Math.sin(x[1]) // z
  ];
}

function cartesianToEllipsoidal(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var p = Math.hypot(x[0], x[1]),
      b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [Math.atan2(x[1], x[0]), // L
  Math.atan2(x[2] * a, p * b) // β
  ];
}

},{"../constants/earth":6}],17:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// x: [x, y, z], obs: [L, B, h]
exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

var geodeticToCartesian = require("./geodetic").geodeticToCartesian;

var vector = _interopRequire(require("../vector"));

function fixedToTopocentric(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? earthConstants.a : arguments[2];
  var e = arguments[3] === undefined ? earthConstants.e : arguments[3];

  var xObserver = geodeticToCartesian(obs, a, e);

  var Δx = x.map(function (xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if (nwu) {

    rTopo = vector.mm(vector.r(Math.PI / 2 - obs[1], 2), vector.r(obs[0], 3));
  } else {

    rTopo = vector.mm(vector.q(1), vector.mm(vector.r(Math.PI / 2 - obs[1], 2), vector.r(obs[0], 3)));
  }

  return vector.mm(rTopo, Δx);
}

function topocentricToFixed(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? earthConstants.a : arguments[2];
  var e = arguments[3] === undefined ? earthConstants.e : arguments[3];

  var xObserver = geodeticToCartesian(obs, a, e);

  var rFixed;

  if (nwu) {

    rFixed = vector.mm(vector.r(-obs[0], 3), vector.r(obs[1] - Math.PI / 2, 2));
  } else {

    rFixed = vector.mm(vector.mm(vector.r(-obs[0], 3), vector.r(obs[1] - Math.PI / 2, 2)), vector.q(1));
  }

  var xFixed = vector.mm(rFixed, x);

  return xFixed.map(function (xi, i) {
    return xi + xObserver[i];
  });
}

},{"../constants/earth":6,"../vector":24,"./geodetic":18}],18:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// x: [ L, B, h ]
exports.geodeticToCartesian = geodeticToCartesian;

// x: [ x, y, z ]
exports.cartesianToGeodetic = cartesianToGeodetic;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

function geodeticToCartesian(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(x[1]), 2)); //

  return [(N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
  (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
  (N * (1 - Math.pow(e, 2)) + x[2]) * Math.sin(x[1]) // z
  ];
}

function cartesianToGeodetic(x) {
  var a = arguments[1] === undefined ? earthConstants.a : arguments[1];
  var e = arguments[2] === undefined ? earthConstants.e : arguments[2];

  var L = Math.atan2(x[1], x[0]),
      p = Math.hypot(x[0], x[1]);

  var B_ = Math.atan2(x[2], p),
      N,
      B;

  var i = 0;
  while (i < 100) {
    N = a / Math.sqrt(1 - Math.pow(e * Math.sin(B_), 2));
    var Z_ = x[2] + Math.pow(e, 2) * N * Math.sin(B_);
    B = Math.atan2(Z_, p);

    if (Math.abs(B - B_) < 1e-15) {
      break;
    } else {
      B_ = B;
    }
    i++;
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
}

},{"../constants/earth":6}],19:[function(require,module,exports){
"use strict";

var _spherical = require("./spherical");

var sphericalToCartesian = _spherical.sphericalToCartesian;
var cartesianToSpherical = _spherical.cartesianToSpherical;

var _ellipsoidal = require("./ellipsoidal");

var ellipsoidalToCartesian = _ellipsoidal.ellipsoidalToCartesian;
var cartesianToEllipsoidal = _ellipsoidal.cartesianToEllipsoidal;

var _geodetic = require("./geodetic");

var geodeticToCartesian = _geodetic.geodeticToCartesian;
var cartesianToGeodetic = _geodetic.cartesianToGeodetic;

var _fixedToTopocentric = require("./fixedToTopocentric");

var fixedToTopocentric = _fixedToTopocentric.fixedToTopocentric;
var topocentricToFixed = _fixedToTopocentric.topocentricToFixed;

var _inertialToFixed = require("./inertialToFixed");

var inertialToFixed = _inertialToFixed.inertialToFixed;
var fixedToInertial = _inertialToFixed.fixedToInertial;

var orbitalPlaneToInertial = require("./orbitalPlaneToInertial").orbitalPlaneToInertial;

var _topocentricToHorizontal = require("./topocentricToHorizontal");

var topocentricToHorizontal = _topocentricToHorizontal.topocentricToHorizontal;
var horizontalToTopocentric = _topocentricToHorizontal.horizontalToTopocentric;

var transformations = {
  sphericalToCartesian: sphericalToCartesian, cartesianToSpherical: cartesianToSpherical,
  ellipsoidalToCartesian: ellipsoidalToCartesian, cartesianToEllipsoidal: cartesianToEllipsoidal,
  geodeticToCartesian: geodeticToCartesian, cartesianToGeodetic: cartesianToGeodetic,
  fixedToTopocentric: fixedToTopocentric, topocentricToFixed: topocentricToFixed,
  inertialToFixed: inertialToFixed, fixedToInertial: fixedToInertial,
  orbitalPlaneToInertial: orbitalPlaneToInertial,
  topocentricToHorizontal: topocentricToHorizontal, horizontalToTopocentric: horizontalToTopocentric
};

module.exports = transformations;

},{"./ellipsoidal":16,"./fixedToTopocentric":17,"./geodetic":18,"./inertialToFixed":20,"./orbitalPlaneToInertial":21,"./spherical":22,"./topocentricToHorizontal":23}],20:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var earthConstants = _interopRequire(require("../constants/earth"));

var vector = _interopRequire(require("../vector"));

function inertialToFixed(x, Δt) {
  var ω = arguments[2] === undefined ? earthConstants.ω : arguments[2];
  var axis = arguments[3] === undefined ? 3 : arguments[3];

  return vector.mm(vector.r(ω * Δt, 3), x);
}

function fixedToInertial(x, Δt, ω, axis) {
  return inertialToFixed(x, Δt, -ω, axis);
}

},{"../constants/earth":6,"../vector":24}],21:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

exports.orbitalPlaneToInertial = orbitalPlaneToInertial;
Object.defineProperty(exports, "__esModule", {
  value: true
});

var vector = _interopRequire(require("../vector"));

function orbitalPlaneToInertial(x, Ω, ω, i) {

  return vector.mm(vector.r(-Ω, 3), vector.mm(vector.r(-i, 1), vector.mm(vector.r(-ω, 3), x)));
}

},{"../vector":24}],22:[function(require,module,exports){
// x: [ λ, φ, r ]
"use strict";

exports.sphericalToCartesian = sphericalToCartesian;

// x: [ x, y, z ]
exports.cartesianToSpherical = cartesianToSpherical;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function sphericalToCartesian(x) {

  return [x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
  x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
  x[2] * Math.sin(x[1]) // z
  ];
}

function cartesianToSpherical(x) {

  return [Math.atan2(x[1], x[0]), // λ
  Math.atan2(x[2], Math.sqrt(x[0] * x[0] + x[1] * x[1])), // φ
  Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]) // r
  ];
}

},{}],23:[function(require,module,exports){
/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
"use strict";

exports.topocentricToHorizontal = topocentricToHorizontal;

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
exports.horizontalToTopocentric = horizontalToTopocentric;
Object.defineProperty(exports, "__esModule", {
  value: true
});

function topocentricToHorizontal(x) {

  var azimuth = (2 * Math.PI + Math.atan2(x[1], x[0])) % (2 * Math.PI);

  return [azimuth, // Azimuth
  Math.atan2(x[2], Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2))), // Elevation
  Math.sqrt(Math.pow(x[0], 2) + Math.pow(x[1], 2) + Math.pow(x[2], 2)) // Distance
  ];
}

function horizontalToTopocentric(x) {

  return [x[2] * Math.cos(x[1]) * Math.cos(x[0]), // x
  x[2] * Math.cos(x[1]) * Math.sin(x[0]), // y
  x[2] * Math.sin(x[1]) // z
  ];
}

},{}],24:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var matrixMultiplication = _interopRequire(require("./matrixMultiplication"));

var mirrorMatrix = _interopRequire(require("./mirrorMatrix"));

var rotationMatrix = _interopRequire(require("./rotationMatrix"));

var vector = {
  matrixMultiplication: matrixMultiplication, mm: matrixMultiplication,
  mirrorMatrix: mirrorMatrix, q: mirrorMatrix,
  rotationMatrix: rotationMatrix, r: rotationMatrix
};

module.exports = vector;

},{"./matrixMultiplication":25,"./mirrorMatrix":26,"./rotationMatrix":27}],25:[function(require,module,exports){
"use strict";

module.exports = matrixMultiplication;

function matrixMultiplication(m1, m2) {

  if (m2.length === 9) {

    return [m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6], m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7], m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8], m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6], m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7], m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8], m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6], m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7], m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8]];
  } else if (m2.length === 3) {

    return [m1[0] * m2[0] + m1[1] * m2[1] + m1[2] * m2[2], m1[3] * m2[0] + m1[4] * m2[1] + m1[5] * m2[2], m1[6] * m2[0] + m1[7] * m2[1] + m1[8] * m2[2]];
  }

  return null;
}

},{}],26:[function(require,module,exports){
"use strict";

module.exports = mirrorMatrix;

function mirrorMatrix(e) {

  var q = [1, 0, 0, 0, 1, 0, 0, 0, 1];

  q[--e * 4] *= -1;

  return q;
}

},{}],27:[function(require,module,exports){
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

"use strict";

module.exports = rotationMatrix;

function rotationMatrix(α, e) {

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
      return [1, 0, 0, 0, cosα, sinα, 0, -sinα, cosα];

    case 2:
      return [cosα, 0, -sinα, 0, 1, 0, sinα, 0, cosα];

    case 3:
      return [cosα, sinα, 0, -sinα, cosα, 0, 0, 0, 1];

    default:
      throw new Error("rotation axis has to be 1, 2 or 3");

  }
}

},{}]},{},[9])(9)
});


//# sourceMappingURL=orb.js.map