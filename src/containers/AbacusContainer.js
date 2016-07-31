import React from 'react'
import WireContainer from './WireContainer'
import { blue, yellow, red, green, purple } from '../constants/colors'

const colorsSeq = [blue, blue, yellow, yellow, red, red, purple, purple, green, green]

const WiresContainer = React.createClass({
  render() {
    return (
      <div>
        {colorsSeq.map(
          (color, key) => <WireContainer {...{color, key}} />
        )}
      </div>
    )
  }
})

export default WiresContainer
