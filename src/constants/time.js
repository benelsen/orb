/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

var time = {

  // MJD = JD - 2400000.5 days
  MJDJD  : -2400000.5, // days

  // TT = TAI + 32.184 seconds
  TTTAI  : +32.184,

  // DUT1 = UT1 - UTC = -0.1
  // -0.2 seconds beginning 20 February 2014 at 0000 UTC
  DUT1   : -0.200,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid until at least 2013-12-31)
  TAIUTC : +35.000,

  // TAI - GPS = 19.000 seconds (fixed)
  TAIGPS : +19.000
};

exports.time = time;
