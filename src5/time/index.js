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