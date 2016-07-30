import React from 'react';
import Line from './Line';

const initialState = {
  left: 10,
  right: 0
}

const App = React.createClass({

  getInitialState: () => initialState,

  add: function() {
    this.setState({
      left: this.state.left - 1,
      right: this.state.right + 1,
    })
    console.log(this.state);
  },

  substract: function() {
    this.setState({
      left: this.state.left + 1,
      right: this.state.right - 1,
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
