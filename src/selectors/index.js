// @flow
import { Map } from 'immutable';
import * as authSelectors from './auth_selectors';

// Authentication selectors
export const getAuthIsLoading = (state: Map): boolean => authSelectors.getAuthIsLoading(state.auth);

export const getUserData = (state: Map): Map => authSelectors.getUserData(state.auth);

export const getAuthError = (state: Map): string => authSelectors.getAuthError(state.auth);