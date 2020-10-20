import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebookSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    return (
        <header className="header">
            <img
                src={require("../../images/portfolio_logo2.png")}
                alt="logo"
                className="logo"
            />
            {/* <img src={require('../../images/portfolio-text.png')} alt="portfolio text" className='portfolio-text' /> */}
            <nav className='user-nav'>
                <a href="http://www.linkedin.com/in/sharon-zissu-9b9812187" className='user-nav__link'><FontAwesomeIcon icon={faLinkedin} className='user-nav__icon user-nav__icon--linkdin' /></a>
                <a href="http://www.facebook.com/sharon.zissu" className='user-nav__link'><FontAwesomeIcon icon={faFacebookSquare} className='user-nav__icon user-nav__icon--facebook' /></a>
                <a href="http://www.github.com/SharonZissu" className='user-nav__link'><FontAwesomeIcon icon={faGithubSquare} className='user-nav__icon user-nav__icon--github' /></a>
            </nav>
        </header>
    )
}

export default Header
