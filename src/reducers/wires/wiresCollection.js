import { INCREMENT, DECREMENT, SET_ZERO, RANDOM, NOOP, HAS_FOCUS, CLEAR_FOCUS, MOVE_FOCUS } from '../../constants/actionTypes'
import { LEFT, RIGHT, DOWN, UP } from '../../constants/directions'
import wire from './wire'

const wiresRadix = 10

const reducer = (wiresNumber) => {

  const wireReducer = wire(wiresRadix)

  const initialState = Array.from(Array(wiresNumber)).map(i => wireReducer(undefined, {type: NOOP}))

  return (state = initialState, action) => {

    const { type, wireIndex, direction, toTheEdge } = action

    switch (type) {

      case INCREMENT:
      case DECREMENT: {
        return state.map(
          (_, i, state) => {
            if (i === wireIndex) {
              return wireReducer(state[i], action)
            } else {
              return state[i]
            }
          }
        )
      }

      case HAS_FOCUS: {
        return state.map(
          (_, i, state) => {
            if (i === wireIndex) {
              return wireReducer(state[i], action)
            } else {
              return wireReducer(state[i], {type: HAS_FOCUS, index: -1})
            }
          }
        )
      }

      case MOVE_FOCUS: {

        const focusOnNextWireLine = (_, i, state) => {
          if (state[i].focusIndex > -1) {
            return state[i]
          }
          if (i > 0 && state[i - 1].focusIndex > -1) {
            return wireReducer(state[i], {type: HAS_FOCUS, index: 0})
          }
          return wireReducer(state[i], {type: HAS_FOCUS, index: -1})
        }

        const focusOnLastWireLine = (_, i, state) =>
          wireReducer(state[i], {
            type: HAS_FOCUS,
            index: (i === state.length - 1) ? 0 : -1
          })

        const focusOnWireLine = toTheEdge ? focusOnLastWireLine : focusOnNextWireLine

        switch (direction) {

          case LEFT:
          case RIGHT:
            return state.map((_, i, state) => wireReducer(state[i], action))

          case DOWN:
            return state.map(focusOnWireLine)

          case UP:
            return state.reverse().map(focusOnWireLine).reverse()

          default:
            return state.map(
              (item, i) => wireReducer(state[i], {type: HAS_FOCUS, index: -1})
            )

        }
      }

      case CLEAR_FOCUS:
      case SET_ZERO:
        return state.map(
          (_, i, state) => wireReducer(state[i], action)
        )

      case RANDOM:
        const randomNumber = Math.floor(Math.random() * state.length * wiresRadix)
        const units = randomNumber % wiresRadix
        const bases = Math.floor(randomNumber/wiresRadix)

        return state.map(
          (_, i, state) => {

            if (i < bases) {
              return wireReducer(state[i], {type: INCREMENT, index: 0})
            }

            if (i === bases) {
              return wireReducer(state[i], {type: INCREMENT, index: wiresRadix - units})
            }

            return wireReducer(state[i], {type: SET_ZERO})
          }
        )

      default:
        return state

    }

  }

}

export default reducer
