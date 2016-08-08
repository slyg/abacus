import { compose, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import tickMiddleware from './middleware/tick'
import randomizeStormMiddleware from './middleware/randomizeStorm'

const createStoreWithMiddleware = compose(
  applyMiddleware(tickMiddleware, randomizeStormMiddleware)
)(createStore)

const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension())

export default store
