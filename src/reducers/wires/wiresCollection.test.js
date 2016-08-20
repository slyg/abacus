import reducer from './wiresCollection'
import { INCREMENT, DECREMENT, NOOP } from '../../constants/actionTypes'
import { expect } from 'chai'

describe('wireList reducer', () => {
  it('should init with a default value', () => {
    expect(
      reducer(10)(undefined, {type: NOOP})
    ).to.eql(
      Array.from(Array(10)).map(() => ({ left: 10, right: 0, focusIndex: -1 }))
    )
  })
  it('should INCREMENT the right wire', () => {
    const state0 = reducer(10)(undefined, {type: NOOP})
    const state1 = reducer(10)(state0, {type: INCREMENT, wireIndex: 2, index: 3, focusIndex: -1})
    const state2 = reducer(10)(state1, {type: INCREMENT, wireIndex: 3, index: 0, focusIndex: -1})
    expect(
      state2
    ).to.eql(
      [ { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 3, right: 7, focusIndex: -1 },
        { left: 0, right: 10, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 },
        { left: 10, right: 0, focusIndex: -1 } ]
    )
  })
})
