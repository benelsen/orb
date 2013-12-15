var should = require('should');

var orb = require('./../../');

describe('orb.transformations.fixedToTopocentric', function() {

  it('should correctly perform B rotation', function() {

    var x1 = [
      1, 0, Math.sqrt( 3 )
    ];

    var obs = [
      0,
      60 * Math.PI/180,
      0
    ];

    var topo = orb.transformations.fixedToTopocentric(x1, obs, 1, 0);
    topo[0].should.be.approximately(0, 1e-15);
    topo[1].should.be.approximately(0, 1e-15);
    topo[2].should.be.approximately(1, 1e-15);

  });

  it('should correctly perform L rotation', function() {

    var x1 = [
      1, 1, 0
    ];

    var obs = [
      45 * Math.PI/180,
      0,
      0
    ];

    var topo = orb.transformations.fixedToTopocentric(x1, obs, 1, 0);
    topo[0].should.be.approximately(0, 1e-15);
    topo[1].should.be.approximately(0, 1e-15);
    topo[2].should.be.approximately(Math.SQRT2 - 1, 1e-15);

  });

});

describe('orb.transformations.topocentricToFixed', function() {

  it('should correctly perform B rotation', function() {

    var x1 = [
      0, 0, 1
    ];

    var obs = [
      0,
      60 * Math.PI/180,
      0
    ];

    var fixed = orb.transformations.topocentricToFixed(x1, obs, 1, 0);

    fixed[0].should.be.approximately(1, 1e-15);
    fixed[1].should.be.approximately(0, 1e-15);
    fixed[2].should.be.approximately(Math.sqrt( 3 ), 1e-15);

  });

  it('should correctly perform L rotation', function() {

    var x1 = [
      0, 0, Math.SQRT2 - 1
    ];

    var obs = [
      45 * Math.PI/180,
      0,
      0
    ];

    var fixed = orb.transformations.topocentricToFixed(x1, obs, 1, 0);

    fixed[0].should.be.approximately(1, 1e-15);
    fixed[1].should.be.approximately(1, 1e-15);
    fixed[2].should.be.approximately(0, 1e-15);

  });

});
