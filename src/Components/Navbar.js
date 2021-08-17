import React from 'react'
import { Link } from 'gatsby'
import '../styles/nav.scss'
import fullLogo from '../images/fullLogo.svg'

const activeStyles = {
    borderBottom: "2px solid #3535ff",

}

export default function navbar() {

    return (
        <nav>
            <div className="container-nav">
                <Link to="/"><img src={fullLogo} alt="logo" /></Link>
                <ul>
                    <Link to="/oMeni" activeStyle={activeStyles}><li>O meni</li></Link>
                    <Link to="/kontakt" activeStyle={activeStyles}><li>Kontakt</li></Link>
                </ul>
            </div>
        </nav>
    )
}
