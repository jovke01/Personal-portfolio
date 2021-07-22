import React from 'react'
import '../styles/header.scss'
export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <h1>Sve što je potrebno za Vaš sajt na jednom mestu</h1>
                <h2>Front-end web developer / dizajner</h2>
                <div className="centar">
                    <a className='btn-main' href="#radovi">Moji projekti</a>
                </div>

            </div>
        </header>
    )
}
