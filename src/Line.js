import React from 'react';
import './Line.css';

const Line = ({left, right}) => {
  return (
    <div className="Line">
      {[...Array(left).keys()].map( i =>
        <div key={i} className="Line-cell Line-cell-left"></div>
      )}
      {[...Array(right).keys()].map( i =>
        <div key={i} className="Line-cell Line-cell-right"></div>
      )}
    </div>
  )
}

export default Line;
