import { graphql } from "gatsby"
import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({data}) {
    return (
        <Layout>
            <Header headerText={"About "+ data.site.siteMetadata.title}/>
            <p>Not much here, tbh, just following a tutorial.</p>
            <p>Contains a random assortment of content, from F1 to pandas.</p>
            <Header headerText="This was a pretty fun excercise."/>
        </Layout>
    )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`