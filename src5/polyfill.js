
// Modified Math.hypot from core-js
// The current implementation in core-js has a bug w/ negative values.
'use strict';

if (typeof Math.hypot === 'undefined') {

  Math.hypot = function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0,
        len1 = arguments.length,
        len2 = len1,
        args = Array(len1),
        larg = 0,
        arg;
    while (len1--) {
      arg = args[len1] = Math.abs(arguments[len1]);
      if (arg == Infinity) return Infinity;
      if (arg > larg) larg = arg;
    }
    larg = larg || 1;
    while (len2--) sum += Math.pow(args[len2] / larg, 2);
    return larg * Math.sqrt(sum);
  };
}