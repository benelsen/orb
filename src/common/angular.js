import "common";

orb.common.deg2rad = function(deg) {
  return deg * Math.PI / 180;
}

orb.common.rad2deg = function(rad) {
  return rad * 180 / Math.PI;
}
