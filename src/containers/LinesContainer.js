import React from 'react'
import LineContainer from './LineContainer'
import { blue, yellow, red, green, purple } from '../constants/colors'

const colorsSeq = [blue, blue, yellow, yellow, red, red, purple, purple, green, green]

const LinesContainer = React.createClass({
  render() {
    return (
      <div className="App">
        {colorsSeq.map(
          (color, key) => <LineContainer {...{color, key}} />
        )}
      </div>
    )
  }
})

export default LinesContainer
