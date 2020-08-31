import { combineReducers } from 'redux'
import authReducer from './auth_reducer'
import betsReducer from './bets_reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  bets: betsReducer,
})

export default rootReducer
