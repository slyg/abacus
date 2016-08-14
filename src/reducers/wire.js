import { INCREMENT, DECREMENT, RESET, HAS_FOCUS, MOVE_FOCUS, CLEAR_FOCUS } from '../constants/actionTypes'
import { LEFT, RIGHT } from '../constants/directions'

const initialState = {
  left: 10,
  right: 0,
  focusIndex: -1
}

const reducer = (state = initialState, action) => {

  const { type, index, direction, toTheEdge } = action

  switch (type) {

    case INCREMENT: {
      const ballsToMove = state.left - index
      return {
        ...state,
        left: state.left - ballsToMove,
        right: state.right + ballsToMove,
      }
    }

    case DECREMENT: {
      const ballsToMove = 1 + index - state.left
      return {
        ...state,
        left: state.left + ballsToMove,
        right: state.right - ballsToMove,
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

      let newFocusIndex;

      switch (direction) {
        case LEFT:
          if (state.focusIndex > 0) {
            newFocusIndex = toTheEdge ? 0 : state.focusIndex - 1
          } else {
            newFocusIndex = 0
          }
          break

        case RIGHT:
          if (state.focusIndex < 9) {
            newFocusIndex = toTheEdge ? 9 : state.focusIndex + 1
          } else {
            newFocusIndex = 9
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

    case RESET:
      return {
        ...initialState,
        focusIndex: state.focusIndex
      }

    default:
      return state

  }

}

export default reducer
