
import './polyfill';

import pkg from '../package.json';

import common from './common';
import constants from './constants';
import functions from './functions';
import time from './time';
import transformations from './transformations';
import position from './position';
import vector from './vector';

export default {
  version: pkg.version,
  common,
  constants,
  functions,
  time,
  transformations,
  position,
  vector,
  v: vector
};
