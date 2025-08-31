import React from 'react'
import { BrowserRouter as Router, Routes, Route,NavLink, Link } from 'react-router-dom';
import "./Header.css"

export default function Header(){
    return(
        <header>
            <div className='header-body'>
                <Link className='header-home-link'>DLG</Link>
                <div className='header-links'>
                    <NavLink>Projects</NavLink>
                    <NavLink>Contact</NavLink>
                </div>
            </div>
        </header>
    )
}