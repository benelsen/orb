var leapSecondDates = [
  new Date("1972-06-30T23:59:59.999Z"),
  new Date("1972-12-31T23:59:59.999Z"),
  new Date("1973-12-31T23:59:59.999Z"),
  new Date("1974-12-31T23:59:59.999Z"),
  new Date("1975-12-31T23:59:59.999Z"),
  new Date("1976-12-31T23:59:59.999Z"),
  new Date("1977-12-31T23:59:59.999Z"),
  new Date("1978-12-31T23:59:59.999Z"),
  new Date("1979-12-31T23:59:59.999Z"),
  new Date("1981-06-30T23:59:59.999Z"),
  new Date("1982-06-30T23:59:59.999Z"),
  new Date("1983-06-30T23:59:59.999Z"),
  new Date("1985-06-30T23:59:59.999Z"),
  new Date("1987-12-31T23:59:59.999Z"),
  new Date("1989-12-31T23:59:59.999Z"),
  new Date("1990-12-31T23:59:59.999Z"),
  new Date("1992-06-30T23:59:59.999Z"),
  new Date("1993-06-30T23:59:59.999Z"),
  new Date("1994-06-30T23:59:59.999Z"),
  new Date("1995-12-31T23:59:59.999Z"),
  new Date("1997-06-30T23:59:59.999Z"),
  new Date("1998-12-31T23:59:59.999Z"),
  new Date("2005-12-31T23:59:59.999Z"),
  new Date("2008-12-31T23:59:59.999Z"),
  new Date("2012-06-30T23:59:59.999Z")
];

orb.time.leapSeconds = function(date) {

  return 10 + leapSecondDates.filter(function(d) {
    return date > d;
  }).length;

};
