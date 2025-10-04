
import ContactInfo from "./contact-components/ContactInfo"
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