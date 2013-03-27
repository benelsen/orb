var fs = require('fs');

var orb = require('./index');

var common = {
  name: 'orb',
  version: orb.version,
  description: '',
  keywords: [
    'orbit',
    'orbital mechanics',
    'orbit determination'
  ],
  license: 'MIT'
}

var packagejson = {
  name: common.name,
  version: common.version,
  description: common.description,
  keywords: common.keywords,
  homepage: '',
  author: {
    name: 'Ben Elsen',
    url: 'http://benelsen.com'
  },
  repository: {
    type: 'git',
    url: 'https://github.com/benelsen/orb.git'
  },
  main: 'index.js',
  dependencies: {},
  devDependencies: {
    'smash': 'latest',
    'uglify-js': 'latest',
    'jshint': 'latest'
  },
  scripts: {
    'test': 'make test'
  },
  license: common.license
};

var componentjson = {
  name: common.name,
  repo: 'benelsen/orb',
  description: common.description,
  version: common.version,
  keywords: common.keywords,
  dependencies: {},
  development: {},
  scripts: [
    'orb.js'
  ],
  license: common.license
};

fs.writeFile('package.json', JSON.stringify(packagejson, null, '  '), 'utf8');
fs.writeFile('component.json', JSON.stringify(componentjson, null, '  '), 'utf8');
