import React from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import '../App.css';

function Home() {
    return (
        <div className='home-wrapper'>
            <div className='intro-section'>
                <div className='intro-section-paragraph'>
                    <h2>Hello,</h2>
                    <p>
                        My name is Robert McCrary and I am currently freshman at Kennesaw State University 
                        studying computer science.  
                        I have experience in a variety of different programming languages, frameworks, 
                        and technologies.  I am a highly driven, self-motivated, and ambitious 
                        computer science student looking for any opportunity
                        to get started in tech.
                    </p>
                </div>
                <div>
                    <img 
                        className='profile-picture' 
                        src='https://cdn2.f-cdn.com/ppic/238652197/logo/73919002/jSUfz/CROPPED_profile_logo_TZQJF_5c86b8c4c3e60261cf60fdf35ebeb4d9.jpg?image-optimizer=force&format=webply&width=336'
                    />
                </div>
            </div>
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home
