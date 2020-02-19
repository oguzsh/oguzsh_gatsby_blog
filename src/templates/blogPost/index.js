import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../../components/seo"

import Layout from "../../components/layout"
import Footer from "../../components/Footer"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import "./css/BlogPost.css"

function BlogPost(props) {
  const { title, image, tags, date } = props.data.markdownRemark.frontmatter
  return (
    <div>
      <SEO title={title} />
      <Layout>
        <div>
          <PageTransition>
            <article>
              <div className="containerBlogPost">
                <img
                  className="imgPost"
                  src={image.childImageSharp.fluid.src}
                  alt="Post Image"
                />
                <div className="postHeaderPriv">
                  <div className="tags">
                    <div className="tag">
                      <Link to={tags.toString()}>{tags}</Link>
                    </div>
                    <div className="tag">
                      <span>{date}</span>
                    </div>
                  </div>
                  <h1>{title}</h1>
                </div>
                <div
                  className="postContentPriv"
                  n
                  dangerouslySetInnerHTML={{
                    __html: props.data.markdownRemark.html,
                  }}
                />
              </div>
            </article>
          </PageTransition>
        </div>
      </Layout>
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        tags
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
    }
  }
`
