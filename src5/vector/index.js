'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _matrixMultiplication = require('./matrixMultiplication');

var _matrixMultiplication2 = _interopRequireDefault(_matrixMultiplication);

var _mirrorMatrix = require('./mirrorMatrix');

var _mirrorMatrix2 = _interopRequireDefault(_mirrorMatrix);

var _rotationMatrix = require('./rotationMatrix');

var _rotationMatrix2 = _interopRequireDefault(_rotationMatrix);

var _crossProduct = require('./crossProduct');

var _crossProduct2 = _interopRequireDefault(_crossProduct);

var _dotProduct = require('./dotProduct');

var _dotProduct2 = _interopRequireDefault(_dotProduct);

var vector = {
  matrixMultiplication: _matrixMultiplication2['default'], mm: _matrixMultiplication2['default'],
  mirrorMatrix: _mirrorMatrix2['default'], q: _mirrorMatrix2['default'],
  rotationMatrix: _rotationMatrix2['default'], r: _rotationMatrix2['default'],
  crossProduct: _crossProduct2['default'], cross: _crossProduct2['default'],
  dotProduct: _dotProduct2['default'], dot: _dotProduct2['default']
};

exports['default'] = vector;
module.exports = exports['default'];