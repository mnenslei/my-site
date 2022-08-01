import React from "react";
import "../index.css"

const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className='about-container-1'>
                <div>
                    <h2>About Me</h2>
                </div>
                <div>
                    <p>👋 Hello, I'm Michael Enslein and I am a full-stack web developer living in New York. Starting my career in finance allowed me to learn about different investment vehicles and technologies that would later influence my decision to enter the world of software engineering.</p>
                    <p>I decided to pursue this route because of my interests in web developmemt, blockchain technology, fascination with computers and the opportunities it may lead to.</p>
                </div>
            </div>
            <div className='about-container-2'>
                <div className='skills'>
                    <h3>🛠 Technical Skills:</h3>
                    <ul>
                        <li>Git</li>
                        <li>HTML/CSS</li>
                        <li>Javascript (React, Redux, Node.js, Express, Yup, Axios, Knex)</li>
                        <li>Databases: SQL, PostgreSQL</li>
                        <li>Deployment: Heroku, Vercel, Netlify</li>
                        <li>Googleing</li>
                    </ul>
                </div>
                <div className='hobbies'>
                    <h3>{`🏌️ Activities & Hobbies:`}</h3>
                    <ul>
                        <li>Spending time with my family</li>
                        <li>Blockchain Technology</li>
                        <li>Golf, Basketball, Football, Soccer</li>
                        <li>Attending live shows and concerts</li>
                        <li>Trivia Nights and Board Games</li>
                        <li>Traveling!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;