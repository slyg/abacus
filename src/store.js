import { compose, createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import soundMiddleware from './middleware/sound'
import randomizeStormMiddleware from './middleware/randomizeStorm'

const createStoreWithMiddleware = compose(
  applyMiddleware(soundMiddleware, randomizeStormMiddleware)
)(createStore)

const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension())

export default store
