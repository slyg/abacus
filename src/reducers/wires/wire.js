import { INCREMENT, DECREMENT, SET_ZERO, HAS_FOCUS, MOVE_FOCUS, CLEAR_FOCUS } from '../../constants/actionTypes'
import { LEFT, RIGHT } from '../../constants/directions'

const reducer = radix => {

  const initialState = {
    left: radix,
    right: 0,
    focusIndex: -1
  }

  return (state = initialState, action) => {

    const { type, index, direction, toTheEdge } = action

    switch (type) {

      case INCREMENT: {
        const pearlsToMove = state.left - index
        return {
          ...state,
          left: state.left - pearlsToMove,
          right: state.right + pearlsToMove,
        }
      }

      case DECREMENT: {
        const pearlsToMove = 1 + index - state.left
        return {
          ...state,
          left: state.left + pearlsToMove,
          right: state.right - pearlsToMove,
        }
      }

      case HAS_FOCUS: {
        return {
          ...state,
          focusIndex: index
        }
      }

      case CLEAR_FOCUS:
        return {
          ...state,
          focusIndex: -1
        }

      case MOVE_FOCUS: {

        if (state.focusIndex === -1) {
          return state
        }

        let newFocusIndex

        switch (direction) {
          case LEFT:
            if (state.focusIndex > 0) {
              newFocusIndex = toTheEdge ? 0 : state.focusIndex - 1
            } else {
              newFocusIndex = 0
            }
            break

          case RIGHT:
            if (state.focusIndex < radix - 1) {
              newFocusIndex = toTheEdge ? radix - 1 : state.focusIndex + 1
            } else {
              newFocusIndex = radix - 1
            }
            break

          default:
            newFocusIndex = -1
        }

        return {
          ...state,
          focusIndex: newFocusIndex
        }
      }

      case SET_ZERO:
        return {
          ...initialState,
          focusIndex: state.focusIndex
        }

      default:
        return state

    }

  }

}

export default reducer
