var vector = {};

vector.matrixMultiplication = vector.mm = require('./matrixMultiplication').matrixMultiplication;
vector.mirrorMatrix         = vector.q  = require('./mirrorMatrix').mirrorMatrix;
vector.rotationMatrix       = vector.r  = require('./rotationMatrix').rotationMatrix;

exports.vector = vector;
