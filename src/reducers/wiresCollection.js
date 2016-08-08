import { INC, DEC, RES, RAN, NOOP } from '../constants/actionTypes'
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

    case RES:
      return state.map(
        (item, i) => {
          return wire(state[i], {type})
        }
      )

    case RAN:
      const randomNumber = Math.floor(Math.random() * 100)
      const units = randomNumber % 10
      const dozens = Math.floor(randomNumber/10)

      return state.map(
        (item, i) => {

          if (i < dozens) {
            return wire(state[i], {type: INC, index: 0})
          }

          if (i === dozens) {
            return wire(state[i], {type: INC, index: 10 - units})
          }

          return wire(state[i], {type: RES})
        }
      )

    default:
      return state

  }

}

export default reducer
