import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/global.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        setStatus('✅ Message sent successfully!');
        setIsSubmitting(false);
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      },
      (error) => {
        setStatus('❌ Failed to send. Please try again.');
        setIsSubmitting(false);
        console.error(error);
        setTimeout(() => setStatus(''), 5000);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="scroll-animate">Contact Me</h2>
        <p className="scroll-animate" style={{ transitionDelay: '0.1s' }}>
          Have a question or want to work together? Let's connect!
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form scroll-animate" style={{ transitionDelay: '0.2s' }}>
          <input 
            type="text" 
            name="user_name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            required 
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;