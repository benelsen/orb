
export default function crossProduct(u, v) {

  if ( u.length === 3 && v.length === 3 ) {

    return [
      u[1] * v[2] - u[2] * v[1],
      u[2] * v[0] - u[0] * v[2],
      u[0] * v[1] - u[1] * v[0]
    ];

  } else {

    throw new Error('unsupported vector sizes');

  }

}
