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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deg2rad = deg2rad;
exports.rad2deg = rad2deg;

function deg2rad(deg) {
  return deg * Math.PI / 180;
}

function rad2deg(rad) {
  return rad * 180 / Math.PI;
}

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _angular = require('./angular');

var common = {
  deg2rad: _angular.deg2rad, rad2deg: _angular.rad2deg
};

exports['default'] = common;
module.exports = exports['default'];

},{"./angular":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var c = 299792458;

exports.c = c;
// CODATA2010, Uncertainty: (80)
var G = 6.67384e-11;
exports.G = G;

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _common = require('./common');

var common = _interopRequireWildcard(_common);

var _earth = require('./earth');

var _earth2 = _interopRequireDefault(_earth);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

var constants = {
  common: common, earth: _earth2['default'], time: _time2['default']
};

exports['default'] = constants;
module.exports = exports['default'];

},{"./common":4,"./earth":5,"./time":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

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

exports["default"] = time;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){

// Modified Math.hypot from core-js
// The current implementation in core-js has a bug w/ negative values.
'use strict';

if (typeof Math.hypot === 'undefined') {

  Math.hypot = function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0,
        len1 = arguments.length,
        len2 = len1,
        args = Array(len1),
        larg = 0,
        arg;
    while (len1--) {
      arg = args[len1] = Math.abs(arguments[len1]);
      if (arg == Infinity) return Infinity;
      if (arg > larg) larg = arg;
    }
    larg = larg || 1;
    while (len2--) sum += Math.pow(args[len2] / larg, 2);
    return larg * Math.sqrt(sum);
  };
}

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _keplerian = require('./keplerian');

var _keplerian2 = _interopRequireDefault(_keplerian);

var _keplerEquation = require('./keplerEquation');

var _keplerEquation2 = _interopRequireDefault(_keplerEquation);

var _stateToKepler = require('./stateToKepler');

var _stateToKepler2 = _interopRequireDefault(_stateToKepler);

var position = {
  keplerian: _keplerian2['default'],
  simple: _keplerian2['default'],
  keplerEquation: _keplerEquation2['default'],
  stateToKepler: _stateToKepler2['default']
};

exports['default'] = position;
module.exports = exports['default'];

},{"./keplerEquation":10,"./keplerian":11,"./stateToKepler":12}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = keplerEquation;

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

module.exports = exports["default"];

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = keplerian;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _keplerEquation = require('./keplerEquation');

var _keplerEquation2 = _interopRequireDefault(_keplerEquation);

var _transformationsOrbitalPlaneToInertial = require('../transformations/orbitalPlaneToInertial');

function keplerian(a, e, i, Ω, ω, t, t0, _x, m1, m2) {
  var M0 = arguments[7] === undefined ? 0 : arguments[7];

  var GM = _constants2['default'].earth.GM;

  if (m1) {
    GM = _constants2['default'].common.G * m1;
  }

  if (m2) {
    GM = _constants2['default'].common.G * (m1 + m2);
  }

  var p = a * (1 - Math.pow(e, 2));

  // Mean motion
  var n = Math.sqrt(GM / Math.pow(a, 3));

  // Mean anomaly at t
  var M = M0 + n * (t - t0);

  // Eccentric anomaly
  var E = _keplerEquation2['default'](e, M);

  // True anomaly
  var ν = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
  // var ν = Math.atan2( Math.sqrt(1-e*e) * Math.sin(E), Math.cos(E) - e );

  // radius
  var r = p / (1 + e * Math.cos(ν));

  // position in orbital plane
  var xOrbitalPlane = [r * Math.cos(ν), r * Math.sin(ν), 0];

  var xDotOrbitalPlane = [-Math.sqrt(GM / p) * Math.sin(ν), Math.sqrt(GM / p) * (e + Math.cos(ν)), 0];

  return [_transformationsOrbitalPlaneToInertial.orbitalPlaneToInertial(xOrbitalPlane, Ω, ω, i), _transformationsOrbitalPlaneToInertial.orbitalPlaneToInertial(xDotOrbitalPlane, Ω, ω, i)];
}

