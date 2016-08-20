import
  { INCREMENT
  , DECREMENT
  , SET_ZERO
  , RANDOM
  , RANDOM_STORM
  , TOGGLE_MUTE
  , MOVE_FOCUS
  , CLEAR_FOCUS
  , HAS_FOCUS
  , INCREMENT_WIRES_NUMBER
  , DECREMENT_WIREs_NUMBER
  } from './constants/actionTypes'

export const increment = wireIndex => index => ({
  type: INCREMENT,
  wireIndex,
  index
})

export const decrement = wireIndex => index => ({
  type: DECREMENT,
  wireIndex,
  index
})

export const setZero = () => ({
  type: SET_ZERO
})

export const randomize = () => ({
  type: RANDOM
})

export const randomizeStorm = () => ({
  type: RANDOM_STORM
})

export const toggleMute = () => ({
  type: TOGGLE_MUTE
})

export const moveFocus = (direction, toTheEdge) => ({
  type: MOVE_FOCUS,
  direction,
  toTheEdge
})

export const clearFocus = () => ({
  type: CLEAR_FOCUS
})

export const hasFocus = wireIndex => index => ({
  type: HAS_FOCUS,
  wireIndex,
  index
})

export const incrementWiresNumber = () => ({
  type: INCREMENT_WIRES_NUMBER
})

export const decrementWiresNumber = () => ({
  type: DECREMENT_WIREs_NUMBER
})
