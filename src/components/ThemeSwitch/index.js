import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import "./themeSwitch.component.css"

class ThemeSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="custom-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            <label className="custom-checkbox-label" htmlFor="checkbox">
              🌑
            </label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeSwitch
