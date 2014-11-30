var should = require('should');

var orb = require('./../../');

describe('orb.vector.rotationMatrix', function() {

  it('should return correct values for Ri(0 + n∙2π)', function() {
    var r1 = orb.vector.rotationMatrix(0, 1);

    r1.should.eql([
      1, 0, 0,
      0, 1, 0,
      0,-0, 1
    ]);

    var r2 = orb.vector.rotationMatrix(2*Math.PI, 2);

    r2.should.eql([
      1, 0,-0,
      0, 1, 0,
      0, 0, 1
    ]);

    var r3 = orb.vector.rotationMatrix(-4*Math.PI, 3);

    r3.should.eql([
      1, 0, 0,
     -0, 1, 0,
      0, 0, 1
    ]);

  });

  it('should return correct values for Ri(α)', function() {
    var r1 = orb.vector.rotationMatrix(Math.PI/4, 1);

    r1[0].should.be.approximately(            1, 1e-15);
    r1[1].should.be.approximately(            0, 1e-15);
    r1[2].should.be.approximately(            0, 1e-15);
    r1[3].should.be.approximately(            0, 1e-15);
    r1[4].should.be.approximately( Math.SQRT1_2, 1e-15);
    r1[5].should.be.approximately( Math.SQRT1_2, 1e-15);
    r1[6].should.be.approximately(            0, 1e-15);
    r1[7].should.be.approximately(-Math.SQRT1_2, 1e-15);
    r1[8].should.be.approximately( Math.SQRT1_2, 1e-15);

    var r2 = orb.vector.rotationMatrix(-Math.PI/3, 2);

    r2[0].should.be.approximately(             0.5, 1e-15);
    r2[1].should.be.approximately(               0, 1e-15);
    r2[2].should.be.approximately(  Math.sqrt(3)/2, 1e-15);
    r2[3].should.be.approximately(               0, 1e-15);
    r2[4].should.be.approximately(               1, 1e-15);
    r2[5].should.be.approximately(               0, 1e-15);
    r2[6].should.be.approximately( -Math.sqrt(3)/2, 1e-15);
    r2[7].should.be.approximately(               0, 1e-15);
    r2[8].should.be.approximately(             0.5, 1e-15);

    var r3 = orb.vector.rotationMatrix(7*Math.PI/6, 3);

    r3[0].should.be.approximately( -Math.sqrt(3)/2, 1e-15);
    r3[1].should.be.approximately(            -0.5, 1e-15);
    r3[2].should.be.approximately(               0, 1e-15);
    r3[3].should.be.approximately(             0.5, 1e-15);
    r3[4].should.be.approximately( -Math.sqrt(3)/2, 1e-15);
    r3[5].should.be.approximately(               0, 1e-15);
    r3[6].should.be.approximately(               0, 1e-15);
    r3[7].should.be.approximately(               0, 1e-15);
    r3[8].should.be.approximately(               1, 1e-15);

  });

});
