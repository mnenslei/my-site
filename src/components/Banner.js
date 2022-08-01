import React from "react";
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

const Banner = () => {

return(
    <div className='banner-container'>
        <div className='logo-div'>
            <Link to='/'>
                <img src={logo} alt="ME logo"/>
            </Link>
        </div>
        <div className='banner-links'>
            <a href='#home'>🏠 HOME</a>
            <a href='#projects'>🛠 PROJECTS</a>
            <a href='#about'>⛳ ABOUT</a>
        </div>
    </div>
    )
}

export default Banner;