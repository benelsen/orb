/**
 * Converts a date to Julian Date
 *   Input and output are on the same continuous time scale.
 *   JD is usually specified in TT, corrections are needed
 *   to convert a UTC date to JD in TT: UTC -> TAI -> TT -> JD
 *
 * @param {Array, Date, number} date - The date to be converted to JD
 *        This can either be an Array of form [year, month, day, hour, minute, second],
 *        a Date or a Unix Offset.
 * @return {number}
 */
export default function dateToJD (date) {

  let y
  let m
  let d
  let h

  if ( date instanceof Array ) {

    y = date[0]
    m = date[1]
    d = date[2]
    h = (date[3] || 0) +
        (date[4] || 0) / 60 +
        (date[5] || 0) / 3600 +
        (date[6] || 0) / 3600e3

  } else if ( date instanceof Date || typeof date === 'number' ) {

    if ( typeof date === 'number' ) {
      date = new Date(date)
    }

    y = date.getUTCFullYear()
    m = date.getUTCMonth() + 1
    d = date.getUTCDate()
    h = date.getUTCHours() +
        date.getUTCMinutes() / 60 +
        date.getUTCSeconds() / 3600 +
        date.getUTCMilliseconds() / 3600e3

  } else {
    throw new Error('date is of invalid type')
  }

  const f = m > 2 ? y : y - 1
  const g = m > 2 ? m : m + 12

  const a = 2 - Math.floor( f / 100 ) + Math.floor( f / 400 )

  const jd = Math.floor( 365.25 * f ) + Math.floor( 30.6001 * ( g + 1 ) ) + d + a + 1720994.5

  return jd + h / 24
}
