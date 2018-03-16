import { combineReducers } from 'redux'
import { mainComponent, MainComponentState } from './test'

export interface RootState {
    mainComponent: MainComponentState
}

export const rootReducer = combineReducers({
    mainComponent,
})
