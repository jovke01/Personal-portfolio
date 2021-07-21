import React from 'react'
import '../styles/header.scss'
import { StaticImage } from "gatsby-plugin-image"
export const Header = () => {
    return (
        <header className='header'>
            <div style={{ display: "grid" }}>
                <StaticImage
                    style={{
                        gridArea: "1/1",
                    }}
                    layout="fullWidth"
                    aspectRatio={3 / 1}
                    alt=""
                    src={'../images/bg.jpg'}
                    formats={["webp", "avif"]}
                />
            </div>
            <div className="container">
                <h1>Sve što je potrebno za vaš sajt na jednom mestu</h1>
                <h2>Front-end web developer / dizajner</h2>
                <a className='btn-main' href="#radovi">Moji projekti</a>
            </div>
        </header>
    )
}