module.exports = exports['default'];

},{"../constants":6,"../transformations/orbitalPlaneToInertial":21,"./keplerEquation":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = stateToKepler;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function stateToKepler(r, rDot, t, m1, m2) {

  var GM;

  if (m1 && m2) {
    GM = _constants2['default'].common.G * (m1 + m2);
  } else if (m1) {
    GM = _constants2['default'].common.G * m1;
  } else {
    GM = _constants2['default'].earth.GM;
  }

  var h = _vector2['default'].cross(r, rDot);

  var Ω = Math.atan2(h[0], -h[1]);

  var i = Math.atan2(Math.hypot.apply(Math, _toConsumableArray(h.slice(0, 2))), h[2]);

  var p = _vector2['default'].dot(h, h) / GM;

  var rLen = Math.hypot.apply(Math, _toConsumableArray(r));

  var e = Math.sqrt(p / GM * Math.pow(_vector2['default'].dot(r, rDot) / rLen, 2) + Math.pow(p / rLen - 1, 2));

  var ν = Math.atan2(Math.sqrt(p / GM) * _vector2['default'].dot(r, rDot), p - rLen);

  var rb = _vector2['default'].mm(_vector2['default'].r(i, 1), _vector2['default'].mm(_vector2['default'].r(Ω, 3), r));

  var ω = Math.atan2(rb[1], rb[0]) - ν;

  if (e < 1) {

    var a = p / (1 - Math.pow(e, 2));

    var E = 2 * Math.atan(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    var T0 = t - Math.sqrt(Math.pow(a, 3) / GM) * (E - e * Math.sin(E));

    return [a, e, i, Ω, ω, T0];
  } else if (e > 1) {

    var a = p / (Math.pow(e, 2) - 1);

    var H = 2 * Math.atanh(Math.sqrt((1 - e) / (1 + e)) * Math.tan(ν / 2));

    var T0 = t + Math.sqrt(Math.pow(a, 3) / GM) * (H - e * Math.sinh(H));

    return [a, e, i, Ω, ω, T0];
  } else if (e === 1) {

    var T0 = t - 0.5 * Math.sqrt(Math.pow(p, 3) / GM) * (Math.tan(ν / 2) + 1 / 3 * Math.pow(Math.tan(ν / 2), 3));

    return [p, e, i, Ω, ω, T0];
  }
}

module.exports = exports['default'];

},{"../constants":6,"../vector":26}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

/*eslint-disable new-cap */

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Common conversions between time standards
 * All time values are in seconds unless specified
 */

var _leapseconds = require('leapseconds');

var _leapseconds2 = _interopRequireDefault(_leapseconds);

var _constantsTime = require('../constants/time');

var _constantsTime2 = _interopRequireDefault(_constantsTime);

function JDtoMJD(jd) {
  return jd + _constantsTime2['default'].MJDJD;
}

function MJDtoJD(mjd) {
  return mjd - _constantsTime2['default'].MJDJD;
}

function TAItoTT(tai) {
  return tai + _constantsTime2['default'].TTTAI;
}

function TTtoTAI(tt) {
  return tt - _constantsTime2['default'].TTTAI;
}

function TAItoUTC(tai) {
  return tai - _leapseconds2['default'](new Date(tai * 1000));
}

function UTCtoTAI(utc) {
  return utc + _leapseconds2['default'](new Date(utc * 1000));
}

function TAItoGPS(tai) {
  return tai - _constantsTime2['default'].TAIGPS;
}

function GPStoTAI(gps) {
  return gps + _constantsTime2['default'].TAIGPS;
}

function UTCtoGPS(utc) {
  return TAItoGPS(UTCtoTAI(utc));
}

function GPStoUTC(gps) {
  return TAItoUTC(GPStoTAI(gps));
}

/*eslint-enable new-cap */

},{"../constants/time":7,"leapseconds":1}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

exports['default'] = dateToJD;

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
  } else if (date instanceof Date || typeof date === 'number') {

    y = date.getUTCFullYear();
    m = date.getUTCMonth() + 1;
    d = date.getUTCDate();
    h = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  } else {
    throw new Error('date is of invalid type');
  }

  var f = m > 2 ? y : y - 1;
  var g = m > 2 ? m : m + 12;

  var a = 2 - Math.floor(f / 100) + Math.floor(f / 400);

  var jd = Math.floor(365.25 * f) + Math.floor(30.6001 * (g + 1)) + d + a + 1720994.5;

  return jd + h / 24;
}

