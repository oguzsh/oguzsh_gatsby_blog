import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import "./tag.component.css"

const Tag = () => (
  <StaticQuery
    query={graphql`
      query TagQuery {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `}
    render={data => (
      <div className="TagList">
        <h1>Blog</h1>
        <h3>Kategoriler</h3>
        <div className="list">
          {data.allMarkdownRemark.group.map((tag, i) => (
            <Link to={`/${tag.fieldValue}`} key={i} className="tagLink">
              <p className="tagCount">{tag.fieldValue}</p>
            </Link>
          ))}
        </div>
      </div>
    )}
  />
)

export default Tag
