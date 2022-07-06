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
            <Link to='/'>HOME</Link>
            <Link to='/projects'>PROJECTS</Link>
            <Link to='/about'>ABOUT</Link>
        </div>
    </div>
    )
}

export default Banner;