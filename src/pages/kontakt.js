import React from 'react'
import favicon from '../images/favicon.ico'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import '../styles/kontakt.scss'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'




const kontakt = () => {
    return (

        <section>
            <Helmet defer={false}>
                <title>Izrada web sajtova Beograd - Web dizajn | Kontakt</title>
                <link rel="icon" href={favicon} />
            </Helmet>
            <Navbar />
            <div className="kontakt">
                <div className="container ">
                    <h2>Za sve informacije možete se obratiti na: </h2>
                    <div className="mail">
                        <p>e-mail: jovanovicpavle00@gmail.com</p>
                        <button onClick={() => { navigator.clipboard.writeText('jovanovicpavle00@gmail.com') }}>Kopiraj</button>
                    </div>
                    <ol className="kontakt-list">
                        <li><a href="https://github.com/jovke01" target='_blank' rel="noreferrer"><img className='icon' src={github} alt="github" /></a></li>
                        <li><a href="https://twitter.com/jovke01" target='_blank' rel="noreferrer"><img className='icon' src={twitter} alt="twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/pavle-jovanovi%C4%87-995955192/" target='_blank' rel="noreferrer"><img className='icon' src={linkedin} alt="linkedin" /></a></li>
                    </ol>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default kontakt
