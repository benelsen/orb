/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

const time = {

  // MJD = JD - 2400000.5 days
  MJDJD  : -2400000.5, // days

  // TT = TAI + 32.184 seconds
  TTTAI  : +32.184,

  // DUT1 = UT1 - UTC = -0.6 (valid from 2015-03-19)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/17/bulletind-122.txt
  DUT1   : -0.600,

  // TAI - UTC = 35.000 seconds (Leap seconds) (valid from 2012-07-01 until at least 2015-06-30)
  // http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/16/bulletinc-048.txt
  TAIUTC : +35.000,

  // TAI - GPS = 19.000 seconds (fixed)
  TAIGPS : +19.000
};

export default time;
