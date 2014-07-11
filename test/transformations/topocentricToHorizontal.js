var should = require('should');

var orb = require('./../../');

describe('orb.transformations.topocentricToHorizontal', function() {

  it('should calculate azimith, elevation and distance from x, y, z', function() {

    var x = [1, -1, 1];

    var hor = orb.transformations.topocentricToHorizontal(x);
    hor[0].should.be.approximately(7*Math.PI/4, 1e-12);
    hor[1].should.be.approximately(Math.atan2( 1, Math.SQRT2 ), 1e-12);
    hor[2].should.be.approximately(Math.sqrt(3), 1e-12);
  });

});

describe('orb.transformations.horizontalToTopocentric', function() {

  it('should calculate x, y, z from azimith, elevation and distance', function() {

    var x = [
      7*Math.PI/4,
      Math.atan2( 1, Math.SQRT2 ),
      Math.sqrt(3)
    ];

    var topo = orb.transformations.horizontalToTopocentric(x);
    topo[0].should.be.approximately(1, 1e-12);
    topo[1].should.be.approximately(-1, 1e-12);
    topo[2].should.be.approximately(1, 1e-12);
  });

});
