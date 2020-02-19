import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
import "./404/style.css"

export default () => (
  <div>
    <Header siteTitle="oguzsh" />
    <div className="not-found" style={{ textAlign: "center" }}>
      <h1>
        Böyle bir sayfa yok üzgünüm
        <span role="img">😢</span>
      </h1>
      <Link to="/" className="returnBtn">
        Hadi geri dönelim 😊
      </Link>
    </div>
  </div>
)
