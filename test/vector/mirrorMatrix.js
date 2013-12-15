var should = require('should');

var orb = require('./../../');

describe('orb.vector.mirrorMatrix', function() {

  it('should return a correct Q1 matrix', function() {
    var q1 = orb.vector.mirrorMatrix(1);

    q1.should.eql([
      -1, 0, 0,
       0, 1, 0,
       0, 0, 1
    ]);
  });

  it('should return a correct Q2 matrix', function() {
    var q2 = orb.vector.mirrorMatrix(2);

    q2.should.eql([
      1,  0, 0,
      0, -1, 0,
      0,  0, 1
    ]);
  });

  it('should return a correct Q3 matrix', function() {
    var q3 = orb.vector.mirrorMatrix(3);

    q3.should.eql([
      1, 0,  0,
      0, 1,  0,
      0, 0, -1
    ]);
  });

});
