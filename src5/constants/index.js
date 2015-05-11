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