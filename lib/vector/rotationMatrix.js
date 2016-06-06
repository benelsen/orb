/* eslint-disable no-multi-spaces */

/**
 * returns a matrix for a coordinate system rotation
 * of α radians around axis e relative to the origin.
 * These rotation matrices are for CRS transformations not geometric
 * point transformations!
 * @param  {number} α      Angle to rotate (in radians)
 * @param  {number} e      Axis index to rotate about
 * @return {Array<number>} Rotation matrix
 */
export default function rotationMatrix (α, e) {
  α = α % (2 * Math.PI)

  const cosα = Math.cos(α)
  const sinα = Math.sin(α)

  switch (e) {
    case 1:
      return [
        1,     0,    0,
        0,  cosα, sinα,
        0, -sinα, cosα
      ]

    case 2:
      return [
        cosα, 0, -sinα,
        0,    1,     0,
        sinα, 0,  cosα
      ]

    case 3:
      return [
        +cosα, sinα, 0,
        -sinα, cosα, 0,
        0,     0,    1
      ]

    default:
      throw new Error('rotation axis has to be 1, 2 or 3')

  }
}
