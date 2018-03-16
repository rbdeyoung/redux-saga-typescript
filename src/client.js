import React from 'react';
import { hydrate } from 'react-dom';
import { Root } from './Root'
import { configureStore } from './app/store/configureStore'

const store = configureStore(window.__PRELOADED_STATE__)
hydrate(
  <Root store={store} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
