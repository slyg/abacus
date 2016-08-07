import { INC, DEC, NOOP } from '../constants/actionTypes'
import wire from './wire'

const wiresNumber = 10
const initialState = Array.from(Array(wiresNumber)).map(i => wire(undefined, {type: NOOP}))

const reducer = (state = initialState, action) => {

  const { type, index, wireIndex } = action

  switch (type) {

    case INC:
    case DEC: {
      return state.map(
        (item, i) => {
          if (i === wireIndex) {
            return wire(state[wireIndex], {type, index})
          } else {
            return item
          }
        }
      )
    }

    default:
      return state

  }

}

export default reducer