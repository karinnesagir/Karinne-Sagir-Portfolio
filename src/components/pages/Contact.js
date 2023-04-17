import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('Please enter a valid email.');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section class="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">Contact</h1>
        <form class="justify-content-center" id="contact-form">
            <div class="contact-info">
                <label htmlFor="name" id="contact-label" >Name:</label>
                <br></br>
                <input class="form-control" id="contact-input" type="text" name="Name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div class="contact-info">
                <label htmlFor="email" id="contact-label">Email: </label>
                <br></br>
                <input class="form-control" id="contact-input" type="email"  name="Email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div class="contact-info">
                <label htmlFor="message" id="contact-label">Message:</label>
                <br></br>
                <textarea class="form-control message-input" id="contact-input" name="Message" defaultValue={message} onBlur={handleChange} rows="7" />
            </div> 
            {errorMessage && (
            <div>
                <p className="error-text" id="contact-error" >{errorMessage}</p>
            </div>
            )}
            <div>
            <button data-testid='button' class="btn btn-outline-dark mt-4 contact-submit" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}
    
export default ContactForm;
