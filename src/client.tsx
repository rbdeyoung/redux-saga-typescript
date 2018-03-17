import React from 'react'
import { hydrate } from 'react-dom'
import { Root } from './Root'
import { configureStore } from './app/store/configureStore'
import createHistory from 'history/createHashHistory'
const history = createHistory()

const store = configureStore(history, window.__PRELOADED_STATE__)

hydrate(
  <Root history={history} store={store} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
