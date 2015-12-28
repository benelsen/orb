
export default function mirrorMatrix (e) {

  const q = [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1,
  ]

  q[(--e) * 4] *= -1

  return q
}
