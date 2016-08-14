import React from 'react'
import { connect } from 'react-redux'
import WireContainer from './WireContainer'

const mapStateToProps = ({wiresCollection}) => ({wiresCollection});

const colorPairs = [
  [ 'wood',     'red'    ],
  [ 'wood',     'red'    ],
  [ 'wood',     'red'    ],
  [ 'wood',     'red'    ],
  [ 'wood',     'red'    ],
  [ 'wood',     'blue'   ],
  [ 'wood',     'blue'   ],
  [ 'wood',     'blue'   ],
  [ 'wood',     'blue'   ],
  [ 'wood',     'blue'   ],
]

function* colorPairsGenerator() {
  yield* colorPairs
  yield* colorPairsGenerator()
}

const Abacus = ({wiresCollection}) => {
  const getNextColorPair = colorPairsGenerator();
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
