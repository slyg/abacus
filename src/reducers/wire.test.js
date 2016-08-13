import reducer from './wire'
import { INCREMENT, DECREMENT, NOOP } from '../constants/actionTypes'
import { expect } from 'chai'

describe('wire reducer', () => {
  it('should init with a default value', () => {
    expect(
      reducer(undefined, {type: NOOP})
    ).to.eql({ left: 10, right: 0, focusIndex: -1 })
  })
  it('should increment left value and decrement on right value on INCREMENT message', () => {
    const state0 = reducer(undefined, {type: NOOP})
    const state1 = reducer(state0, {type: INCREMENT, index: 7})
    expect(state1).to.eql({ left: 7, right: 3, focusIndex: -1 })
  })
  it('should decrement left value and increment on right value on DECREMENT message', () => {
    const state0 = reducer(undefined, {type: NOOP})
    const state1 = reducer(state0, {type: INCREMENT, index: 0})
    const state2 = reducer(state1, {type: DECREMENT, index: 3})
    expect(state2).to.eql({ left: 4, right: 6, focusIndex: -1 })
  })
})
