import React from "react"
import {Link} from "gatsby"

import Container from "../components/container"
import Layout from "../components/layout"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="User Avatar"/>
        <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function AboutCSS() {
    return (
        <Layout>
            <Container>
                <h1>About CSS Modules</h1>
                <p>CSS Modules are something cool Gatsby can use</p>

                <User
                    username="LeBron James"
                    avatar="https://pbs.twimg.com/profile_images/686027837283807233/NSARqVck.png"
                    excerpt="Plays for the Los Angeles Lakers in the NBA"
                />
                <User
                    username="Max Verstappen"
                    avatar="https://as00.epimg.net/img/comunes/fotos/fichas/deportistas/m/max/large/29210.png"
                    excerpt="Drives for Red Bull Racing in the FIA F1 Championship"
                />
            </Container>
        </Layout>
    )
}