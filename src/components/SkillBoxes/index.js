import React from "react"
import DevIcon from "devicon-react-svg"

// Styling
import "./skillboxes.component.css"

const SkillBoxes = () => (
  <div className="skillBoxes">
    <h1>Skills</h1>

    <div className="boxes">
      <div className="skillBox">
        <h1> Frontend </h1>
        <div className="skills">
          <DevIcon className="skill-ico" icon="react" />
          <DevIcon className="skill-ico" icon="javascript" />
          <DevIcon className="skill-ico" icon="html5" />
          <DevIcon className="skill-ico" icon="css3" />
          <DevIcon className="skill-ico" icon="gulp" />
          <DevIcon className="skill-ico" icon="bootstrap" />
          <DevIcon className="skill-ico" icon="jquery" />
          <DevIcon className="skill-ico" icon="sass" />
        </div>
      </div>

      <div className="skillBox">
        <h1> Backend </h1>
        <div className="skills">
          <DevIcon className="skill-ico" icon="nodejs" />
          <DevIcon className="skill-ico" icon="mongodb" />
          <DevIcon className="skill-ico" icon="mysql" />
          <DevIcon className="skill-ico" icon="heroku" />
        </div>
      </div>

      <div className="skillBox">
        <h1> DevOps </h1>
        <div className="skills">
          <DevIcon className="skill-ico" icon="docker" />
          <DevIcon className="skill-ico" icon="travis" />
        </div>
      </div>
    </div>
  </div>
)

export default SkillBoxes
