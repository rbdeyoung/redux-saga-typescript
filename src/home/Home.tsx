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
        <div className="Home-header">
            <img src={logo} className="Home-logo" alt="logo"/>
            <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
            To get started, edit <code>src/App.tsx</code> or{' '}
            <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className="Home-resources">
            <li>
                <a href="https://github.com/jaredpalmer/razzle">Docs</a>
            </li>
            <li>
                <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
            </li>
            <li>
                <a href="https://palmer.chat">Community Slack</a>
            </li>
        </ul>
        <div>
            <button onClick={onDecrement}>Decrement</button>
            {counter}
            <button onClick={onIncrement}>+</button>
        </div>
        <TestComponent/>
    </div>

export const mapStateToProps: (_: RootState) => HomePageStateProps = state => ({
    counter: state.homePage.counter.value,
})

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): HomePageDispatchProps => ({
    onDecrement: () => dispatch(updateCounter(CounterOperation.DECREMENT)),
    onIncrement: () => dispatch(updateCounter(CounterOperation.INCREMENT)),
})

export const Home = connect<HomePageStateProps, HomePageDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(HomePageComponent)