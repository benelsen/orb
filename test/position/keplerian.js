var should = require('should');

var orb = require('./../../');

describe('orb.position.keplerian', function() {

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

    var x = orb.position.keplerian(a, e, i, Ω, ω, t, T0);
    x[0][0].should.be.approximately(testPosition.x.x, 1e-5);
    x[0][1].should.be.approximately(testPosition.x.y, 1e-5);
    x[0][2].should.be.approximately(testPosition.x.z, 1e-5);
    x[1][0].should.be.approximately(testPosition.v.x, 1e-7);
    x[1][1].should.be.approximately(testPosition.v.y, 1e-7);
    x[1][2].should.be.approximately(testPosition.v.z, 1e-7);
  });

  it('should return the state vectors of earth after 1yr', function() {

    var a = 149598261150,
        e = 0.01671123,
        i = orb.common.deg2rad(7.155),
        Ω = orb.common.deg2rad(348.73936),
        ω = orb.common.deg2rad(114.20783),
        T0 = 0,
        t = 1*365.256363004*86400;

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

    var x = orb.position.keplerian(a, e, i, Ω, ω, t, T0, 0, m1, m2);
    x[0][0].should.be.approximately(testPosition.x.x, 1e-3);
    x[0][1].should.be.approximately(testPosition.x.y, 1e-3);
    x[0][2].should.be.approximately(testPosition.x.z, 1e-3);
    x[1][0].should.be.approximately(testPosition.v.x, 1e-3);
    x[1][1].should.be.approximately(testPosition.v.y, 1e-3);
    x[1][2].should.be.approximately(testPosition.v.z, 1e-3);
  });

});
