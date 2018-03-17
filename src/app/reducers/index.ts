import { combineReducers } from 'redux'
import { homePage, HomePageState } from '../../home/reducers'
export interface RootState {
    homePage: HomePageState
}

export const rootReducer = combineReducers<RootState>({
    homePage
})
