import React from "react"

// Components
import Image from "../image"

// Styling
import "./landing.component.css"

const LandingPage = () => (
  <div className="landing">
    <Image className="profile" />
    <div className="sub-text">
      <h1 className="sub-textTitle">
        Hi <span role="img">🙌</span>
      </h1>
      <p className="subTextParagraph">
        I'm Oguzhan, a researcher and front‑end developer based in Turkey{" "}
        <span role="img">🌍</span> I design and code things, I love what I do{" "}
        <span role="img">😍</span>
      </p>
    </div>
  </div>
)

export default LandingPage
