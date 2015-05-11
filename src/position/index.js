
import keplerian from './keplerian';
import keplerEquation from './keplerEquation';
import stateToKepler from './stateToKepler';

const position = {
  keplerian,
  simple: keplerian,
  keplerEquation,
  stateToKepler
};

export default position;
