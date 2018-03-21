import * as React from 'react'
import './Home.css'
import {SFC} from 'react'
import {RootState} from '../app/reducers'
import {updateCounter} from './actions/creators'
import {CounterOperation} from './types'
import {connect, Dispatch} from 'react-redux'
import {UIBlocker} from '../app/reducers/uiBlockers'

export interface HomePageStateProps {
    counter: number,
    blockers: UIBlocker[],
}

export interface HomePageDispatchProps {
    onIncrement: () => void
    // onDecrement: () => void
}

export interface HomeProps extends HomePageStateProps, HomePageDispatchProps {

}

export const HomePageComponent: SFC<HomeProps> = ({counter, blockers, onIncrement}) =>

    <div className="Home">
        <div>
            {/*<button onClick={onDecrement}>Decrement</button>*/}
            {counter}
            <button onClick={onIncrement}>Issue a call</button>
        </div>

        <ul>
            {blockers.map(b => <li key={b.id}>{b.id}</li>)}
        </ul>
    </div>

export const mapStateToProps: (_: RootState) => HomePageStateProps = state =>
    ({
        counter: state.uiBlockers.count,
        blockers: state.uiBlockers.list
    })

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): HomePageDispatchProps => ({
    // onDecrement: () => dispatch(updateCounter(CounterOperation.DECREMENT)),
    onIncrement: () => dispatch(updateCounter(CounterOperation.INCREMENT)),
})

export const Home = connect<HomePageStateProps, HomePageDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(HomePageComponent)