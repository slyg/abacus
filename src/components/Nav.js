import React from 'react'
import './Nav.css'

const Nav = ({reset, randomize, randomizeStorm}) => {
  return (
    <nav className="Nav">
      <button onClick={() => {reset()}} >Reset</button>
      <button onClick={() => {randomize()}} >Random</button>
      <button onClick={() => {randomizeStorm()}} >Storm</button>
    </nav>
  )
}

export default Nav
