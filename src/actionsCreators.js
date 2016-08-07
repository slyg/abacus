import { INC, DEC } from './constants/actionTypes'

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
