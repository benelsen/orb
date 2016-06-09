
import './polyfill'

import * as common from './common/index'
import * as constants from './constants/index'
import * as functions from './functions/index'
import * as time from './time/index'
import transformations from './transformations/index'
import propagators from './propagators/index'
import vector from './vector/index'

const orb = {
  common,
  constants,
  functions,
  time,
  transformations,
  propagators,
  vector
}
export default orb
