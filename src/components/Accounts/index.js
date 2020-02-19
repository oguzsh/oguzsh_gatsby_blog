import React from "react"
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/lib/fa"

// Styling
import "./account.component.css"

const Accounts = () => {
  return (
    <>
      <h1 className="accountTitle">Accounts</h1>
      <div className="socialBoxesList">
        <div className="social-box">
          <a
            target="_blank"
            href="https://www.instagram.com/oguz.sh"
            rel="noopener noreferrer"
            className="social-ico --purple"
          >
            <i className="fa fa-instagram">
              <FaInstagram />
            </i>
          </a>
          <div className="area-content">
            <h3 className="followers">923</h3>
            <h4 className="text">Followers</h4>
            <p className="username">@oguz.sh</p>
          </div>
        </div>

        <div className="social-box">
          <a
            target="_blank"
            href="https://www.twitter.com/oguz_sh"
            rel="noopener noreferrer"
            className="social-ico --lightBlue"
          >
            <i className="fa fa-twitter">
              <FaTwitter />
            </i>
          </a>
          <div className="area-content">
            <h3 className="followers">228</h3>
            <h4 className="text">Followers</h4>
            <p className="username">@oguz_sh</p>
          </div>
        </div>

        <div className="social-box">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/oguzhanince/"
            rel="noopener noreferrer"
            className="social-ico --darkBlue"
          >
            <i className="fa fa-linkedin">
              <FaLinkedin />
            </i>
          </a>
          <div className="area-content">
            <h3 className="followers">81</h3>
            <h4 className="text">Connections</h4>
            <p className="username">@oguzhanince</p>
          </div>
        </div>

        <div className="social-box">
          <a
            target="_blank"
            href="https://www.github.com/oguzsh"
            rel="noopener noreferrer"
            className="social-ico --darkBlue"
          >
            <i className="fa fa-github">
              <FaGithub />
            </i>
          </a>
          <div className="area-content">
            <h3 className="followers">64</h3>
            <h4 className="text">Followers</h4>
            <p className="username">@oguzsh</p>
          </div>
        </div>

        <div className="social-box">
          <a
            target="_blank"
            href="https://codepen.io/0guzhan/"
            rel="noopener noreferrer"
            className="social-ico --darkPurple"
          >
            <i className="fa fa-codepen">
              <FaCodepen />
            </i>
          </a>
          <div className="area-content">
            <h3 className="followers">42</h3>
            <h4 className="text">Followers</h4>
            <p className="username">@0guzhan</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Accounts
