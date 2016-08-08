import { INC, DEC, RES } from '../constants/actionTypes'

const initialState = {
  left: 10,
  right: 0,
}

const reducer = (state = initialState, action) => {

  const { type, index } = action

  switch (type) {

    case INC: {
      const ballsToMove = state.left - index
      return {
        ...state,
        left: state.left - ballsToMove,
        right: state.right + ballsToMove,
      }
    }

    case DEC: {
      const ballsToMove = 1 + index - state.left
      return {
        ...state,
        left: state.left + ballsToMove,
        right: state.right - ballsToMove,
      }
    }

    case RES:
      return initialState

    default:
      return state

  }

}

export default reducer
