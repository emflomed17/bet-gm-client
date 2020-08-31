// @flow
import { Map, fromJS } from 'immutable';
import {
  AUTH_USER,
  AUTH_IN_PROGRESS,
  AUTH_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_IN_PROGRESS,
  FORGOT_PASSWORD_ERROR,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_IN_PROGRESS,
  SET_NEW_PASSWORD_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_IN_PROGRESS,
  SIGNUP_ERROR,
  VALIDATE_CODE_IN_PROGRESS,
  VALIDATE_CODE_SUCCESS,
  VALIDATE_CODE_ERROR,
  CLEAN_SET_NEW_PASSWORD,
} from '../actions/auth/auth-types';
import type { ApiAction } from '../actions/action_types';

const INITIAL_STATE: Map = fromJS({
  authIsLoading: false,
  userData: undefined,
  authError: undefined,
  forgotPasswordInProgress: false,
  forgotPasswordSuccess: undefined,
  forgotPasswordError: undefined,
  setNewPasswordSuccess: undefined,
  setNewPasswordInProgress: false,
  setNewPasswordError: undefined,
  signupUserData: undefined,
  signupInProgress: false,
  signupError: undefined,
  validateCodeSuccess: undefined,
  validateCodeInProgress: false,
  validateCodeError: undefined,
});

const onAuthUser = (state, action): Map => {
  const { payload } = action;
  return state.set('userData', payload).set('authIsLoading', false);
};

const onAuthInProgress = (state): Map => {
  return state.set('authIsLoading', true)
};

const onAuthError = (state, action): Map => {
  const { payload } = action;
  return state.set('authError', payload).set('authIsLoading', false);
};

const actionMap = {
  [AUTH_USER]: onAuthUser,
  [AUTH_IN_PROGRESS]: onAuthInProgress,
  [AUTH_ERROR]: onAuthError,
};

export default function(
  state: Map<string, any> = INITIAL_STATE,
  action: ApiAction<any, any>
): Map {
  return actionMap[action.type] ? actionMap[action.type](state, action) : state;
}
