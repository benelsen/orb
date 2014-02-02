var time = {};

var conversions = require('./conversions').conversions;
for ( var key in conversions ) {
  time[key] = conversions[key];
}

time.leapSeconds = require('./leapSeconds').leapSeconds;
time.dateToJD = require('./dateToJD').dateToJD;

exports.time = time;
