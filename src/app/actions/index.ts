import { createAction } from 'redux-actions'
import * as t from './types'

export const mainComponentAction = createAction<string>(t.MAIN_COMPONENT_ACTION)
