import React from 'react'
import './Wire.css'
import { LEFT, RIGHT } from '../constants/positions'

const Wire = ({colorNameLeft, colorNameRight, left, right, increment, decrement}) => {

  const positions = [
    ...Array.from(Array(left)).map(() => LEFT),
    ...Array.from(Array(right)).map(() => RIGHT)
  ]

  return (
    <div className="Wire">
      <div className="Wire-cell-rail"></div>
      {positions.map( (pos, i) =>
        <button
          key={i}
          className={`Wire-cell Wire-cell-${pos} Wire-cell-color-${(i < (left + right)/2) ? colorNameLeft : colorNameRight}`}
          onClick={() => {
            if (pos === LEFT)
              increment(i)
            else
              decrement(i)
          }}
        />
      )}
    </div>
  )
}

export default Wire
