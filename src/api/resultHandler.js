import store from '@/store'
import { Auth as AuthActions } from '@/store/actions'
import { CODE as ErrorCode } from '@/utils/error'

export const getResult = async ({ status, data, config  }, instance) => {
  if (status === ErrorCode.SUCCESS) {
    showTips(status)
    if (data.code === ErrorCode.INVAILD_TOKEN) {
      await store.dispatch(AuthActions.updateToken())
      return instance(config)
    }
    return data
  }
}

function showTips(code) {
  let { shouldToast, msg } = tips.get(code)||{}
  if (shouldToast) {
    console.info(msg)
  }
}

const tips = new Map([[ErrorCode.INVAILD_TOKEN, { shouldToast: false, msg: '无效token' }]])
