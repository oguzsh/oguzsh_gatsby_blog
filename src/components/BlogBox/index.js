import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// Styling
import "./blogbox.component.css"

const BlogBox = ({ i, slug, date, title, excerpt, image }) => {
  return (
    <Link to={slug} key={i}>
      <div className="postBox">
        <div className="latestPostDate">
          <p>{date}</p>
        </div>
        <div className="postContent">
          <div className="postHeader">
            <h1>{title}</h1>
          </div>
          <div className="postParagraph">
            <p>{excerpt}</p>
          </div>
        </div>
        {image && (
          <Img className="latestPostImg" fluid={image.childImageSharp.fluid} />
        )}
      </div>
    </Link>
  )
}

export default BlogBox
