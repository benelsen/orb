
import './polyfill';

import pkg from '../package.json';

import * as common from './common';
import constants from './constants';
import time from './time';
import vector from './vector';
import transformations from './transformations';
import position from './position';

const version = pkg.version;

const orb = {
  version, common, constants, time, vector, v: vector, transformations, position
};

export default orb;
