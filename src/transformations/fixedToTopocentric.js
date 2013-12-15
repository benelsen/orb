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

orb.transformations.topocentricToFixed = function(x, obs, a, e, nwu) {

  if ( !a ) a = orb.constants.earth.a;
  if ( !e && e !== 0 ) e = orb.constants.earth.e;

  var xObserver = orb.transformations.geodeticToCartesian(obs, a, e);

  var rFixed;

  if ( nwu ) {

    rFixed = orb.v.mm(
        orb.v.r( -obs[0], 3),
        orb.v.r( obs[1]- Math.PI/2, 2)
      );

  } else {

    rFixed = orb.v.mm(
        orb.v.mm(
          orb.v.r( -obs[0], 3),
          orb.v.r( obs[1]- Math.PI/2, 2)
        ), orb.v.q(1)
      );

  }

  var xFixed = orb.v.mm( rFixed, x );

  return xFixed.map(function(xi, i) {
    return xi + xObserver[i];
  });
};
