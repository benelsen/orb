import "./";

orb.vector.mirrorMatrix = function(e) {

  var q = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  q[(--e)*4] *= -1;

  return q;
};

orb.vector.q = orb.vector.mirrorMatrix;
