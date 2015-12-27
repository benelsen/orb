
import './polyfill'

import {version} from '../package.json'

import common from './common'
import constants from './constants'
import * as functions from './functions'
import time from './time'
import transformations from './transformations'
import propagators from './propagators'
import vector from './vector'

export const orb = {
  version,
  common,
  constants,
  functions,
  time,
  transformations,
  propagators,
  vector,
  v: vector,
}
export default orb
