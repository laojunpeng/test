import { Auth } from '../constants'
import { getToken, setToken } from '@/utils/token'
import { handleActions } from 'redux-actions'
const TOKEN = getToken(10000)
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
  setToken(state.headerInfo.appId, token)
  return { ...state, headerInfo }
}
reducers[Auth.UPDATE_APP_ID] = function (state, action) {
  const appId = action.payload
  const token = getToken(appId)
  const headerInfo = Object.assign({}, state.headerInfo, { appId, token })
  return { ...state, headerInfo }
}
export default handleActions(reducers, INITIAL_STATE)
