import React from 'react';
import Line from './Line';

const initialState = {
  left: 10,
  right: 0
}

const App = React.createClass({

  getInitialState: () => initialState,

  add: function(i) {
    const ballsToMove = this.state.left - i;
    this.setState({
      left: this.state.left - ballsToMove,
      right: this.state.right + ballsToMove,
    })
  },

  substract: function(i) {
    const ballsToMove = 1 + i - this.state.left;
    this.setState({
      left: this.state.left + ballsToMove,
      right: this.state.right - ballsToMove,
    })
  },

  render() {

    let params = {
      ...this.state,
      add: this.add,
      substract: this.substract,
      color: this.props.color,
    }

    return (
      <Line {...params} />
    );
  }
})

export default App;
