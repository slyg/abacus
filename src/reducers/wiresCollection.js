import { INCREMENT, DECREMENT, RESET, RANDOM, NOOP, HAS_FOCUS, MOVE_FOCUS } from '../constants/actionTypes'
import { LEFT, RIGHT, DOWN, UP } from '../constants/directions'
import wire from './wire'

const wiresNumber = 10
const initialState = Array.from(Array(wiresNumber)).map(i => wire(undefined, {type: NOOP}))

const reducer = (state = initialState, action) => {

  const { type, wireIndex, direction, toTheEdge } = action

  switch (type) {

    case INCREMENT:
    case DECREMENT: {
      return state.map(
        (_, i, state) => {
          if (i === wireIndex) {
            return wire(state[i], action)
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
            return wire(state[i], action)
          } else {
            return wire(state[i], {type: HAS_FOCUS, index: -1})
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
          return wire(state[i], {type: HAS_FOCUS, index: 0})
        }
        return wire(state[i], {type: HAS_FOCUS, index: -1})
      }

      const focusOnLastWireLine = (_, i, state) =>
        wire(state[i], {
          type: HAS_FOCUS,
          index: (i === state.length - 1) ? 0 : -1
        })

      const focusOnWireLine = toTheEdge ? focusOnLastWireLine : focusOnNextWireLine

      switch (direction) {

        case LEFT:
        case RIGHT:
          return state.map((_, i, state) => wire(state[i], action))

        case DOWN:
          return state.map(focusOnWireLine)

        case UP:
          return state.reverse().map(focusOnWireLine).reverse()

        default:
          return state.map(
            (item, i) => wire(state[i], {type: HAS_FOCUS, index: -1})
          )

      }
    }

    case RESET:
      return state.map(
        (_, i, state) => {
          return wire(state[i], action)
        }
      )

    case RANDOM:
      const randomNumber = Math.floor(Math.random() * 100)
      const units = randomNumber % 10
      const dozens = Math.floor(randomNumber/10)

      return state.map(
        (_, i, state) => {

          if (i < dozens) {
            return wire(state[i], {type: INCREMENT, index: 0})
          }

          if (i === dozens) {
            return wire(state[i], {type: INCREMENT, index: 10 - units})
          }

          return wire(state[i], {type: RESET})
        }
      )

    default:
      return state

  }

}

export default reducer
