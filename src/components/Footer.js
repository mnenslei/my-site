import React from "react"
import '../index.css';
import logo from ".././logo.svg"
import twitterLogo from "../Images/twitter.svg"
import githubLogo from "../Images/github.svg"
import linkedInLogo from "../Images/linkedin.svg"
import emailLogo from "../Images/email.svg"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='logo-div'>
                <a href='/'>
                    <img src={logo} alt="ME logo"/>
                </a>
            </div>
            <div className='footer-links'>
                <p>Connect with me:</p>
                <div className='links'>
                <p><a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/michaelenslein/"><img src={linkedInLogo} alt='LinkedIn logo'></img></a></p>
                <p><a target='_blank' rel="noopener noreferrer" href="https://github.com/mnenslei"><img src={githubLogo} alt='GitHub logo'></img></a></p>
                <p><a target='_blank' rel="noopener noreferrer" href="https://twitter.com/mnenslei15"><img src={twitterLogo} alt='Twitter logo'></img></a></p>
                <p><a target='_blank' rel="noopener noreferrer" href="mailto:michael.enslein@gmail.com"><img src={emailLogo} alt='Email Logo'></img></a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;