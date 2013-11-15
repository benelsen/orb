import "./";

/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

orb.constants.time = {

  // MJD = JD - 2400000.5 days
  MJDJD  : -2400000.5, // days

  // TT = TAI + 32.184 seconds
  TTTAI  : +32184,

  // DUT1 = UT1 - UTC = -0.1
  // -0.1 seconds beginning 21 Nov 2013 at 0000 UTC
  DUT1   : -100,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid until at least 2013-12-31)
  TAIUTC : +35000
};
