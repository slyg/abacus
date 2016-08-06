import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AbacusContainer from './containers/AbacusContainer'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <AbacusContainer />
  </Provider>,
  document.getElementById('root')
)
