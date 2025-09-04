import React from 'react'
import { Outlet } from 'react-router-dom';

import ContactInfo from "./contact-components/contactInfo"
import ContactForm from "./contact-components/contactForm"

import './contact.css'

export default function Contact(){
    return(
        <div className='contact-container'>
            <ContactInfo />
            <ContactForm />
        </div>
    )
}