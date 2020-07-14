import { createAction } from 'redux-actions'

import { Auth } from '@/store/constants'

import * as api from '@/api'

// export const updateHeaderInfo = createAction(Auth.UPDATE_HEADER_INFO, (headerInfo) => ({ headerInfo }))
export const updateAppId = createAction(Auth.UPDATE_APP_ID, (appId) => appId)
export const updateToken = createAction(Auth.UPDATE_TOKEN, async (appId=10000) => {
  let result = await api.api_v3_token_post({
    params: {
      deviceId: '1',
      deviceType: '1',
      test: '1',
      timestamp: '20191112110600000',
      sign: '1',
      appId,
    },
  })
  return result
})
export const updateAuthorization = createAction(Auth.UPDATE_ACCESS_TOKEN, (value) => value)
