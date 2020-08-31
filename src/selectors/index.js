// @flow
import { Map } from 'immutable'
import * as authSelectors from './auth_selectors'
import * as betsSelectors from './bets_selectors'

// Authentication selectors
export const getAuthIsLoading = (state: Map): boolean => authSelectors.getAuthIsLoading(state.auth)

export const getUserData = (state: Map): Map => authSelectors.getUserData(state.auth)

export const getAuthError = (state: Map): string => authSelectors.getAuthError(state.auth)

// Bets selectors
export const getBetsInProgress = (state: Map): boolean =>
  betsSelectors.getBetsInProgress(state.bets)

export const getBetsData = (state: Map): Map => betsSelectors.getBetsData(state.bets)

export const getBetsError = (state: Map): string => betsSelectors.getBetsError(state.bets)
