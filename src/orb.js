
import './polyfill';

import common from './common';
import constants from './constants';
import time from './time';
import vector from './vector';
import transformations from './transformations';
import position from './position';

const version = '0.2.2';

const orb = {
  version, common, constants, time, vector, v: vector, transformations, position
};

export default orb;
