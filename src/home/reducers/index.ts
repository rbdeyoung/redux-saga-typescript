import {counter, CounterState} from './counter'
import {combineReducers} from 'redux'

export interface HomePageState {
    counter: CounterState,
}

export const homePage = combineReducers<HomePageState>({counter})