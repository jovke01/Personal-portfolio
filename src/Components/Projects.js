import React from 'react'
import "../styles/global.scss"
import "../styles/projects.scss"
import bodar from '../images/bodar.png'
const Projects = () => {
    return (
        <div className="projects " id="radovi">
            <div className="container">
                <h2>Neki od mojih radova :</h2>
                <div className="all-projects">
                    <div className="project">
                        <a target='_blank' rel="noreferrer" href="https://sladjabodar.net/index.html">
                            <img src={bodar} alt="bodar" className="tumb" />
                            <div className="project-text">
                                <h3>Bodar.net</h3>
                                <div className="tags">
                                    <span className="tag html">html</span>
                                    <span className="tag css">css</span>
                                    <span className="tag bootstrap">bootstrap</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a target='_blank' rel="noreferrer" href="https://sladjabodar.net/index.html">
                            <img src={bodar} alt="bodar" className="tumb" />
                            <div className="project-text">
                                <h3>Bodar.net</h3>
                                <div className="tags">
                                    <span className="tag html">html</span>
                                    <span className="tag css">css</span>
                                    <span className="tag bootstrap">bootstrap</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="project">
                        <a target='_blank' rel="noreferrer" href="https://sladjabodar.net/index.html">
                            <img src={bodar} alt="bodar" className="tumb" />
                            <div className="project-text">
                                <h3>Bodar.net</h3>
                                <div className="tags">
                                    <span className="tag html">html</span>
                                    <span className="tag css">css</span>
                                    <span className="tag bootstrap">bootstrap</span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* all project end */}
                </div>
                {/* container end */}
            </div>
        </div>
    )
}

export default Projects
