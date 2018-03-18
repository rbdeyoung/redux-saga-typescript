import {App} from './app/App'
import React from 'react'
import {StaticRouter} from 'react-router-dom'
import express from 'express'
import {renderToString} from 'react-dom/server'
import {configureStore} from './app/store/configureStore'
import * as serialize from 'serialize-javascript'
import createHistory from 'history/createMemoryHistory'
import {Provider} from 'react-redux'

import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { MuiThemeProvider, createMuiTheme, createGenerateClassName } from 'material-ui/styles'
import { green, red } from 'material-ui/colors'

// tslint:disable-next-line:no-var-requires
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST as string)

const history = createHistory()

const server = express()
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR as string))
    .get('/*', (req, res) => {
        const context: any = {}

        const sheetsRegistry = new SheetsRegistry()

        // Create a theme instance.
        const theme = createMuiTheme()
        const generateClassName = createGenerateClassName()

        const preloadedState = {homePage: {counter: {value: 0}}}

        // Create a new Redux store instance
        const store = configureStore(history, preloadedState)

        const markup = renderToString(
            <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
            <StaticRouter context={context} location={req.url}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </StaticRouter>
            </JssProvider>
        )
        const finalState = store.getState()

        const css = sheetsRegistry.toString()

        if (context.url) {
            res.redirect(context.url)
        } else {
            res.status(200).send(
                `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style id="jss-server-side">${css}</style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
        ${assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''}
        ${process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(finalState)}
        </script>
    </body>
</html>`,
            )
        }
    })

export default server
