import React from 'react'
import './App.css'
import LineContainer from './LineContainer'
import colors from './colors'

const { blue, yellow, red, green, purple } = colors

const lineColors = [blue, blue, yellow, yellow, red, red, purple, purple, green, green]

const App = React.createClass({
  render() {
    return (
      <div className="App">
        {lineColors.map(
          (color, key) => <LineContainer {...{color, key}} />
        )}
      </div>
    )
  }
})

export default App
