import React from 'react'
import favicon from '../images/favicon.ico'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import { Helmet } from "react-helmet"
import '../styles/omeni.scss'
const oMeni = () => {
    return (
        <div>
            <Helmet defer={false}>
                <title>Izrada web sajtova - Web dizajn | O meni</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            <Navbar />
            <section className="omeni">
                <div className="container">
                    <h2>Ko sam ja i zašto biste želeli da radite sa mnom?</h2>
                    <div className="normal-txt">
                        <h3>Obrazovanje :</h3>
                        <p>
                            Živim u Beogradu gde se trenutno i školujem. <br />
                            Završio sam Srednju tehničku PTT školu i trenutno sam na 1. godini osnovnih studija na Visokoj školi elektrotehnike i računarstva.
                        </p>
                    </div>
                    <div className="normal-txt">
                        <h3>Zašto se ovime bavim :</h3>
                        <p>Fascinira me dobar dizajn kao i to kako je taj dizajn implementiran u kodu.
                            Uživam u celom procesu izrade sajta.
                        </p>
                    </div>
                    <div className="normal-txt">
                        <h3>Veštine:</h3>
                        <ul className="vestine">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Gatsby</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </section>

        </div>
    )
}

export default oMeni
