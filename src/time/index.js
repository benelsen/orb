
import leapSeconds from 'leapseconds';
import * as conversions from './conversions';
import dateToJD from './dateToJD';

const time = {
  leapSeconds,
  dateToJD
};

for ( let key in conversions ) {
  time[key] = conversions[key];
}

export default time;
