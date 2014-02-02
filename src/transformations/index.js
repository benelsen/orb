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
