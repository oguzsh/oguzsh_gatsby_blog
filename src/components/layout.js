import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Container from "./Container"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://oguzsh.github.io" />
        <meta name="description" content="Oğuzhan İNCE Kişisel Web Sitesi" />
        <meta
          name="keywords"
          content="oguzsh,oguz,oguzhan,ince,frontend,developer,blog,psikoloji,yazılım"
        />
        <meta name="author" content="Oğuzhan İNCE <oguzhan824@gmail.com>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:site" content="@oguz_sh" />
        <meta name="twitter:creator" content="Oğuzhan İNCE" />
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.siteDescription}
      />
      <ScrollUpButton
        style={{
          background: "black",
          borderRadius: "50%",
          width: "28px",
          height: "28px",
          padding: "5px",
          fill: "white",
          outline: "none",
          zIndex: "2",
        }}
      />
      <Container> {children} </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
