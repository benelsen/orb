var common = {};

var angular = require('./angular').angular;
for ( var key in angular ) {
  common[key] = angular[key];
}

exports.common = common;
