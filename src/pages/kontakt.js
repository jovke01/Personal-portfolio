import React from 'react'
import Navbar from '../Components/Navbar'
import '../styles/kontakt.scss'


const kontakt = () => {
    return (
        <div>
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

        </div>
    )
}

export default kontakt
