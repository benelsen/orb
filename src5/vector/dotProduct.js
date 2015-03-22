"use strict";

module.exports = dotProduct;

function dotProduct(u, v) {

  if (u.length !== v.length) {
    throw new Error("Vectors have different sizes");
  }

  return u.reduce(function (memo, ui, i) {
    return memo + u[i] * v[i];
  }, 0);
}