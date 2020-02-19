import React from "react"
import { Link } from "gatsby"
import PageTransition from "gatsby-v2-plugin-page-transitions"

// Components
import Layout from "../components/layout"
import LandingPage from "../components/LandingPage"
import SkillBoxes from "../components/SkillBoxes"
import SEO from "../components/seo"
import BlogBox from "../components/BlogBox"
import ProjectList from "../components/ProjectList"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

// Styling
import "./index.css"

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <>
      <Layout>
        <PageTransition>
          <SEO title="Home" />
          <LandingPage />
          <SkillBoxes />

          <div className="latestPosts">
            <h1>Latest Posts</h1>
            <div className="limitedPosts">
              {postList.edges.map(({ node }, i) => (
                <BlogBox
                  key={i}
                  i={i}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  title={node.frontmatter.title}
                  excerpt={node.excerpt}
                  image={node.frontmatter.image}
                />
              ))}
            </div>
            <Link className="showButton" to="/blog">
              Show More...
            </Link>
          </div>

          <ProjectList />
        </PageTransition>
      </Layout>
      <Contact />
    </>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
