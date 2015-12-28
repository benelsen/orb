
export const keplerEquation = (e, M, ε = 1e-18, maxIter = 100) => {

  let E = e < 0.8 ? M : Math.PI

  let dE = 1
  let i = 0

  while ( Math.abs(dE) > ε && i < maxIter ) {
    dE = (M + e * Math.sin(E) - E) / (1 - e * Math.cos(E))
    E = E + dE
    i++
  }

  return E
}
