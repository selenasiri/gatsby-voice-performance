import React from "react"
import logo from "../../assets/images/logo.jpeg"
import { Link } from "gatsby"

const Banner = props => {
  return (
    <div id="banner1">
      <div id="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div id="banner-title">
        <h1>{props.title}</h1>
      </div>
    </div>
  )
}

export default Banner
