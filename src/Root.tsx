import * as React from 'react'
import { SFC } from 'react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import { App } from './App'
import createHistory from 'history/createHashHistory'
import {RootState} from './app/reducers'

export const history = createHistory()

export const Root: SFC<{ store: Store<RootState> }> = props =>
    <Provider store={props.store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>