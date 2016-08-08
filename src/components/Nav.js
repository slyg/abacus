import React from 'react'
import './Nav.css'

const Nav = ({reset, randomize}) => {
  return (
    <nav className="Nav">
      <button onClick={() => {reset()}} >Reset</button>
      <button onClick={() => {randomize()}} >Randomize</button>
    </nav>
  )
}

export default Nav
