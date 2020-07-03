import { createAction } from 'redux-actions'

import { Account } from '@/store/constants'

export const updateUserInfo = createAction(Account.UPDATE_USER_INFO, (user) => user)
