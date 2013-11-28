import "./";

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

  }
};

orb.vector.r = orb.vector.rotationMatrix;
