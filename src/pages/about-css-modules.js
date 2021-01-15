import React from "react"
import {Link} from "gatsby"

import Container from "../components/container"

export default function AboutCSS() {
    return (
        <Container>
            <Link to="/">Home</Link>
            <h1>About CSS Modules</h1>
            <p>CSS Modules are something cool Gatsby can use</p>
        </Container>
    )
}