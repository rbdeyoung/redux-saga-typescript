import * as React from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import { Home } from '../home/Home'
import './App.css'
import {SFC} from 'react'
const activeStyle = { color: '#fff', backgroundColor: '#080808' }
import logo from '../home/react.svg'
export const App:SFC<{}> = () => (

    <div className="container">
        <div>
            <div className="Home">
                <div className="Home-header">
                    <img src={logo} className="Home-logo" alt="logo"/>
                </div>
            </div>
            <nav className="navbar navbar-inverse navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>

                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact={true} to="/" activeStyle={activeStyle}>Home</NavLink></li>
                            <li><NavLink to="/test" activeStyle={activeStyle}>Page 1</NavLink></li>
                            <li><NavLink to="/test2" activeStyle={activeStyle}>Page 2</NavLink></li>
                            <li><NavLink to="/test3" activeStyle={activeStyle}>Page 3</NavLink></li>
                            <li><NavLink to="/test3" activeStyle={activeStyle}>Page 4</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <Switch>
            <Route exact={true} path="/" component={Home} />
        </Switch>
    </div>
)
