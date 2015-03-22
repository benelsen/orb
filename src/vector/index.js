
import matrixMultiplication from './matrixMultiplication';
import mirrorMatrix from './mirrorMatrix';
import rotationMatrix from './rotationMatrix';
import crossProduct from './crossProduct';
import dotProduct from './dotProduct';

const vector = {
  matrixMultiplication, mm: matrixMultiplication,
  mirrorMatrix, q: mirrorMatrix,
  rotationMatrix, r: rotationMatrix,
  crossProduct, cross: crossProduct,
  dotProduct, dot: dotProduct
};

export default vector;
