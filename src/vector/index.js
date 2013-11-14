orb.vector = orb.v = {};

orb.vector.matrixMult = function(m1, m2) {

  if ( m2.length === 9 ) {

    return [
      m1[0]*m2[0] + m1[1]*m2[3] + m1[2]*m2[6], m1[0]*m2[1] + m1[1]*m2[4] + m1[2]*m2[7], m1[0]*m2[2] + m1[1]*m2[5] + m1[2]*m2[8],
      m1[3]*m2[0] + m1[4]*m2[3] + m1[5]*m2[6], m1[3]*m2[1] + m1[4]*m2[4] + m1[5]*m2[7], m1[3]*m2[2] + m1[4]*m2[5] + m1[5]*m2[8],
      m1[6]*m2[0] + m1[7]*m2[3] + m1[8]*m2[6], m1[6]*m2[1] + m1[7]*m2[4] + m1[8]*m2[7], m1[6]*m2[2] + m1[7]*m2[5] + m1[8]*m2[8]
    ];

  } else if ( m2.length === 3 ) {

    return [
      m1[0]*m2[0] + m1[1]*m2[1] + m1[2]*m2[2],
      m1[3]*m2[0] + m1[4]*m2[1] + m1[5]*m2[2],
      m1[6]*m2[0] + m1[7]*m2[1] + m1[8]*m2[2]
    ];

  }

  return null;

}

orb.vector.mm = orb.vector.matrixMult;

orb.vector.rotationMatrix = function(α, e) {
  var cosα = Math.cos(α),
      sinα = Math.sin(α);

  switch(e) {
    case 1:
      return [
        1,     0,    0,
        0,  cosα, sinα,
        0, -sinα, cosα
      ];
      break;
    case 2:
      return [
        cosα, 0, -sinα,
           0, 1,     0,
        sinα, 0,  cosα
      ];
      break;
    case 3:
      return [
         cosα, sinα, 0,
        -sinα, cosα, 0,
            0,    0, 1
      ];
      break;
  }
};

orb.vector.r = orb.vector.rotationMatrix;

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
