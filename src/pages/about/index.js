import React from "react"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import "./about.component.css"

import Accounts from "../../components/Accounts"
import Footer from "../../components/Footer"

const About = _ => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <PageTransition>
          <div className="aboutContainer">
            <h1>About</h1>
            <div className="aboutArea">
              <Img
                className="profileImg"
                fixed={data.placeholderImage.childImageSharp.fixed}
              />
              <p>
                I think the most difficult part is the self-expression part. And
                yes, I'm the innocent person in the photo 😃 I almost forgot 😲
                I'm Oguzhan 🙌 I'm glad to meet you ❤️ I'd like to conclude by
                giving age, country information and summarizing myself briefly.
                I'm 18 and I'm from Erzurum/Turkey. I've been living in
                Manisa/Turkey for 15 years. I am a person interested in software
                and psychology, doing research and loving to help people ❤️
              </p>
            </div>
          </div>

          <div className="accountContainer">
            <Accounts />
          </div>
        </PageTransition>
      </Layout>
      <Footer />
    </>
  )
}

export default About
