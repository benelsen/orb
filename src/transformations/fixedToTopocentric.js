import "./";
import "./geodetic";
import "../vector/";
import "../constants/earth";

// x: [x, y, z], obs: [L, B, h]
orb.transformations.fixedToTopocentric = function(x, obs, a, e, nwu) {

  if ( !a ) a = orb.constants.earth.a;
  if ( !e && e !== 0 ) e = orb.constants.earth.e;

  var xObserver = orb.transformations.geodeticToCartesian(obs, a, e);

  var Δx = x.map(function(xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if ( nwu ) {

    rTopo = orb.v.mm(
        orb.v.r( Math.PI/2 - obs[1], 2),
        orb.v.r( obs[0], 3)
      );

  } else {

    rTopo = orb.v.mm(
        orb.v.q(1), orb.v.mm(
          orb.v.r( Math.PI/2 - obs[1], 2),
          orb.v.r( obs[0], 3)
        )
      );

  }

  return orb.v.mm( rTopo, Δx );
};
