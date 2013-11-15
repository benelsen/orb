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
