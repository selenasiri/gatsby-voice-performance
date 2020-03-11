import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  const activeStyle = {
    color: 'red',
    background: 'tan',
  }

  return (
    <div id="nav1">
      <nav>
        <Link to="/" activeStyle={activeStyle}>
          Home
        </Link>
        <Link to="/about" activeStyle={activeStyle}>
          About
        </Link>
        <Link to="/great-divas" activeStyle={activeStyle}>
          The Great Divas
        </Link>
        <Link to="/literature-and-resources" activeStyle={activeStyle}>
          Literature and Resources
        </Link>
        <Link to="/repertoire" activeStyle={activeStyle}>
          Repertoire
        </Link>
        <Link to="/vocal-health" activeStyle={activeStyle}>
          Vocal Health
        </Link>
        <Link to="/feedback" activeStyle={activeStyle}>
          Feedback
        </Link>
        <Link to="/registration" activeStyle={activeStyle}>
          Registration
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
