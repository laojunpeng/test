import {store} from '@/store'
import { Common as CommonActions } from '@/store/actions'

export default class QueueLoading {
  constructor() {
    this.loadingCount = 0
  }
  addRequest(flag) {
    flag && this.loadingCount++
    store.dispatch(CommonActions.updateLoading(true))
    console.info('loading show')
  }
  removeRequest(flag) {
    flag && this.loadingCount--
    if (this.loadingCount === 0) {
      store.dispatch(CommonActions.updateLoading(false))
      console.info('loading close')
    }
  }
}
