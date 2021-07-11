import React from 'react'
import { Link } from 'gatsby'
import '../styles/global.scss'
import '../styles/nav.scss'

export default function navbar() {
    return (
        <nav>
            <p>Pavle Jovanović</p>
            <ul>
                <Link to="/"><li>Pocetna</li></Link>
                <Link to="/oMeni"><li>O meni</li></Link>
                <Link to="/kontakt"><li>Kontakt</li></Link>
            </ul>
        </nav>
    )
}
