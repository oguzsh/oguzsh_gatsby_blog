import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Components
import Container from "../Container"

// Styling
import "./header.component.css"
import ThemeSwitch from "../ThemeSwitch"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="main-header">
    <Container>
      <Link to="/" className="logo">
        <h1 className="siteTitle">{siteTitle}</h1>
        <p className="siteDesc">{siteDescription}</p>
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a href="mailto:oguzhan824@gmail.com">Contact</a>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `oguzsh`,
  siteDescription: `Frontend Developer`,
}

export default Header
