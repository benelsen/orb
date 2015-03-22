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