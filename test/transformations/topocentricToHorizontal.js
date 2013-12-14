var should = require('should');

var orb = require('./../../');

describe('orb.transformations.topocentricToHorizontal', function() {
  it('should calculate azimith, elevation and distance', function() {
    var x = [1, -1, 1];

    var hor = orb.transformations.topocentricToHorizontal(x);
    hor[0].should.be.approximately(7*Math.PI/4, 1e-15);
    hor[1].should.be.approximately(Math.atan2( 1, Math.SQRT2 ), 1e-15);
    hor[2].should.be.approximately(Math.sqrt(3), 1e-15);
  })
});
