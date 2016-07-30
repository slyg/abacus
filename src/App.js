import React, { Component } from 'react';
import './App.css';
import Line from './Line';

let lineParams = {
  left: 2,
  right: 8
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Line {...lineParams} />
      </div>
    );
  }
}

export default App;
