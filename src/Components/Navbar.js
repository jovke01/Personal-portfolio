import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.scss'
import '../styles/nav.scss'
import fullLogo from '../images/fullLogo.svg'

export default function navbar() {
    return (
        <nav>
            <div className="container">
                <img src={fullLogo} alt="logo" />
                {/* <p>Pavle Jovanović</p> */}
                <ul>
                    <Link to="/"><li>Pocetna</li></Link>
                    <Link to="/oMeni"><li>O meni</li></Link>
                    <Link to="/kontakt"><li>Kontakt</li></Link>
                </ul>
            </div>
        </nav>
    )
}
