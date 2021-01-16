import React from "react"
import {Link} from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div style={{ color: 'teal', margin: '3rem auto', maxWidth: 600}}>
            <Link to="/">Home</Link>
            <Header headerText="Contact"/> 
            <p>Hit me up on GitHub or Twitter, both @shivenk78</p>
        </div>
    )
}