// x: [x, y, z], obs: [L, B, h]
var earthConstants = require('../constants/earth').earth,
    geodeticToCartesian = require('./geodetic').geodeticToCartesian,
    vector = require('../vector').vector;

var fixedToTopocentric = function(x, obs, a, e, nwu) {

  if ( !a ) a = earthConstants.a;
  if ( !e && e !== 0 ) e = earthConstants.e;

  var xObserver = geodeticToCartesian(obs, a, e);

  var Δx = x.map(function(xi, i) {
    return xi - xObserver[i];
  });

  var rTopo;

  if ( nwu ) {

    rTopo = vector.mm(
        vector.r( Math.PI/2 - obs[1], 2),
        vector.r( obs[0], 3)
      );

  } else {

    rTopo = vector.mm(
        vector.q(1), vector.mm(
          vector.r( Math.PI/2 - obs[1], 2),
          vector.r( obs[0], 3)
        )
      );

  }

  return vector.mm( rTopo, Δx );
};

var topocentricToFixed = function(x, obs, a, e, nwu) {

  if ( !a ) a = earthConstants.a;
  if ( !e && e !== 0 ) e = earthConstants.e;

  var xObserver = geodeticToCartesian(obs, a, e);

  var rFixed;

  if ( nwu ) {

    rFixed = vector.mm(
        vector.r( -obs[0], 3),
        vector.r( obs[1]- Math.PI/2, 2)
      );

  } else {

    rFixed = vector.mm(
        vector.mm(
          vector.r( -obs[0], 3),
          vector.r( obs[1]- Math.PI/2, 2)
        ), vector.q(1)
      );

  }

  var xFixed = vector.mm( rFixed, x );

  return xFixed.map(function(xi, i) {
    return xi + xObserver[i];
  });
};

exports.fixedToTopocentric = fixedToTopocentric;
exports.topocentricToFixed = topocentricToFixed;
