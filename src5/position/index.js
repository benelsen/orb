"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var keplerian = _interopRequire(require("./keplerian"));

var keplerEquation = _interopRequire(require("./keplerEquation"));

var stateToKepler = _interopRequire(require("./stateToKepler"));

var position = {
  keplerian: keplerian,
  simple: keplerian,
  keplerEquation: keplerEquation,
  stateToKepler: stateToKepler
};

module.exports = position;