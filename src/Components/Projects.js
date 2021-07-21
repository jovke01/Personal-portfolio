import React from 'react'
// import "../styles/global.scss"
import "../styles/projects.scss"
// import bodar from '../images/bodar.png'
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
const Projects = () => {
    return (
        <section className="projects">
            <div ></div>
            <div className="container">
                <h2 >Neki od mojih radova :</h2>
                <div className="all-projects">
                    <div className="project">
                        <a target='_blank' rel="noreferrer" href="https://sladjabodar.net/index.html">
                            <StaticImage
                                src="../images/bodar.png"
                                alt="bodar"
                                placeholder="blurred"
                                layout="fullWidth"
                            />
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
        </section>
    )
}

export default Projects

export const query = graphql`
query Bodar {
    file(relativePath: {eq: "bodar.PNG"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
