import React from 'react';
import './Line.css';

const Line = ({color, left, right, add, substract}) => {
  return (
    <div className="Line">
      <div className="Line-cell-rail"></div>
      {[...Array(left).keys()].map( i =>
        <div key={i} className="Line-cell Line-cell-left" onClick={add} style={{backgroundColor: color}}></div>
      )}
      {[...Array(right).keys()].map( i =>
        <div key={i} className="Line-cell Line-cell-right" onClick={substract} style={{backgroundColor: color}}></div>
      )}
    </div>
  )
}

export default Line;
