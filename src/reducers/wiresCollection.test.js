import reducer from './wiresCollection'
import { INC, DEC, NOOP } from '../constants/actionTypes'
import { expect } from 'chai'

describe('wireList reducer', () => {
  it('should init with a default value', () => {
    expect(
      reducer(undefined, {type: NOOP})
    ).to.eql(
      Array.from(Array(10)).map(() => ({ left: 10, right: 0 }))
    )
  })
  it('should INC the right wire', () => {
    const state0 = reducer(undefined, {type: NOOP})
    const state1 = reducer(state0, {type: INC, wireIndex: 2, index: 3})
    const state2 = reducer(state1, {type: INC, wireIndex: 3, index: 0})
    expect(
      state2
    ).to.eql(
      [ { left: 10, right: 0 },
        { left: 10, right: 0 },
        { left: 3, right: 7 },
        { left: 0, right: 10 },
        { left: 10, right: 0 },
        { left: 10, right: 0 },
        { left: 10, right: 0 },
        { left: 10, right: 0 },
        { left: 10, right: 0 },
        { left: 10, right: 0 } ]
    )
  })
})
