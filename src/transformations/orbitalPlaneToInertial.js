import vector from '../vector';

export function orbitalPlaneToInertial (x, Ω, ω, i) {

  return vector.mm(
    vector.r(-Ω, 3), vector.mm(
      vector.r(-i, 1), vector.mm(
        vector.r(-ω, 3), x
      )
    )
  );

}
