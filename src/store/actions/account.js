import { createAction } from 'redux-actions'

import { Account } from '@/store/constants'

export const updateUser = createAction(Account.UPDATE_USER_INFO, (user) => ({user}))
