
export default function mirrorMatrix (e) {

  var q = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ];

  q[(--e) * 4] *= -1;

  return q;
}
