import { INCREMENT, DECREMENT, RESET, HAS_FOCUS } from '../constants/actionTypes'

const initialState = {
  left: 10,
  right: 0,
  focusIndex: -1
}

const reducer = (state = initialState, action) => {

  const { type, index } = action

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

    case RESET:
      return initialState

    default:
      return state

  }

}

export default reducer
