import { INC, DEC } from './constants/actionTypes'

export const increment = (state, wireIndex, index) => ({
  type: INC,
  wireIndex,
  index
})

export const decrement = (state, wireIndex, index) => ({
  type: DEC,
  wireIndex,
  index
})
