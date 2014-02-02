var angular = {};

angular.deg2rad = function(deg) {
  return deg * Math.PI / 180;
};

angular.rad2deg = function(rad) {
  return rad * 180 / Math.PI;
};

exports.angular = angular;
