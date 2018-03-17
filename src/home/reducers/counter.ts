import * as t from '../actions/types'
import { Action, handleActions } from 'redux-actions'
import { CounterOperation } from '../types'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counter = handleActions<CounterState, CounterOperation>({
    [t.UPDATE_COUNTER]: (state: CounterState, action: Action<CounterOperation>) =>
        ({ value: state.value + (action.payload === CounterOperation.INCREMENT ? 1 : -1)})
    ,
}, initialState)