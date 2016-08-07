import React from 'react'
import { connect } from 'react-redux'
import WireContainer from './WireContainer'

const mapStateToProps = ({wiresCollection}) => ({wiresCollection});

const colorNames = [
  [ 'wood',    'wood2'   ],
  [ 'wood',    'wood2'   ],
  [ 'yellow',  'yellow2' ],
  [ 'yellow',  'yellow2' ],
  [ 'red',     'red2'    ],
  [ 'red',     'red2'    ],
  [ 'green',   'green2'  ],
  [ 'green',   'green2'  ],
  [ 'blue',    'blue2'   ],
  [ 'blue',    'blue2'   ],
]

const Abacus = ({wiresCollection}) => {
  return (
    <div>
      {wiresCollection.map( (wire, wireIndex) => {
        const [colorNameLeft, colorNameRight] = colorNames[wireIndex]
        return <WireContainer {...{colorNameLeft, colorNameRight, key: wireIndex}} />
      })}
    </div>
  )
}

export default connect(mapStateToProps)(Abacus)
