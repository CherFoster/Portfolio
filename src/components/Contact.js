import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

function Contact({ onHideOverlay }){
  const [fromName, setFromName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_gikpxrx';
    const templateId = 'template_2rdg5ci';
    const userId = '_SXcnxLYPEOWfPaFf';

    emailjs.send(serviceId, templateId, {
        to_email: 'cherise.foster@outlook.com',
        message: message,
        from_name: fromName,
        from_email: fromEmail,
      }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFromName('');
        setFromEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      onHideOverlay();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2 className='contact-heading'>Contact Me</h2>
        </div>
        <div className="php-email-form mt-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name:</label>
              <input
                type="text"
                className="form-control"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Your Email:</label>
              <input
                type="email"
                className="form-control"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Email</button>
            </div>
          </form>
          <button onClick={onHideOverlay} className="btn btn-secondary">
          Back
        </button>
        </div>
      </div>
    </section>
  );
}


export default Contact;