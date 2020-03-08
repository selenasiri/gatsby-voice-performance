import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const activeStyle = {
    color: "red",
    background: "tan",
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
      </nav>
    </div>
  )
}

export default Navbar