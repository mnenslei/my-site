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
            <a href='#home'>Home</a>
            <a href='#projects'>Projects</a>
            <a href='#about'>About</a>
        </div>
    </div>
    )
}

export default Banner;