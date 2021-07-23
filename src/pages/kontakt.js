import React from 'react'
import favicon from '../images/favicon.ico'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import '../styles/kontakt.scss'
import { Helmet } from "react-helmet";




const kontakt = () => {
    <Helmet defer={false}>
        <title>Pavle Jovanovic | Kontakt</title>
        <link rel="icon" href={favicon} />
    </Helmet>
    return (

        <section>
            <Navbar />
            <div className="kontakt">
                <div className="container ">
                    <h2>Za sve informacije možete se obratiti na:</h2>
                    <div className="mail">
                        <p>e-mail: jovanovicpavle00@gmail.com</p>
                        <button onClick={() => { navigator.clipboard.writeText('jovanovicpavle00@gmail.com') }}>Kopiraj</button>
                    </div>
                    <p>Pavle Jovanović</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default kontakt