module.exports = exports['default'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _leapseconds = require('leapseconds');

var _leapseconds2 = _interopRequireDefault(_leapseconds);

var _conversions = require('./conversions');

var conversions = _interopRequireWildcard(_conversions);

var _dateToJD = require('./dateToJD');

var _dateToJD2 = _interopRequireDefault(_dateToJD);

var time = {
  leapSeconds: _leapseconds2['default'],
  dateToJD: _dateToJD2['default']
};

for (var key in conversions) {
  time[key] = conversions[key];
}

exports['default'] = time;
module.exports = exports['default'];

},{"./conversions":13,"./dateToJD":14,"leapseconds":1}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// x: [ L, β ]
exports.ellipsoidalToCartesian = ellipsoidalToCartesian;

// x: [ x, y, z ]
exports.cartesianToEllipsoidal = cartesianToEllipsoidal;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

function ellipsoidalToCartesian(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [a * Math.cos(x[1]) * Math.cos(x[0]), // x
  a * Math.cos(x[1]) * Math.sin(x[0]), // y
  b * Math.sin(x[1]) // z
  ];
}

function cartesianToEllipsoidal(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var p = Math.hypot(x[0], x[1]),
      b = Math.sqrt(Math.pow(a, 2) * (1 - Math.pow(e, 2)));

  return [Math.atan2(x[1], x[0]), // L
  Math.atan2(x[2] * a, p * b) // β
  ];
}

},{"../constants/earth":5}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// x: [x, y, z], obs: [L, B, h]
exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

var _geodetic = require('./geodetic');

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function fixedToTopocentric(x, obs, _x, _x2, nwu) {
  var a = arguments[2] === undefined ? _constantsEarth2['default'].a : arguments[2];
  var e = arguments[3] === undefined ? _constantsEarth2['default'].e : arguments[3];

  var xObserver = _geodetic.geodeticToCartesian(obs, a, e);

  var Δx = x.map(function (xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if (nwu) {

    rTopo = _vector2['default'].mm(_vector2['default'].r(Math.PI / 2 - obs[1], 2), _vector2['default'].r(obs[0], 3));
  } else {

    rTopo = _vector2['default'].mm(_vector2['default'].q(1), _vector2['default'].mm(_vector2['default'].r(Math.PI / 2 - obs[1], 2), _vector2['default'].r(obs[0], 3)));
  }

  return _vector2['default'].mm(rTopo, Δx);
}

function topocentricToFixed(x, obs, _x3, _x4, nwu) {
  var a = arguments[2] === undefined ? _constantsEarth2['default'].a : arguments[2];
  var e = arguments[3] === undefined ? _constantsEarth2['default'].e : arguments[3];

  var xObserver = _geodetic.geodeticToCartesian(obs, a, e);

  var rFixed;

  if (nwu) {

    rFixed = _vector2['default'].mm(_vector2['default'].r(-obs[0], 3), _vector2['default'].r(obs[1] - Math.PI / 2, 2));
  } else {

    rFixed = _vector2['default'].mm(_vector2['default'].mm(_vector2['default'].r(-obs[0], 3), _vector2['default'].r(obs[1] - Math.PI / 2, 2)), _vector2['default'].q(1));
  }

  var xFixed = _vector2['default'].mm(rFixed, x);

  return xFixed.map(function (xi, i) {
    return xi + xObserver[i];
  });
}

},{"../constants/earth":5,"../vector":26,"./geodetic":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// x: [ L, B, h ]
exports.geodeticToCartesian = geodeticToCartesian;

// x: [ x, y, z ]
exports.cartesianToGeodetic = cartesianToGeodetic;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

function geodeticToCartesian(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(x[1]), 2)); //

  return [(N + x[2]) * Math.cos(x[1]) * Math.cos(x[0]), // x
  (N + x[2]) * Math.cos(x[1]) * Math.sin(x[0]), // y
  (N * (1 - Math.pow(e, 2)) + x[2]) * Math.sin(x[1]) // z
  ];
}

