import React from "react";
import '../index.css';
import bitmoji from '../Images/bitmoji.jpg'

const Home = () => {
    return (
        <div id='home' className='h-container'>
            <div className='home-container'>
                <h1>Hello 👋, my name is Michael Enslein and I am a fullstack web developer.</h1>
                <p>I graduated from the Bloom Institute of Technology (fka Lambda School) in May 2022 and from Indiana University-Bloomington, Kelley School of Business in 2018.</p>
                <p>Throughout my tech journey, I have always tried to look for new opportunities to learn and challenge myself to become a better engineer.</p>
                <p>I built this portfolio site so that visitors might get a better opportunity to see and interact with some of my work.</p>
                <p>Feel free to have a look around and if you would like to collaborate with me or have any questions, please reach out using any of the available options below in the footer.</p>
            </div>
            <div className='h-img'>
                <img src={bitmoji} className='my-pic' alt='my bitmoji' />
            </div>
        </div>
        
    )
}

export default Home;