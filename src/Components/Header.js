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
                    src={'../images/bg-min.jpg'}
                    formats={["webp", "avif"]}
                />
            </div>
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
