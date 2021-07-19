import React from 'react'
import '../styles/global.scss'
import '../styles/features.scss'
import seo from '../images/seo.svg'
import design from '../images/design.svg'
import development from '../images/development.svg'
const features = () => {
    return (
        <div className="features">
            <div className="container cards" >
                <div className="card">
                    <img src={seo} alt="SEO" />
                    <h2>SEO</h2>
                    <p>Optimizacija rezultata pretrage</p>
                </div>
                <div className="card">
                    <img src={design} alt="dizajn" />
                    <h2>Dizajn</h2>
                    <p>Mozda i najbitniji deo procesa</p>
                </div>
                <div className="card">
                    <img src={development} alt="izrada" />
                    <h2>Kod</h2>
                    <p>Ovaj deo ostavite meni</p>
                </div>
            </div>
            <div id="radovi"></div>
        </div>
    )
}

export default features
