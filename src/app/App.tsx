import * as React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import { Home } from '../home/Home'
import {SFC} from 'react'

export const App:SFC<{}> = () => (
    <Switch>
        <Route exact={true} path="/" component={Home} />
    </Switch>
)
