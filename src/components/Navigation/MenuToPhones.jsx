import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LinksContext } from '../../state/links-contex';
const MenuToPhones = () => {
    const { path, handlePathChanged } = useContext(LinksContext);

    return (
        <div className='menu-to-phones'>
            <ul className='menu-to-phones__links'>
                <Link to='/home' className={`menu-to-phones__link ${path === 'home' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('home')}>Home</Link>
                <Link to='/education' className={`menu-to-phones__link ${path === 'education' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('education')}>Education</Link>
                <Link to='/skills' className={`menu-to-phones__link ${path === 'skills' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('skills')}>Skills</Link>
                <Link to='/projects' className={`menu-to-phones__link ${path === 'projects' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('projects')}>Projects</Link>
                <Link to='/career' className={`menu-to-phones__link ${path === 'career' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('career')}>Career</Link>
                <Link to='/contact' className={`menu-to-phones__link ${path === 'contact' && 'menu-to-phones__link--active'}`} onClick={() => handlePathChanged('contact')}>Contact</Link>
            </ul>
        </div >
    )
}

export default MenuToPhones
