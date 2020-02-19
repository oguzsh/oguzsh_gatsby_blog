import React from "react"
import { Link } from "gatsby"

// Styling
import "./contact.component.css"

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contactTitle">Contact</h1>
      <p className="contactDesc">Have a question or want to work together?</p>
      <a href="mailto:oguzhan824@gmail.com">Click HERE</a>
    </div>
  )
}

export default Contact
