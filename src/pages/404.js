import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.scss";
import "../styles/404.scss";


const NotFoundPage = () => {
  return (
    <main className="nep" >
      <div className="container">
        <h2>Žao mi je ali ova stranica ne postoji</h2>
        <Link to="/">Vrati se na početnu</Link>.
      </div>


    </main >
  )
}

export default NotFoundPage
