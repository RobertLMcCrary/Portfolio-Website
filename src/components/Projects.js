import React from 'react'

function Projects() {
    return (
        <div className='side-projects-section'>
            <h2>Side Projects</h2>
            <div className='side-projects-cards-section'>
                <div className='project-card'>
                    <img
                        src='#'
                        className='project-card-image'
                    />
                    <h3>Productivity Grooves</h3>
                    <a href='https://productivitygrooves.netlify.app/' className='project-link'>Website Link</a>
                </div>
                <div className='project-card'>
                    <img
                        src='#'
                        className='project-card-image'
                    />
                    <h3>Weather App</h3>
                    <a href='https://eastaeweather.netlify.app/' className='project-link'>Website Link</a>
                </div>
                <div className='project-card'>
                    <img
                        src='#'
                        className='project-card-image'
                    />
                    <h3>Python Data Graphing Software</h3>
                    <a href='https://github.com/RobertLMcCrary/Python-Data-Graphing-Tool.git' className='project-link'>Source Code</a>
                </div>
                <div className='project-card'>
                    <img
                        src='#'
                        className='project-card-image'
                    />
                    <h3>Java Graphing Software</h3>
                    <a href='https://github.com/RobertLMcCrary/Java-Graphing-Interface.git' className='project-link'>Source Code</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;
