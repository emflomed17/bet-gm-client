// @flow
export type AuthActionType =
  | 'auth_user'
  | 'auth_in_progress'
  | 'auth_error';

export const AUTH_USER: AuthActionType = 'auth_user';
export const AUTH_IN_PROGRESS: AuthActionType = 'auth_in_progress';
export const AUTH_ERROR: AuthActionType = 'auth_error';
