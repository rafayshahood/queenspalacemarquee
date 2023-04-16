import React from 'react';
import './Styles/Contact.css'

function ContactUs() {
  return (
    <div className="contact-section">
        <h2>Contact Us</h2>
        <form>
            <div className="form-group">
                <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <textarea placeholder="Message"></textarea>
            </div>
            <div className="form-group">
                <button>Submit</button>
            </div>
        </form>
    </div>
  );
}

export default ContactUs;
