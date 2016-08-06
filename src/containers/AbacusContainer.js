import React from 'react'
import WireContainer from './WireContainer'

const wireLine = ([colorNameLeft, colorNameRight], key) =>
  <WireContainer {...{colorNameLeft, colorNameRight, key}} />

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

const WiresContainer = () =>
  <div>{colorNames.map(wireLine)}</div>

export default WiresContainer
