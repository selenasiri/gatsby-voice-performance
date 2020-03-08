import React from "react"
import "../../assets/css/style.css"
import Banner from "./Banner"
import Navbar from "./Navbar"

const Layout = props => {
  return (
    <div id="outside-container1">
      <Banner title={props.title} />
      <Navbar />

      <div id="contents1">{props.children}</div>
    </div>
  )
}

export default Layout
