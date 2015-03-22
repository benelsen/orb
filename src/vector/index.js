
import matrixMultiplication from './matrixMultiplication';
import mirrorMatrix from './mirrorMatrix';
import rotationMatrix from './rotationMatrix';

const vector = {
  matrixMultiplication, mm: matrixMultiplication,
  mirrorMatrix, q: mirrorMatrix,
  rotationMatrix, r: rotationMatrix
};

export default vector;
