import "./";

orb.vector.rotationMatrix = function(α, e) {

  α = α % ( 2*Math.PI );

  var cosα, sinα;

  if ( α === 0 ) {
    cosα = 1;
    sinα = 0;
  } else if ( α === Math.PI/2 || α === -3/2*Math.PI ) {
    cosα = 0;
    sinα = 1;
  } else if ( α === Math.PI || α === -Math.PI ) {
    cosα = -1;
    sinα = 0;
  } else if ( α === 3/2*Math.PI || α === -Math.PI/2 ) {
    cosα = 0;
    sinα = -1;
  } else {
    cosα = Math.cos(α);
    sinα = Math.sin(α);
  }

  switch(e) {
    case 1:
      return [
        1,     0,    0,
        0,  cosα, sinα,
        0, -sinα, cosα
      ];

    case 2:
      return [
        cosα, 0, -sinα,
           0, 1,     0,
        sinα, 0,  cosα
      ];

    case 3:
      return [
         cosα, sinα, 0,
        -sinα, cosα, 0,
            0,    0, 1
      ];

    default:
      throw new Error('rotation axis has to be 1, 2 or 3');

  }
};

orb.vector.r = orb.vector.rotationMatrix;
