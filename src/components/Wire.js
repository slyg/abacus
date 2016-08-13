import React from 'react'
import './Wire.css'
import { LEFT, RIGHT } from '../constants/positions'

const Pearl = ({pos, colorName, hasFocus, onClick, onFocus}) =>
  <button
    className={`Wire-cell Wire-cell-${pos} Wire-cell-color-${colorName}`}
    onClick={onClick}
    onFocus={onFocus}
    autoFocus={hasFocus}
  />

const Wire = ({colorNameLeft, colorNameRight, left, right, increment, decrement, focusIndex = -1, onFocus}) => {

  const positions = [
    ...Array.from(Array(left)).map(() => LEFT),
    ...Array.from(Array(right)).map(() => RIGHT)
  ]

  return (
    <div className="Wire">
      <div className="Wire-cell-rail"></div>
      {positions.map( (pos, i) =>
        <Pearl
          key={i}
          pos={pos}
          colorName={(i < (left + right)/2) ? colorNameLeft : colorNameRight}
          hasFocus={i === focusIndex}
          onClick={() => {
            if (pos === LEFT)
              increment(i)
            else
              decrement(i)
          }}
          onFocus={() => onFocus(i)}
        />
      )}
    </div>
  )
}

export default Wire
