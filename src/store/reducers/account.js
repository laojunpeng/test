import { isEmpty } from 'lodash'

import { Account } from '../constants'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  user: {},
  isLogin: false,
}
let reducers = {}
reducers[Account.UPDATE_USER_INFO] = function (state, action) {
  let user = action.payload
  let isLogin = !isEmpty(user)
  return { ...state, user, isLogin }
}
export default handleActions(reducers, INITIAL_STATE)
