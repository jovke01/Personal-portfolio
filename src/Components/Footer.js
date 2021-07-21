import React from 'react'
import '../styles/footer.scss'
import { Link } from 'gatsby'
import fullLogoLight from '../images/logo-light.svg'
const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <Link to="/"><img src={fullLogoLight} alt="logo" /></Link>
                <ul>
                    <Link to="/oMeni"><li>O meni</li></Link>
                    <Link to="/kontakt"><li>Kontakt</li></Link>
                </ul>

                <p> &copy;Copyright Pavle Jovanović 2021 </p>
            </div>
        </footer>
    )
}

export default Footer
