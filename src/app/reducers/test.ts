import * as t from '../actions/types'
import { handleActions } from 'redux-actions'

const initialState = { item: 'Winner!' }

export interface MainComponentState {
    item: string
}

export const mainComponent =
    handleActions<{ item: string }, string>({
        [t.MAIN_COMPONENT_ACTION]: (state, action) =>
            ({ ...state, item: action.payload! }),
    }, initialState)
