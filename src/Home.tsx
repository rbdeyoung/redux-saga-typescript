import * as React from 'react'
import './Home.css'
import { TestComponent } from './TestComponent'
import { SFC } from 'react'
import logo from './react.svg'
export const Home: SFC<{}> = () =>

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
        <TestComponent/>
    </div>
