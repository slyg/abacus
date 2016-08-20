import React from 'react'
import { connect } from 'react-redux'
import WireContainer from './WireContainer'

const mapStateToProps = ({wires}) => ({wiresCollection: wires.collection})

const colorPairs = [
  [ 'wood2',     'blue'   ],
  [ 'wood2',     'blue'   ],
  [ 'wood2',     'blue'   ],
  [ 'wood2',     'blue'   ],
  [ 'wood2',     'blue'   ],
  [ 'wood2',     'pink'   ],
  [ 'wood2',     'pink'   ],
  [ 'wood2',     'pink'   ],
  [ 'wood2',     'pink'   ],
  [ 'wood2',     'pink'   ],
]

function* colorPairsGenerator() {
  yield* colorPairs
  yield* colorPairsGenerator()
}

const Abacus = ({wiresCollection}) => {
  const getNextColorPair = colorPairsGenerator()
  return (
    <div>
      {wiresCollection.map( (wire, wireIndex) => {
        const [colorNameLeft, colorNameRight] = getNextColorPair.next().value
        return <WireContainer {...{colorNameLeft, colorNameRight, wireIndex, key: wireIndex}} />
      })}
    </div>
  )
}

export default connect(mapStateToProps)(Abacus)
