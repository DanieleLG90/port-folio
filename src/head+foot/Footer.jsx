import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import "./Footer.css"

export default function Footer(){
    return(
        <footer>
            <div className='footer-body'>
                <div className='social-links'>
                    <a href="https://www.linkedin.com/in/[tuo-profilo]" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/[tuo-profilo]" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="mailto:[tua-email]">
                        <FaEnvelope className="social-icon" />
                    </a>
                </div>
                 <p className="copyright">
                    © 2025 [Daniele Lorenzo Giacomazzi]
                </p>
            </div>
        </footer>
    )
}