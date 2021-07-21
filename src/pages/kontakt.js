import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer";
import '../styles/kontakt.scss'
import { Helmet } from "react-helmet";




const kontakt = () => {
    <Helmet title="Pavle Jovanovic | Kontakt"
        meta="Kontaktirajte me"
        defer={false} />
    return (
        <section>
            <Navbar />

            <div className="kontakt">
                <div className="container ">
                    <h2>Za sve informacije možete se obratit na:</h2>
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
