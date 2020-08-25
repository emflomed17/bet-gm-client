// @flow
import { Map } from 'immutable';

export const getAuthIsLoading = (state: Map): boolean => state.get('authIsLoading');

export const getUserData = (state: Map): Map => state.get('userData');

export const getAuthError = (state: Map): string => state.get('authError');