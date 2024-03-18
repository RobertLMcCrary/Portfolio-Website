import React from 'react'

function Projects() {
    return (
        <div className='side-projects-section'>
            <h2>Side Projects</h2>
            <div className='side-projects-cards-section'>
                <div className='project-card'>
                    <img
                        src='https://robertswork.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff0b6a8a6-bc10-4334-9c1b-e2f70b7fd308%2F3960d689-496f-4d50-8c41-a85fd6e255c1%2FUntitled.png?table=block&id=b8045772-8a17-4238-8172-0764520f1412&spaceId=f0b6a8a6-bc10-4334-9c1b-e2f70b7fd308&width=2000&userId=&cache=v2'
                        className='project-card-image'
                    />
                    <h3>Productivity Grooves</h3>
                    <a href='https://productivitygrooves.netlify.app/' className='project-link'>Website Link</a>
                </div>
                <div className='project-card'>
                    <img
                        src='https://robertswork.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff0b6a8a6-bc10-4334-9c1b-e2f70b7fd308%2F952775f7-7c07-403b-891f-8b2e3a082311%2FUntitled.png?table=block&id=70207a92-94dc-4092-9dd8-2fd023d6f33f&spaceId=f0b6a8a6-bc10-4334-9c1b-e2f70b7fd308&width=2000&userId=&cache=v2'
                        className='project-card-image'
                    />
                    <h3>Weather App</h3>
                    <a href='https://eastaeweather.netlify.app/' className='project-link'>Website Link</a>
                </div>
                <div className='project-card'>
                    <img
                        src='https://robertswork.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff0b6a8a6-bc10-4334-9c1b-e2f70b7fd308%2Fe11bcb65-fe98-47d6-93ce-bb479ff9c84b%2FPythonGraphImage.png?table=block&id=4f35839a-f9bd-4c3f-b437-4cb076ffd522&spaceId=f0b6a8a6-bc10-4334-9c1b-e2f70b7fd308&width=1420&userId=&cache=v2'
                        className='project-card-image'
                    />
                    <h3>Python Data Graphing Software</h3>
                    <a href='https://github.com/RobertLMcCrary/Python-Data-Graphing-Tool.git' className='project-link'>Source Code</a>
                </div>
                <div className='project-card'>
                    <img
                        src='https://robertswork.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff0b6a8a6-bc10-4334-9c1b-e2f70b7fd308%2F94d9ad9f-f44d-4e57-8c0a-aac1cbdd161b%2FJavaGraphing_image.png?table=block&id=2203bc7d-2afb-468b-89cd-b2a7d216e94a&spaceId=f0b6a8a6-bc10-4334-9c1b-e2f70b7fd308&width=2000&userId=&cache=v2'
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
