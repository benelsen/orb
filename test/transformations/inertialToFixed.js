var should = require('should');

var orb = require('./../../');

describe('orb.transformations.inertialToFixed', function() {

  var x1 = [
    1, 0, 0.2
  ];

  var ω = 2*Math.PI;

  it('should be rotated pi/2 after 1/4 second', function() {

    var fixed = orb.transformations.inertialToFixed(x1, 0.25, ω, 3);
    fixed[0].should.be.approximately( 0,   1e-15);
    fixed[1].should.be.approximately(-1,   1e-15);
    fixed[2].should.be.approximately( 0.2, 1e-15);

  });

  it('should be in same position after 1 second', function() {

    var fixed = orb.transformations.inertialToFixed(x1, 1, ω, 3);
    fixed[0].should.be.approximately(1,   1e-15);
    fixed[1].should.be.approximately(0,   1e-15);
    fixed[2].should.be.approximately(0.2, 1e-15);

  });

});

describe('orb.transformations.fixedToInertial', function() {

  var x1 = [
    1, 0, 0.2
  ];

  var ω = 2*Math.PI;

  it('should be rotated -pi/2 after 1/4 second', function() {

    var fixed = orb.transformations.fixedToInertial(x1, 0.25, ω, 3);
    fixed[0].should.be.approximately( 0,   1e-15);
    fixed[1].should.be.approximately( 1,   1e-15);
    fixed[2].should.be.approximately( 0.2, 1e-15);

  });

  it('should be in same position after 1 second', function() {

    var fixed = orb.transformations.fixedToInertial(x1, 1, ω, 3);
    fixed[0].should.be.approximately( 1,   1e-15);
    fixed[1].should.be.approximately( 0,   1e-15);
    fixed[2].should.be.approximately( 0.2, 1e-15);

  });

});
