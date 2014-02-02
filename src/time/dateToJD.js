
var dateToJD = function(date) {

  var y, m, d, h;

  if ( date instanceof Array ) {

    y = date[0];
    m = date[1];
    d = date[2];
    h = date[3] +
        date[4] / 60 +
        date[5] / 3600;

  } else if ( date instanceof Date ) {

    y = date.getUTCFullYear();
    m = date.getUTCMonth() + 1;
    d = date.getUTCDate();
    h = date.getUTCHours() +
      date.getUTCMinutes() / 60 +
      date.getUTCSeconds() / 3600;

  } else {
    throw new Error('date is of invalid type');
  }

  var f = m > 2 ? y : y - 1,
      g = m > 2 ? m : m + 12;

  var a = 2 - Math.floor( f / 100 ) + Math.floor( f / 400 );

  var jd = Math.floor( 365.25 * f ) + Math.floor( 30.6001 * ( g + 1 ) ) + d + a + 1720994.5;

  return jd + h / 24;

};

exports.dateToJD = dateToJD;
