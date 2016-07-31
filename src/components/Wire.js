import React from 'react'
import './Wire.css'

const Wire = ({color, left, right, add, substract}) => {

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
          onClick={() => { if (pos === 'left') { add(i) } else { substract(i); } }}
          style={{backgroundColor: color}}
          />
      )}
    </div>
  )
}

export default Wire
