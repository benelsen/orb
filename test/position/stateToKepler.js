var should = require('should');

var orb = require('./../../');

describe('orb.position.stateToKepler', function() {

  it('should return the state vectors of a satellite after 900s', function() {

    var a = 6649e3,
        e = 0.002,
        i = orb.common.deg2rad(97),
        Ω = orb.common.deg2rad(118),
        ω = orb.common.deg2rad(-250+360),
        T0 = 0,
        t = 15*60;

    var testPosition = {
      x: {
        x:  3194418.35653,
        y: -5715730.19269,
        z:  1116844.10036
      },
      v: {
        x:  -199.07213470,
        y: -1607.83626052,
        z: -7579.15862735
      },
    };

    var x = orb.position.stateToKepler(
      [testPosition.x.x, testPosition.x.y, testPosition.x.z],
      [testPosition.v.x, testPosition.v.y, testPosition.v.z], t);
    x[0].should.be.approximately(a, 1e-3);
    x[1].should.be.approximately(e, 1e-5);
    x[2].should.be.approximately(i, 1e-5);
    x[3].should.be.approximately(Ω, 1e-5);
    x[4].should.be.approximately(ω, 1e-5);
    x[5].should.be.approximately(T0, 1e-5);
  });

  it('should return the state vectors of earth after 1yr', function() {

    var a = 149598261150,
        e = 0.01671123,
        i = orb.common.deg2rad(7.155),
        Ω = orb.common.deg2rad(348.73936),
        ω = orb.common.deg2rad(114.20783),
        T0 = 0,
        t = 365.256363004*86400;

    var m1 = 1.988546944e30,
        m2 = 5.9725801308e24*1.0123000371;

    var testPosition = {
      x: {
        x: -33158216645.818844,
        y: 142334785036.72403,
        z:  16710733601.488567
      },
      v: {
        x: -29497.972100017116,
        y:  -6690.245698136594,
        z:  -1546.7484094314725
      },
    };

    var x = orb.position.stateToKepler(
      [testPosition.x.x, testPosition.x.y, testPosition.x.z],
      [testPosition.v.x, testPosition.v.y, testPosition.v.z], t, m1, m2);
    x[0].should.be.approximately(a, 1e-3);
    x[1].should.be.approximately(e, 1e-5);
    x[2].should.be.approximately(i, 1e-5);
    x[3].should.be.approximately(Ω-2*Math.PI, 1e-5);
    x[4].should.be.approximately(ω, 1e-5);
    (x[5] - t).should.be.approximately(T0, 1e+3);
  });

});
