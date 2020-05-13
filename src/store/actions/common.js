import { createAction } from 'redux-actions'

import { Common } from '@/store/constants'

export const updateLoading = createAction(Common.UPDATE_LOADING, (loading) => loading)