function cartesianToGeodetic(x) {
  var a = arguments[1] === undefined ? _constantsEarth2['default'].a : arguments[1];
  var e = arguments[2] === undefined ? _constantsEarth2['default'].e : arguments[2];

  var L = Math.atan2(x[1], x[0]),
      p = Math.hypot(x[0], x[1]);

  var Btmp = Math.atan2(x[2], p),
      N,
      B,
      Ztmp;

  var i = 0;
  while (i < 100) {
    N = a / Math.sqrt(1 - Math.pow(e * Math.sin(Btmp), 2));
    Ztmp = x[2] + Math.pow(e, 2) * N * Math.sin(Btmp);
    B = Math.atan2(Ztmp, p);

    if (Math.abs(B - Btmp) < 1e-15) {
      break;
    } else {
      Btmp = B;
    }
    i++;
  }

  var h = p / Math.cos(B) - N;

  return [L, B, h];
}

},{"../constants/earth":5}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _spherical = require('./spherical');

var _ellipsoidal = require('./ellipsoidal');

var _geodetic = require('./geodetic');

var _fixedToTopocentric = require('./fixedToTopocentric');

var _inertialToFixed = require('./inertialToFixed');

var _orbitalPlaneToInertial = require('./orbitalPlaneToInertial');

var _topocentricToHorizontal = require('./topocentricToHorizontal');

var transformations = {
  sphericalToCartesian: _spherical.sphericalToCartesian, cartesianToSpherical: _spherical.cartesianToSpherical,
  ellipsoidalToCartesian: _ellipsoidal.ellipsoidalToCartesian, cartesianToEllipsoidal: _ellipsoidal.cartesianToEllipsoidal,
  geodeticToCartesian: _geodetic.geodeticToCartesian, cartesianToGeodetic: _geodetic.cartesianToGeodetic,
  fixedToTopocentric: _fixedToTopocentric.fixedToTopocentric, topocentricToFixed: _fixedToTopocentric.topocentricToFixed,
  inertialToFixed: _inertialToFixed.inertialToFixed, fixedToInertial: _inertialToFixed.fixedToInertial,
  orbitalPlaneToInertial: _orbitalPlaneToInertial.orbitalPlaneToInertial,
  topocentricToHorizontal: _topocentricToHorizontal.topocentricToHorizontal, horizontalToTopocentric: _topocentricToHorizontal.horizontalToTopocentric
};

exports['default'] = transformations;
module.exports = exports['default'];

},{"./ellipsoidal":16,"./fixedToTopocentric":17,"./geodetic":18,"./inertialToFixed":20,"./orbitalPlaneToInertial":21,"./spherical":22,"./topocentricToHorizontal":23}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.inertialToFixed = inertialToFixed;
exports.fixedToInertial = fixedToInertial;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsEarth = require('../constants/earth');

var _constantsEarth2 = _interopRequireDefault(_constantsEarth);

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function inertialToFixed(x, Δt) {
  var ω = arguments[2] === undefined ? _constantsEarth2['default'].ω : arguments[2];
  var axis = arguments[3] === undefined ? 3 : arguments[3];

  return _vector2['default'].mm(_vector2['default'].r(ω * Δt, 3), x);
}

function fixedToInertial(x, Δt, ω, axis) {
  return inertialToFixed(x, Δt, -ω, axis);
}

},{"../constants/earth":5,"../vector":26}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.orbitalPlaneToInertial = orbitalPlaneToInertial;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _vector = require('../vector');

var _vector2 = _interopRequireDefault(_vector);

function orbitalPlaneToInertial(x, Ω, ω, i) {

  return _vector2['default'].mm(_vector2['default'].r(-Ω, 3), _vector2['default'].mm(_vector2['default'].r(-i, 1), _vector2['default'].mm(_vector2['default'].r(-ω, 3), x)));
}

},{"../vector":26}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// x: [ λ, φ, r ]
exports.sphericalToCartesian = sphericalToCartesian;

// x: [ x, y, z ]
exports.cartesianToSpherical = cartesianToSpherical;

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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param x = [x, y, z]
 * @return [azimuth, elevation, distance]
 */
