// @flow
import { Map } from 'immutable'

export const getBetsInProgress = (state: Map): boolean => state.get('betsInProgress')

export const getBetsData = (state: Map): Map => state.get('betsData')

export const getBetsError = (state: Map): string => state.get('betsError')
