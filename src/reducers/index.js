import { combineReducers } from 'redux'

import wires from './wires'
import sound from './sound'

const reducer = combineReducers({
  wires,
  sound,
})

export default reducer
