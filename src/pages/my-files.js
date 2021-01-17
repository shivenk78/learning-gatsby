import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MyFiles({data}) {
    console.log(data)
    return (
        <Layout>
            <div>
                <h4>Playground Files</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Extension</th>
                            <th>Size</th>
                            <th>Relative Path</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({ node }, index) => (
                            <tr key={index}>
                                <td>{node.name}</td>
                                <td>{node.extension}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.relativePath}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const quert = graphql `
    query {
        allFile {
            edges {
                node {
                    name
                    extension
                    prettySize
                    relativePath
                }
            }
        }
    }
`