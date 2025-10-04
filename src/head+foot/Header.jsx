import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import "./Header.css"

import Logo from "../img/logo.PNG"


export default function Header(){

    const activeLink = {
            borderColor: 'var(--secondary-color)',
            color: 'var(--button-color)',
            backgroundColor: 'var(--primary-color)'
    }

    return(
        <header>
            <div className='header-body'>
                <Link to="/" className='header-home-link'>
                    <img className='logo-img' src={Logo} alt="logo iniziali dlg" />
                </Link>
                <div className='header-links'>
                    <NavLink 
                        to="/projects"
                        style={({isActive}) =>(isActive? activeLink : null)}>
                            Projects
                    </NavLink>
                    <NavLink 
                        to="/contact"
                        style={({isActive}) =>(isActive? activeLink : null)}>
                            Contact
                    </NavLink>
                </div>
            </div>
        </header>
    )
}