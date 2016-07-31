import React from 'react'
import Line from '../components/Line'

const LineContainer = React.createClass({

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
  },

  substract: function(i) {
    const ballsToMove = 1 + i - this.state.left

    this.setState({
      left: this.state.left + ballsToMove,
      right: this.state.right - ballsToMove,
    })
  },

  render: function() {
    const { add, substract } = this
    const { color } = this.props

    return <Line {...{
      ...this.state,
      add,
      substract,
      color,
    }} />
  }
})

export default LineContainer