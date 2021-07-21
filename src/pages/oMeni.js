import React from 'react'
import Navbar from '../Components/Navbar'
import '../styles/omeni.scss'
const oMeni = () => {
    return (
        <div>
            <Navbar />
            <section className="omeni">
                <div className="container">
                    <h2>Ko sam ja i zaštobi ste želeli da radite sa mnom?</h2>
                    <p className="dobrodoslica">Dobar dan, ja se zovem Pavle i zelim vam dobrodošlicu na moj web sajt.</p>
                    <div className="normal-txt">
                        <h3>Obrazovanje :</h3>
                        <p>
                            Živim u Beogradu gde se trenutno i školujem. <br />
                            Završio sam Srednju tehničku PTT školu i trenutno sam na 1. godini osnovnih studija na Visokoj školi elektrotehnike i računarstva.
                        </p>
                    </div>
                    <div className="normal-txt">
                        <h3>Zašto se ovime bavim :</h3>
                        <p>Fasciniraju me dobar dizajn kao i to kako je taj dizajn inplementuran u kodu.
                            Uživam u celom procesu izrade sajta i generalno volim interakciju sa ljudima koji su oni potrebni.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default oMeni
