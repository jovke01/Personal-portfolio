import React from 'react'
import '../styles/global.scss'
const features = () => {
    return (
        <div className="features">
            <div className="container cards">
                <div className="card">
                    <h4>SEO</h4>
                    <p>Da se vas sajt nalazi na vrhu rezultata pretrage</p>
                    <img src="../images/svg/seo" alt="SEO" />
                </div>
                <div className="card">
                    <h4>SEO</h4>
                    <p>Da se vas sajt nalazi na vrhu rezultata pretrage</p>
                    <img src="../images/svg/design.svg" alt="dizajn" />
                </div>
                <div className="card">
                    <h4>SEO</h4>
                    <p>Da se vas sajt nalazi na vrhu rezultata pretrage</p>
                    <img src="../images/svg/development.svg" alt="izrada" />
                </div>
            </div>
        </div>
    )
}

export default features
