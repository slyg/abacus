import React from 'react'
import './Nav.css'

const Nav = ({reset}) => {
  return (
    <nav className="Nav">
      <button onClick={() => {reset()}} >Reset</button>
    </nav>
  )
}

export default Nav
