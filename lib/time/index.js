
import * as conversions from './conversions'
import dateToJD from './dateToJD'

const time = {
  dateToJD,
}

for ( let key of Object.keys(conversions) ) {
  time[key] = conversions[key]
}

export default time
