import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return <div style={{ color: `purple`}}>
      <Link to="/contact/">Contact</Link>
      <br/>
      <Link to="/about-css-modules/">About CSS Modules</Link>
      <Header headerText="Welcome to the home page!"/>
      <p>What a world we live in.</p>
      <img src="https://i.imgflip.com/2jjfsl.jpg"/>
    </div>
}
