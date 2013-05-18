import "transformations";

orb.transformations.orbitalPlaneToECI = function(x, Ω, ω, i) {

  var sinΩ = Math.sin(Ω),
      cosΩ = Math.cos(Ω),
      sinω = Math.sin(ω),
      cosω = Math.cos(ω),
      sini = Math.sin(i),
      cosi = Math.cos(i);

  var xECI = [
    x[0] * ( cosΩ*cosω - sinΩ*sinω*cosi ) + x[1] * ( -cosΩ*sinω - sinΩ*cosω*cosi ) + x[2] * (  sinΩ*sini ),
    x[0] * ( sinΩ*cosω + cosΩ*sinω*cosi ) + x[1] * ( -sinΩ*sinω + cosΩ*cosω*cosi ) + x[2] * ( -cosΩ*sini ),
    x[0] * ( sinω*sini )                  + x[1] * ( cosω*sini )                   + x[2] * ( cosi )
  ];

  return xECI;
};
