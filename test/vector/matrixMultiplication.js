var should = require('should');

var orb = require('./../../');

describe('orb.vector.matrixMultiplication', function() {

  it('should correctly multiply two 3x3 matrices', function() {
    var m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    var r1 = orb.vector.matrixMultiplication(m1, m2);

    r1.should.eql([
      24,  30,  36,
      51,  66,  81,
      78, 102, 126
    ]);
  });

  it('should correctly multiply a 3x3 and a 3x1 matrix', function() {
    var m1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m2 = [0, 1, 2];

    var r2 = orb.vector.matrixMultiplication(m1, m2);

    r2.should.eql([
       8,
      17,
      26
    ]);
  });

});

