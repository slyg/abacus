import { combineReducers } from 'redux'

import wiresCollection from './wiresCollection'
import sound from './sound'

const reducer = combineReducers({
  wiresCollection,
  sound,
});

export default reducer
