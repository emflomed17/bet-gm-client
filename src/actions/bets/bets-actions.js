// @flow
import { AsyncStorage } from 'react-native'
import { BETS_DATA, BETS_ERROR, BETS_IN_PROGRESS } from './bets-types'
import type { Dispatch, ThunkAction } from '../action_types'
import { getBets } from '../../api/bets'

export const getGroupBets = (): ThunkAction<string, string> => {
  return async (dispatch: Dispatch<string, string>) => {
    dispatch({
      type: BETS_IN_PROGRESS,
      payload: ''
    })
    try {
      const AS_DATA = JSON.parse(await AsyncStorage.getItem('@UserData'))
      const { group, token } = AS_DATA
      const betsData = getBets(group, token)
      dispatch({
        type: BETS_DATA,
        payload: betsData.data
      })
    } catch (err) {
      dispatch({
        type: BETS_ERROR,
        payload: err
      })
    }
  }
}
