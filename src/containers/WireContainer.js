import React from 'react'
import Wire from '../components/Wire'
import { increment, decrement } from '../actions'
import { tickSound } from '../effects'

const WireContainer = React.createClass({

  getInitialState: () => ({
    left: 10,
    right: 0,
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
    const { colorNameLeft, colorNameRight } = this.props
    const params = {
      ...this.state,
      inc,
      dec,
      colorNameLeft,
      colorNameRight,
    }

    return <Wire {...params} />
  }
})

export default WireContainer
