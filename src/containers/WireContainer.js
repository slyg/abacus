import React from 'react'
import Wire from '../components/Wire'

const tick = new Audio('http://soundbible.com/grab.php?id=2108&type=mp3', {loop: false});
const tickDelay = 200 // ms

const WireContainer = React.createClass({

  getInitialState: () => ({
    left: 10,
    right: 0
  }),

  add: function(i) {
    const ballsToMove = this.state.left - i

    this.setState({
      left: this.state.left - ballsToMove,
      right: this.state.right + ballsToMove,
    })

    setTimeout(() => tick.play(), tickDelay)
  },

  substract: function(i) {
    const ballsToMove = 1 + i - this.state.left

    this.setState({
      left: this.state.left + ballsToMove,
      right: this.state.right - ballsToMove,
    })

    setTimeout(() => tick.play(), tickDelay)
  },

  render: function() {
    const { add, substract } = this
    const { colorName } = this.props

    return <Wire {...{
      ...this.state,
      add,
      substract,
      colorName,
    }} />
  }
})

export default WireContainer
