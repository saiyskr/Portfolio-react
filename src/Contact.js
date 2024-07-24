import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const result = await emailjs.sendForm('service_d7akce4', 'template_eiqlxwg', form.current, '8OgsQrHWvCaPJOcUy');
      console.log(result.text);
      setSuccessMessage('Message sent successfully!');
      setShowSuccess(true);
      // Clear form inputs
      form.current.reset();
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.log(error.text);
      setErrorMessage('Error sending message, please try again.');
      setShowError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowSuccess(false);
        setShowError(false);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation errors when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section-header">
        <h2>Let's work together...</h2>
        <p>Contact me</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group email-form">
          <input
            type="text"
            name="name"
            className="form-control form-class"
            aria-label="Name"
            aria-describedby="emailHelp"
            placeholder="Enter your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.name}</span>
          <br />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control form-class"
            name="email"
            aria-label="Email address"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.email}</span>
          <br />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control form-class"
            rows="3"
            aria-label="Email body"
            placeholder="Write message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit" className="btn btn-danger send-btn">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {showSuccess && <div className="floating-notification success">{successMessage}</div>}
      {showError && <div className="floating-notification error">{errorMessage}</div>}
      
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/saikiranreddyy/"
          target="_blank"
          className="btn contact-details"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin bigger-icon"></i> LinkedIn
        </a>
        <a
          id="profile-link"
          href="https://github.com/saiyskr/"
          target="_blank"
          className="btn contact-details"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:syeruva2@buffalo.edu" className="btn contact-details">
          <i className="fas fa-at"></i> Send a mail
        </a>
        <a href="tel:716-939-7219" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
      </div>
    </section>
  );
}

export default Contact;
