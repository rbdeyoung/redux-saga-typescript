import { combineReducers } from 'redux'
import { mainComponent, MainComponentState } from './test'
import { homePage, HomePageState } from '../../home/reducers'
export interface RootState {
    mainComponent: MainComponentState
    homePage: HomePageState
}

export const rootReducer = combineReducers<RootState>({
    mainComponent,
    homePage
})
