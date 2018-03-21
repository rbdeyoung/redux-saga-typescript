import { combineReducers } from 'redux'
import { homePage, HomePageState } from '../../home/reducers'
import { uiBlockers, UIBlockersState} from './uiBlockers'

export interface RootState {
    homePage: HomePageState,
    uiBlockers: UIBlockersState,
}

export const rootReducer = combineReducers<RootState>({
    homePage, uiBlockers
})
