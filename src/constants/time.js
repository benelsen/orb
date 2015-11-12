/**
 * TIME
 * ====
 * All values in milliseconds unless specified
 * Naming convention: T1T2 = T1 - T2
 */

// MJD = JD - 2400000.5 days
export const MJDJD  = -2400000.5 // days

// TT = TAI + 32.184 seconds
export const TTTAI  = +32.184

// DEPRECATED
// DUT1 = UT1 - UTC = -0.6 (valid from 2015-03-19)
// http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/17/bulletind-122.txt
export const DUT1   = -0.600

// DEPRECATED
// TAI - UTC = 35.000 seconds (Leap seconds) (valid from 2012-07-01 until at least 2015-06-30)
// http://datacenter.iers.org/eop/-/somos/5Rgv/getTX/16/bulletinc-048.txt
export const TAIUTC = +35.000

// TAI - GPS = 19.000 seconds (fixed)
export const TAIGPS = +19.000
