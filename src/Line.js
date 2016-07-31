import React from 'react';
import './Line.css';

const Line = ({color, left, right, add, substract}) => {

  const positions = [
    ...Array.from(Array(left)).map(() => 'left'),
    ...Array.from(Array(right)).map(() => 'right')
  ]

  return (
    <div className="Line">
      <div className="Line-cell-rail"></div>
      {positions.map( (pos, i) =>
        <div
          key={i}
          className={"Line-cell Line-cell-" + pos}
          onClick={() => { pos === 'left' ? add() : substract() }} 
          style={{backgroundColor: color}}
          />
      )}
    </div>
  )
}

export default Line;
