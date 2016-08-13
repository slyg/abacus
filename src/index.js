import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AbacusContainer from './containers/AbacusContainer'
import NavContainer from './containers/NavContainer'
import './index.css'
import keyboardInitializer from './initializers/keyboard'

keyboardInitializer(store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AbacusContainer />
      <NavContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
