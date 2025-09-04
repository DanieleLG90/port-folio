import React from 'react'
import emailjs from '@emailjs/browser'
import '../contact.css'

export default function ContactForm(){

    const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_omi9egq', 'template_p84hk5m', e.target, 'nk4BU4QWx97Z2qeqL')
    .then((result) => {
      console.log('Email sent successfully!', result.text);
      
      setFormData({ name: '', email: '', message: '' });
      alert('Your message has been sent successfully!');
    }, (error) => {
      console.log('Failed to send email:', error.text);
      alert('An error occurred. Please try again.');
    });
  };

    return(
        <div className='contact-form-card'>
                <h3 className='form-title'>Send me a message</h3>

                <form className='contact-form' onSubmit={handleSubmit}>
                    <input
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange} 
                        required 
                     />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange} 
                        required>
                    </textarea>
                    <button type="submit" className="submit-button">Send</button>
                </form>
            </div>
    )
}