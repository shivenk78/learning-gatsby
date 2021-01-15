import React from "react"
import Header from "../components/header"
import {Link} from "gatsby"

export default function Home() {
  return <div style={{ color: `purple`}}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Welcome to home page!"/>
      <p>What a world we live in.</p>
      <img src="https://i.imgflip.com/2jjfsl.jpg"/>
    </div>
}
