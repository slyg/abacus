import React from 'react'
import Wire from '../components/Wire'
import { increment, decrement } from '../actions'
import { tickSound } from '../effects'

const WireContainer = React.createClass({

  getInitialState: () => ({
    left: 10,
    right: 0
  }),

  componentDidUpdate: tickSound,

  inc: function(i) {
    this.setState(increment(this.state, i))
  },

  dec: function(i) {
    this.setState(decrement(this.state, i))
  },

  render: function() {
    const { inc, dec } = this
    const { colorName } = this.props

    return <Wire {...{
      ...this.state,
      inc,
      dec,
      colorName,
    }} />
  }
})

export default WireContainer
