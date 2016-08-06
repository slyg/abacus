export const increment = (state, i) => {
  const ballsToMove = state.left - i

  return {
    ...state,
    left: state.left - ballsToMove,
    right: state.right + ballsToMove,
  }
}

export const decrement = (state, i) => {
  const ballsToMove = 1 + i - state.left

  return {
    ...state,
    left: state.left + ballsToMove,
    right: state.right - ballsToMove,
  }
}
