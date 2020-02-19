import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import "./tagTemplate.css"

function Tags(props) {
  const posts = props.data.allMarkdownRemark.edges
  const { tag } = props.pageContext
  return (
    <Layout>
      <div
        className="tagContainer"
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h1
          className="tagColor"
          style={{ marginTop: "50px" }}
        >{`${tag} ile ilgili gönderiler`}</h1>
        <div
          className="tags"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          {posts.map(({ node }, i) => (
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
      </div>
    </Layout>
  )
}

export default Tags

export const query = graphql`
  query TagsQuery($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            title
            tags
            date(formatString: "DD MM YYYY")
            image {
              childImageSharp {
                resize(width: 600, height: 450) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
