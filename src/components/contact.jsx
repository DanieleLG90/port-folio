import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import './contact.css';

export default function Contact(){
    return(
        <div className='contact-container'>

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
                            <a href="https://www.linkedin.com/in/[tuo-profilo]" target="_blank" rel="noopener noreferrer">
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                
            </div>

            <div className='contact-form-card'>
                <h3 className='form-title'>Send me a message</h3>
                <form className='contact-form'>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
        </div>
    )
}