var should = require('should');

var orb = require('./../../');

describe('orb.vector.mirrorMatrix', function() {

  it('should return a correct Q1 matrix', function() {
    var q1 = orb.vector.mirrorMatrix(1);

    q1[0].should.equal(-1);
    q1[1].should.equal(0);
    q1[2].should.equal(0);

    q1[3].should.equal(0);
    q1[4].should.equal(1);
    q1[5].should.equal(0);

    q1[6].should.equal(0);
    q1[7].should.equal(0);
    q1[8].should.equal(1);
  });

  it('should return a correct Q2 matrix', function() {
    var q2 = orb.vector.mirrorMatrix(2);

    q2[0].should.equal(1);
    q2[1].should.equal(0);
    q2[2].should.equal(0);

    q2[3].should.equal(0);
    q2[4].should.equal(-1);
    q2[5].should.equal(0);

    q2[6].should.equal(0);
    q2[7].should.equal(0);
    q2[8].should.equal(1);
  });

  it('should return a correct Q3 matrix', function() {
    var q3 = orb.vector.mirrorMatrix(3);

    q3[0].should.equal(1);
    q3[1].should.equal(0);
    q3[2].should.equal(0);

    q3[3].should.equal(0);
    q3[4].should.equal(1);
    q3[5].should.equal(0);

    q3[6].should.equal(0);
    q3[7].should.equal(0);
    q3[8].should.equal(-1);
  });

});
