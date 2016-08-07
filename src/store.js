import { compose, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import tickMiddleware from './middleware/tick'

const createStoreWithMiddleware = compose(
  applyMiddleware(tickMiddleware)
)(createStore)

const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension())

export default store
