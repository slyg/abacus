import { INCREMENT, DECREMENT, RESET } from '../constants/actionTypes'

const initialState = {
  left: 10,
  right: 0,
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

    case RESET:
      return initialState

    default:
      return state

  }

}

export default reducer
