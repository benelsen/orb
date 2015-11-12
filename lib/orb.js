
import './polyfill'

import {version} from '../package.json'

import common from './common'
import constants from './constants'
import functions from './functions'
import time from './time'
import transformations from './transformations'
import position from './position'
import vector from './vector'

export const orb = {
  version,
  common,
  constants,
  functions,
  time,
  transformations,
  position,
  vector,
  v: vector,
}
export default orb
