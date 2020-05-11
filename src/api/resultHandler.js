import store from '@/store'
import { Auth as AuthActions } from '@/store/actions'
import { CODE as ErrorCode } from '@/utils/error'

export const getResult = async ({ status, data, config }, instance) => {
  if (status === ErrorCode.SUCCESS) {
    if (data.code === ErrorCode.INVAILD_TOKEN) {
      await store.dispatch(AuthActions.updateToken())
      return instance(config)
    }
    return data.data
  }
}

const tips = new WeakMap([[ErrorCode.INVAILD_TOKEN, {toast:false, msg:'无效token'}]])
