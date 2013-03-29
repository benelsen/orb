var should = require('should');

var orb = require('./../../');

describe('orb.position.directMethod', function() {

  it('should return the state vectors of a satellite after 900s', function() {

    var a = 6649e3,
        e = 0.002,
        i = orb.common.deg2rad(97),
        Ω = orb.common.deg2rad(118),
        ω = orb.common.deg2rad(-250),
        T0 = 0,
        t = 15*60;

    var testPosition = {
      x: {
        x:  3194424.07739261,
        y: -5715683.96959309,
        z:  1117061.97506161
      },
      v: {
        x:  -198.94088498484,
        y: -1608.00837017673,
        z: -7578.87287453124
      },
    };

    var x = orb.position.directMethod(a, e, i, Ω, ω, T0, t);
    x[0][0].should.be.approximately(testPosition.x.x, 1e-4);
    x[0][1].should.be.approximately(testPosition.x.y, 1e-4);
    x[0][2].should.be.approximately(testPosition.x.z, 1e-4);
    x[1][0].should.be.approximately(testPosition.v.x, 1e-4);
    x[1][1].should.be.approximately(testPosition.v.y, 1e-4);
    x[1][2].should.be.approximately(testPosition.v.z, 1e-4);
  });

  it('should return the state vectors of earth after 1yr', function() {

    var a = 149598261*1000,
        e = 0.01671123,
        i = orb.common.deg2rad(7.155),
        Ω = orb.common.deg2rad(348.73936),
        ω = orb.common.deg2rad(114.20783),
        T0 = 0,
        t = 1*365.256363004*24*60*60;

    var m1 = 1989100e24,
        m2 = 5.9721986e24;

    var testPosition = {
      x: {
        x: -33287629473.924,
        y: 142305373449.719,
        z:  16703940319.151
      },
      v: {
        x: -29495.994,
        y:  -6717.216,
        z:  -1550.020
      },
    };

    var x = orb.position.directMethod(a, e, i, Ω, ω, T0, t, m1, m2);
    x[0][0].should.be.approximately(testPosition.x.x, 1e-2);
    x[0][1].should.be.approximately(testPosition.x.y, 1e-2);
    x[0][2].should.be.approximately(testPosition.x.z, 1e-2);
    x[1][0].should.be.approximately(testPosition.v.x, 1e-2);
    x[1][1].should.be.approximately(testPosition.v.y, 1e-2);
    x[1][2].should.be.approximately(testPosition.v.z, 1e-2);
  });

});
