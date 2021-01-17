import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
    return (
        <Layout>
            <Header headerText="About this Site"/>
            <p>Not much here, tbh, just following a tutorial.</p>
            <Header headerText="This was a pretty fun excercise."/>
        </Layout>
    )
}

