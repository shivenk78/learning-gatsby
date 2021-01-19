import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
    return (
        <Layout>
            <Header headerText="Welcome to the home page!" />
            <p>What a world we live in.</p>
            <img src="https://i.imgflip.com/2jjfsl.jpg" alt="Gatsby meme" />
        </Layout>
    )
}
