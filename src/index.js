import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AbacusContainer from './containers/AbacusContainer'
import NavContainer from './containers/NavContainer'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AbacusContainer />
      <NavContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
