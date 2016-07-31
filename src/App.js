import React from 'react';
import './App.css';
import LineContainer from './LineContainer';
import colors from './colors';

const { blue, yellow, red, green, purple } = colors

const lineColors = [
  blue, yellow, red, purple, green,
  blue, yellow, red, purple, green,
]

const App = React.createClass({
  render() {
    return (
      <div className="App">
        {lineColors.map(
          (color, key) => <LineContainer color={color} key={key} />
        )}
      </div>
    );
  }
})

export default App;
