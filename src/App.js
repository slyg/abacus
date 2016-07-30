import React from 'react';
import './App.css';
import LineContainer from './LineContainer';

const colors = [
  '#eeee99',
  '#eeee99',
  '#ee99ee',
  '#ee99ee',
  '#cceeee',
  '#cceeee',
  '#eeee99',
  '#eeee99',
  '#ee99ee',
  '#ee99ee',
]

const App = React.createClass({

  render() {
    return (
      <div className="App">
        {colors.map(
          (color, key) => <LineContainer color={color} key={key} />
        )}
      </div>
    );
  }
})

export default App;
