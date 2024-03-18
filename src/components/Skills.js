import React, { useState } from 'react';
import '../App.css';

function Skills() {
    const [showLanguages, setShowLanguages] = useState(true);

    const Languages = (
        <div className='languages'>
            <div className='skill-card'>
                <img
                    src='https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png'
                    className='skill-card-image'
                />
                <h2>Java</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://clipartcraft.com/images/html5-logo-circle-3.png'
                    className='skill-card-image'
                />
                <h2>HTML</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://logowik.com/content/uploads/images/3799-javascript.jpg'
                    className='skill-card-image'
                />
                <h2>JavaScript</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://pluspng.com/img-png/python-logo-png-open-2000.png'
                    className='skill-card-image'
                />
                <h2>Python</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://th.bing.com/th/id/R.fe4a8221ac9c0a9e0fd120a36f429b42?rik=sYk%2fpfum6e8pxQ&riu=http%3a%2f%2fwww.freeiconspng.com%2fuploads%2fc--logo-icon-6.png&ehk=Brsm%2fscoib5HxdkbXdzScj4MlJnLg6AwpcE%2bK5%2bnVLs%3d&risl=&pid=ImgRaw&r=0'
                    className='skill-card-image'
                />
                <h2>C++</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'
                    className='skill-card-image'
                />
                <h2>C#</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.png'
                    className='skill-card-image'
                />
                <h2>CSS</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png'
                    className='skill-card-image'
                />
                <h2>TypeScript</h2>
            </div>
        </div>
    )

    const Frameworks = (
        <div className='frameworks'>
            <div className='skill-card'>
                <img
                    src='https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png'
                    className='skill-card-image'
                />
                <h2>React</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://logodix.com/logo/1764972.png'
                    className='skill-card-image'
                />
                <h2>Node.js</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA'
                    className='skill-card-image'
                />
                <h2>Express.js</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://th.bing.com/th/id/R.9d1d550a7bbbb83ae58494facc734d2d?rik=mUg4YRAufm6Ziw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fmongodb-icon-62.png&ehk=3aXo8bQCxQ9gXEUORI%2bAKooX%2bA85JH4Km48jb1W%2fFcY%3d&risl=&pid=ImgRaw&r=0'
                    className='skill-card-image'
                />
                <h2>MongoDB</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://thumbnails.pcgamingwiki.com/2/21/OpenGL_logo.svg/1357px-OpenGL_logo.svg.png'
                    className='skill-card-image'
                />
                <h2>OpenGL</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://www.qoppa.com/wp-content/uploads/rest-api-icon-8-150x150.png'
                    className='skill-card-image'
                />
                <h2>REST APIs</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://desarrolloweb.com/storage/tag_images/actual/F2Cam6JmHqcvyb6Y0GVl7lSCqA4tEYLMufLm5OHo.png'
                    className='skill-card-image'
                />
                <h2>Tailwind</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png'
                    className='skill-card-image'
                />
                <h2>Bootstrap</h2>
            </div>
            <div className='skill-card'>
                <img
                    src='https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png'
                    className='skill-card-image'
                />
                <h2>Next js</h2>
            </div>
        </div>
    )

    const handleSwitch = () => {
        setShowLanguages(prevShowLanguages => !prevShowLanguages);
    };

    return (
        <div className='skills-section'>
            <button className='switch-button' onClick={handleSwitch}>
                <div>
                    {showLanguages ? 'Frameworks' : 'Languages'}
                </div>
            </button>
            <div className='skills-cards-area'>
                {showLanguages ? Languages : Frameworks}
            </div>
        </div>
    )
}

export default Skills
