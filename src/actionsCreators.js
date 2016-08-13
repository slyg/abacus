import { INCREMENT, DECREMENT, RESET, RANDOM, RANDOM_STORM, TOGGLE_MUTE } from './constants/actionTypes'

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

export const reset = () => ({
  type: RESET
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
