import React from 'react'

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import '../contact.css';

const CV_URL = '/Daniele Giacomazzi Resume.pdf'

export default function ContactInfo(){
    return(
        <div className='contact-info-card'>
                        
                            <h2 className="contact-title">Let's Connect!</h2>
                            <div className='contact-info-list'>
                                <div className="contact-item">
                                    <FaEnvelope className="contact-icon" />
                                    <span>giacomazzi06@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <FaPhone className="contact-icon" />
                                    <span>+39 3473834574</span>
                                </div>
                                <div className="contact-item">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Italia</span>
                                </div>
                                <div className="contact-item">
                                    <FaLinkedin className="contact-icon" />
                                    <a href="https://www.linkedin.com/in/daniele-lorenzo-giacomazzi/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn Profile
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <FaGithub className="contact-icon" />
                                    <a href="https://github.com/DanieleLG90" target="_blank" rel="noopener noreferrer">
                                        GitHub Profile
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <FaFilePdf className="contact-icon" /> 
                                    <a href="/Daniele_Giacomazzi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                        Download CV (PDF)
                                    </a>
                                </div>
                            </div>
                    </div>
    )
}