exports.topocentricToHorizontal = topocentricToHorizontal;

/**
 * @param x = [azimuth, elevation, distance]
 * @return [x, y, z]
 */
exports.horizontalToTopocentric = horizontalToTopocentric;

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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = crossProduct;

function crossProduct(u, v) {

  if (u.length === 3 && v.length === 3) {

    return [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  } else {

    throw new Error('unsupported vector sizes');
  }
}

module.exports = exports['default'];

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = dotProduct;

function dotProduct(u, v) {

  if (u.length !== v.length) {
    throw new Error('Vectors have different sizes');
  }

  return u.reduce(function (memo, ui, i) {
    return memo + u[i] * v[i];
  }, 0);
}

module.exports = exports['default'];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matrixMultiplication = require('./matrixMultiplication');

var _matrixMultiplication2 = _interopRequireDefault(_matrixMultiplication);

var _mirrorMatrix = require('./mirrorMatrix');

var _mirrorMatrix2 = _interopRequireDefault(_mirrorMatrix);

var _rotationMatrix = require('./rotationMatrix');

var _rotationMatrix2 = _interopRequireDefault(_rotationMatrix);

var _crossProduct = require('./crossProduct');

var _crossProduct2 = _interopRequireDefault(_crossProduct);

var _dotProduct = require('./dotProduct');

var _dotProduct2 = _interopRequireDefault(_dotProduct);

var vector = {
  matrixMultiplication: _matrixMultiplication2['default'], mm: _matrixMultiplication2['default'],
  mirrorMatrix: _mirrorMatrix2['default'], q: _mirrorMatrix2['default'],
  rotationMatrix: _rotationMatrix2['default'], r: _rotationMatrix2['default'],
  crossProduct: _crossProduct2['default'], cross: _crossProduct2['default'],
  dotProduct: _dotProduct2['default'], dot: _dotProduct2['default']
};

exports['default'] = vector;
module.exports = exports['default'];

},{"./crossProduct":24,"./dotProduct":25,"./matrixMultiplication":27,"./mirrorMatrix":28,"./rotationMatrix":29}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = matrixMultiplication;

function matrixMultiplication(m1, m2) {

  if (m2.length === 9) {

    return [m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6], m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7], m1[0] * m2[2] + m1[1] * m2[5] + m1[2] * m2[8], m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6], m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7], m1[3] * m2[2] + m1[4] * m2[5] + m1[5] * m2[8], m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6], m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7], m1[6] * m2[2] + m1[7] * m2[5] + m1[8] * m2[8]];
  } else if (m2.length === 3) {

    return [m1[0] * m2[0] + m1[1] * m2[1] + m1[2] * m2[2], m1[3] * m2[0] + m1[4] * m2[1] + m1[5] * m2[2], m1[6] * m2[0] + m1[7] * m2[1] + m1[8] * m2[2]];
  }

  return null;
}

module.exports = exports["default"];

},{}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mirrorMatrix;

function mirrorMatrix(e) {

  var q = [1, 0, 0, 0, 1, 0, 0, 0, 1];

  q[--e * 4] *= -1;

  return q;
}

module.exports = exports["default"];

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
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

exports['default'] = rotationMatrix;

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
      throw new Error('rotation axis has to be 1, 2 or 3');

  }
}

module.exports = exports['default'];

},{}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./polyfill');

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

var _vector = require('./vector');

var _vector2 = _interopRequireDefault(_vector);

var _transformations = require('./transformations');

var _transformations2 = _interopRequireDefault(_transformations);

var _position = require('./position');

var _position2 = _interopRequireDefault(_position);

var version = '0.2.0';

var orb = {
  version: version, common: _common2['default'], constants: _constants2['default'], time: _time2['default'], vector: _vector2['default'], v: _vector2['default'], transformations: _transformations2['default'], position: _position2['default']
};

exports['default'] = orb;
module.exports = exports['default'];

},{"./common":3,"./constants":6,"./polyfill":8,"./position":9,"./time":15,"./transformations":19,"./vector":26}]},{},[30])(30)
});
//# sourceMappingURL=orb.js.map
