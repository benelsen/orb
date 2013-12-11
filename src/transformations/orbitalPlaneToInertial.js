import "./";
import "../vector/";

orb.transformations.orbitalPlaneToInertial = function(x, Ω, ω, i) {

  return orb.v.mm(
    orb.v.r(-Ω,3), orb.v.mm(
      orb.v.r(-i,1), orb.v.mm(
        orb.v.r(-ω,3), x
      )
    )
  );

};
