import React from 'react'
import WireContainer from './WireContainer'

const colorNames = ['wood', 'wood', 'yellow', 'yellow','red', 'red', 'green', 'green', 'blue', 'blue']

const WiresContainer = React.createClass({
  render() {
    return (
      <div>
        {colorNames.map(
          (colorName, key) => <WireContainer {...{colorName, key}} />
        )}
      </div>
    )
  }
})

export default WiresContainer
