import { combineReducers } from 'redux'
import account from './account'
import auth from './auth'
import common from './common'

export default combineReducers({
  account,
  auth,
  common
})
