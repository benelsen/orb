import "./";
import "../vector/";
import "../constants/earth";

orb.transformations.fixedToTopocentric = function(x, L, B, h, a, e, nwu) {

  if ( !a ) a = orb.constants.earth.a;
  if ( !e ) e = orb.constants.earth.e;

  var xObserver = orb.transformations.geodeticToCartesian(L, B, h, a, e);

  var Δx = x.map(function(xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if ( nwu ) {

  rTopo = orb.v.mm(
      orb.v.r( pi/2 - B, 2),
      orb.v.r( L, 3)
    );

  } else {

    rTopo = orb.v.mm(
        orb.v.q(1), orb.v.mm(
          orb.v.r( pi/2 - B, 2),
          orb.v.r( L, 3)
        )
      );

  }

  return orb.v.mm( rTopo, Δx );

};
