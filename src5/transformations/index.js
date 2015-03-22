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