import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '../home/components/Home'
import './App.css'
import {SFC} from 'react'

export const App:SFC<{}> = () => (
    <Switch>
        <Route exact={true} path="/" component={Home} />
    </Switch>
)
