import React, { useState, useEffect } from "react"
import axios from "axios"
import Layout from "../../components/layout"
import PageTransition from "gatsby-v2-plugin-page-transitions"

import "./portfolio.component.css"

const Portfolio = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/oguzsh/repos")
      .then(data => {
        setData(data.data)
      })
      .catch(err => data.status(400).data.json(err))
  }, [])

  return (
    <Layout>
      <PageTransition>
        <div className="portfolioContainer">
          <h1 className="projectMain">Projects</h1>
          <div className="projectBoxes">
            {data.map(data => (
              <div className="projectBox" key={data.id}>
                <a
                  className="projectUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.html_url}
                >
                  <div className="projectTitle">{data.name}</div>
                  <div className="projectDescription">{data.description}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </Layout>
  )
}

export default Portfolio
