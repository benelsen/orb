
export default function dotProduct(u, v) {

  if ( u.length !== v.length ) {
    throw new Error('Vectors have different sizes');
  }

  return u.reduce( (memo, ui, i) => memo + u[i] * v[i], 0 );

}
