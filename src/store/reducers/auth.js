import { Auth } from '../constants'
import { handleActions } from 'redux-actions'
const TOKEN = localStorage.getItem('token') || ''
const INITIAL_STATE = {
  headerInfo: {
    deviceId: '1',
    deviceType: 'website',
    appId: 10000,
    deviceDetail: '1',
    token: TOKEN,
  },
}
let reducers = {}
reducers[Auth.UPDATE_TOKEN] = function (state, action) {
  const token = action.payload.token.value
  const headerInfo = Object.assign({}, state.headerInfo, { token })
  localStorage.setItem('token', token)
  return { ...state, headerInfo }
}
reducers[Auth.UPDATE_APP_ID] = function (state, action) {
  const headerInfo = Object.assign({}, state.headerInfo, { token: action.payload })
  return { ...state, headerInfo }
}
export default handleActions(reducers, INITIAL_STATE)
