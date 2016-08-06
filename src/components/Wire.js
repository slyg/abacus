import React from 'react'
import './Wire.css'
import * as colorCodes from '../constants/colors'

const Wire = ({colorNameLeft, colorNameRight, left, right, inc, dec}) => {

  const positions = [
    ...Array.from(Array(left)).map(() => 'left'),
    ...Array.from(Array(right)).map(() => 'right')
  ]

  return (
    <div className="Wire">
      <div className="Wire-cell-rail"></div>
      {positions.map( (pos, i) =>
        <div
          key={i}
          className={"Wire-cell Wire-cell-" + pos}
          onClick={() => { if (pos === 'left') { inc(i) } else { dec(i); } }}
          style={{backgroundColor: colorCodes[(i < (left + right)/2) ? colorNameLeft : colorNameRight]}}
          />
      )}
    </div>
  )
}

export default Wire
