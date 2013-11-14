
var orb = module.exports = new Function('orb', 'return ' + require('fs').readFileSync(__dirname + '/orb.js', 'utf8'))();
