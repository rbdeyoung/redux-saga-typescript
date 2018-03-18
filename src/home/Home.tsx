import * as React from 'react'
import {TestComponent} from './TestComponent'
import {RootState} from '../app/reducers/index'
import {updateCounter} from './actions/creators'
import {CounterOperation} from './types'
import {connect, Dispatch} from 'react-redux'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Tabs, {Tab} from 'material-ui/Tabs'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'

export interface HomePageStateProps {
    counter: number
}

export interface HomePageDispatchProps {
    onIncrement: () => void
    onDecrement: () => void
}

export interface HomeProps extends HomePageStateProps, HomePageDispatchProps {

}

const decorate = withStyles(({palette, spacing}) => ({
    root: {
        flexGrow: 1,
        padding: spacing.unit,
        backgroundColor: palette.background,
        color: palette.primary,
    },
}))

const theme = createMuiTheme()

const onChange = () => undefined

const DecoratedHomePageComponent = decorate<HomeProps>(({counter, onIncrement, onDecrement, classes}) => (
    <MuiThemeProvider theme={theme}>
        <div>
            <Paper className={classes.root}>
                <Tabs
                    value={5}
                    onChange={onChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered={true}
                >
                    <Tab label="Simple Redux Demo"/>
                    <Tab label="Saga Demo" />
                </Tabs>

            </Paper>
            <div>
                <div>
                    <button onClick={onDecrement}>Decrement</button>
                    {counter}
                    <button onClick={onIncrement}>Increment</button>
                </div>
                <TestComponent/>
            </div>
        </div>
    </MuiThemeProvider>
))

export const mapStateToProps: (_: RootState) => HomePageStateProps = state => ({
    counter: state.homePage.counter.value,
})

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): HomePageDispatchProps => ({
    onDecrement: () => dispatch(updateCounter(CounterOperation.DECREMENT)),
    onIncrement: () => dispatch(updateCounter(CounterOperation.INCREMENT)),
})

export const Home = connect<HomePageStateProps, HomePageDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(DecoratedHomePageComponent)