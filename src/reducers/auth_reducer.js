// @flow
import { Map, fromJS } from 'immutable'
import { AUTH_USER, AUTH_IN_PROGRESS, AUTH_ERROR } from '../actions/auth/auth-types'
import type { ApiAction } from '../actions/action_types'

const INITIAL_STATE: Map = fromJS({
  authIsLoading: false,
  userData: undefined,
  authError: undefined,
})

const onAuthUser = (state, action): Map => {
  const { payload } = action
  return state.set('userData', payload).set('authIsLoading', false).set('authError', undefined)
}

const onAuthInProgress = (state): Map => {
  return state.set('authIsLoading', true)
}

const onAuthError = (state, action): Map => {
  const { payload } = action
  return state.set('authError', payload).set('authIsLoading', false)
}

const actionMap = {
  [AUTH_USER]: onAuthUser,
  [AUTH_IN_PROGRESS]: onAuthInProgress,
  [AUTH_ERROR]: onAuthError,
}

export default function (
  state: Map<string, any> = INITIAL_STATE,
  action: ApiAction<any, any>,
): Map {
  return actionMap[action.type] ? actionMap[action.type](state, action) : state
}
