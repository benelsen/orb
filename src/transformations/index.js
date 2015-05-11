
import {sphericalToCartesian, cartesianToSpherical} from './spherical';
import {ellipsoidalToCartesian, cartesianToEllipsoidal} from './ellipsoidal';
import {geodeticToCartesian, cartesianToGeodetic} from './geodetic';
import {fixedToTopocentric, topocentricToFixed} from './fixedToTopocentric';
import {inertialToFixed, fixedToInertial} from './inertialToFixed';
import {orbitalPlaneToInertial} from './orbitalPlaneToInertial';
import {topocentricToHorizontal, horizontalToTopocentric} from './topocentricToHorizontal';

const transformations = {
  sphericalToCartesian, cartesianToSpherical,
  ellipsoidalToCartesian, cartesianToEllipsoidal,
  geodeticToCartesian, cartesianToGeodetic,
  fixedToTopocentric, topocentricToFixed,
  inertialToFixed, fixedToInertial,
  orbitalPlaneToInertial,
  topocentricToHorizontal, horizontalToTopocentric
};

export default transformations;
