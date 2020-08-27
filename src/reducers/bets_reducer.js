// @flow
import { Map, fromJS } from 'immutable';
import { BETS_DATA, BETS_ERROR, BETS_IN_PROGRESS } from '../actions/bets/bets-types';
import type { ApiAction } from '../actions/action_types';

const INITIAL_STATE: Map = fromJS({
  betsInProgress: false,
  betsData: undefined,
  betsError: undefined,
});

const onBetsData = (state, action): Map => {
  const { payload } = action;
  return state.set('betsData', payload).set('betsInProgress', false)
};

const onBetsInProgress = (state): Map => {
  return state.set('betsInProgress', true)
};

const onBetsError = (state, action): Map => {
  const { payload } = action;
  return state.set('betsError', payload).set('betsInProgress', false);
};

const actionMap = {
  [BETS_DATA]: onBetsData,
  [BETS_IN_PROGRESS]: onBetsInProgress,
  [BETS_ERROR]: onBetsError,
};

export default function(
  state: Map<string, any> = INITIAL_STATE,
  action: ApiAction<any, any>
): Map {
  return actionMap[action.type] ? actionMap[action.type](state, action) : state;
}
