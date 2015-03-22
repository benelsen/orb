import earthConstants from '../constants/earth';
import {geodeticToCartesian} from './geodetic';
import vector from '../vector';

// x: [x, y, z], obs: [L, B, h]
export function fixedToTopocentric (x, obs, a=earthConstants.a, e=earthConstants.e, nwu) {

  var xObserver = geodeticToCartesian(obs, a, e);

  var Δx = x.map(function(xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if ( nwu ) {

    rTopo = vector.mm(
        vector.r( Math.PI / 2 - obs[1], 2),
        vector.r( obs[0], 3)
      );

  } else {

    rTopo = vector.mm(
        vector.q(1), vector.mm(
          vector.r( Math.PI / 2 - obs[1], 2),
          vector.r( obs[0], 3)
        )
      );

  }

  return vector.mm( rTopo, Δx );
}

export function topocentricToFixed (x, obs, a=earthConstants.a, e=earthConstants.e, nwu) {

  var xObserver = geodeticToCartesian(obs, a, e);

  var rFixed;

  if ( nwu ) {

    rFixed = vector.mm(
        vector.r( -obs[0], 3),
        vector.r( obs[1] - Math.PI / 2, 2)
      );

  } else {

    rFixed = vector.mm(
        vector.mm(
          vector.r( -obs[0], 3),
          vector.r( obs[1] - Math.PI / 2, 2)
        ), vector.q(1)
      );

  }

  var xFixed = vector.mm( rFixed, x );

  return xFixed.map(function(xi, i) {
    return xi + xObserver[i];
  });
}
