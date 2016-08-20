import { NOOP, INCREMENT_WIRES_NUMBER, DECREMENT_WIREs_NUMBER } from '../../constants/actionTypes'
import wiresCollection from './wiresCollection'

const defaultSize = 10

const initialState = {
  size: defaultSize,
  collection: wiresCollection(defaultSize)(undefined, {type: NOOP})
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case INCREMENT_WIRES_NUMBER:{
      const size = +state.size + 1
      const collectionReducer = wiresCollection(size)

      return {
        ...state,
        size,
        collection: collectionReducer(undefined, {type: NOOP})
      }
    }

    case DECREMENT_WIREs_NUMBER: {
      const computedSize = +state.size - 1
      const size = computedSize < 1 ? 1 : computedSize
      const collectionReducer = wiresCollection(size)

      return {
        ...state,
        size,
        collection: collectionReducer(undefined, {type: NOOP})
      }
    }

    default: {
      const collectionReducer = wiresCollection(state.length)

      return {
        ...state,
        collection: collectionReducer(state.collection, action)
      }
    }

  }

}

export default reducer
