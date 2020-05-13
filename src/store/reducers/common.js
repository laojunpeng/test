import { Common } from '../constants'
import { handleActions } from 'redux-actions'
import { isBoolean } from 'lodash'

const INITIAL_STATE = {
  loading: false,
}
let reducers = {}
reducers[Common.UPDATE_LOADING] = function (state, action) {
  let loading = isBoolean(action.payload) && action.payload
  return { ...state, loading }
}
export default handleActions(reducers, INITIAL_STATE)
