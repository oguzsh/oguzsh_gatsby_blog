import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import TagsPage from "../tag"

import "./blog.component.css"

const Blog = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      <PageTransition>
        <TagsPage />
        <div className="allPosts">
          {postList.edges.map(({ node }, i) => (
            <Link to={node.fields.slug} key={i}>
              <div className="box">
                <div className="tag">
                  <p>{node.frontmatter.date}</p>
                </div>
                <div className="content">
                  <div className="header">
                    <h1>{node.frontmatter.title}</h1>
                  </div>
                  <div className="paragraph">
                    <p>{node.excerpt}</p>
                  </div>
                </div>
                {node.frontmatter.image && (
                  <Img
                    className="postimg"
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </PageTransition>
    </Layout>
  )
}

export default Blog

export const allPosts = graphql`
  query AllPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 150)
          frontmatter {
            date(formatString: "DD MM YYYY")
            title
            tags
            image {
              childImageSharp {
                resize(width: 382, height: 480) {
                  src
                }
                fluid(maxWidth: 382) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
