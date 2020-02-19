import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"

import "./projectlist.component.css"

const ProjectList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://api.github.com/users/oguzsh/repos?per_page=6")
      .then(data => {
        setData(data.data)
      })
      .catch(err => data.status(400).data.json(err))
  }, [])

  return (
    <>
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
        <Link className="showButton" to="/portfolio">
          Show More...
        </Link>
      </div>
    </>
  )
}

export default ProjectList
