import * as React from 'react'
import './Home.css'
import {TestComponent} from './TestComponent'
import {SFC} from 'react'
import logo from './react.svg'
import {RootState} from '../app/reducers/index'
import {updateCounter} from './actions/creators'
import {CounterOperation} from './types'
import {connect, Dispatch} from 'react-redux'

export interface HomePageStateProps {
    counter: number
}

export interface HomePageDispatchProps {
    onIncrement: () => void
    onDecrement: () => void
}

export interface HomeProps extends HomePageStateProps, HomePageDispatchProps {

}

export const HomePageComponent: SFC<HomeProps> = ({counter, onIncrement, onDecrement}) =>

    <div className="Home">
        <div>
            <button onClick={onDecrement}>Decrement</button>
            {counter}
            <button onClick={onIncrement}>+</button>
        </div>
    </div>

export const mapStateToProps: (_: RootState) => HomePageStateProps = state => ({
    counter: state.homePage.counter.value,
})

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): HomePageDispatchProps => ({
    onDecrement: () => dispatch(updateCounter(CounterOperation.DECREMENT)),
    onIncrement: () => dispatch(updateCounter(CounterOperation.INCREMENT)),
})

export const Home = connect<HomePageStateProps, HomePageDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(HomePageComponent)