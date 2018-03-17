import * as t from './types'

import { createAction } from 'redux-actions'
import { CounterOperation } from '../types'

export const updateCounter = createAction<CounterOperation>(t.UPDATE_COUNTER)
