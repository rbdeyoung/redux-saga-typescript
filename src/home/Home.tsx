import * as React from 'react'
import {RootState} from '../app/reducers'
import {updateCounter} from './actions/creators'
import {CounterOperation} from './types'
import {connect, Dispatch} from 'react-redux'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Tabs, {Tab} from 'material-ui/Tabs'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import './Home.css'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

// import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
// const theme = createMuiTheme({})

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
    paper: {
        padding: spacing.unit * 2,
        textAlign: 'center',
        color: palette.text.secondary,
    },
    menuButton: {

    }
}))

const onChange = () => undefined

// const theme = createMuiTheme()
// <MuiThemeProvider theme={theme}>
// </MuiThemeProvider>

const DecoratedHomePageComponent = decorate<HomeProps>(({counter, onIncrement, onDecrement, classes}) => (

    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Title
                </Typography>
            </Toolbar>
        </AppBar>
        <div className="Home">
            <Grid container={true} spacing={24}>
                <Grid item={true} xs={12}>
                    <Paper>
                        <Tabs
                            value={5}
                            onChange={onChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered={true}
                        >
                            <Tab label="Simple Redux Demo"/>
                            <Tab label="Saga Demo"/>
                        </Tabs>

                    </Paper>
                </Grid>
                <Grid item={true} xs={8} sm={4}>
                    <button onClick={onDecrement}>Decrement</button>
                </Grid>
                <Grid item={true} xs={8} sm={4}>
                    <p className="counter">{counter}</p>
                </Grid>
                <Grid item={true} xs={8} sm={4}>
                    <button onClick={onIncrement}>Increment</button>
                </Grid>
            </Grid>
        </div>
    </div>
))

export const mapStateToProps: (_: RootState) => HomePageStateProps = state => ({
    counter: state.homePage.counter.value,
})

export const mapDispatchToProps = (dispatch: Dispatch<RootState>): HomePageDispatchProps => ({
    onDecrement: () => dispatch(updateCounter(CounterOperation.DECREMENT)),
    onIncrement: () => dispatch(updateCounter(CounterOperation.INCREMENT)),
})

export const Home = connect<HomePageStateProps, HomePageDispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(DecoratedHomePageComponent)