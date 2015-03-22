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