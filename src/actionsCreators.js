import { INC, DEC, RES, RAN, RANSTORM, TOGGLE_MUTE } from './constants/actionTypes'

export const increment = wireIndex => index => ({
  type: INC,
  wireIndex,
  index
})

export const decrement = wireIndex => index => ({
  type: DEC,
  wireIndex,
  index
})

export const reset = () => ({
  type: RES
})

export const randomize = () => ({
  type: RAN
})

export const randomizeStorm = () => ({
  type: RANSTORM
})

export const toggleMute = () => ({
  type: TOGGLE_MUTE
})
