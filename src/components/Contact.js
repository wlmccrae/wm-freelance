// import {useState} from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="freelance-page">
      <div className="freelance-title-container">
        <div className="freelance-page-title">Contact Me</div>
      </div>
      <div className="contact-container">
        <div className="contact-instructions">
          <p>Have a project in mind? Need a fast, modern, or user-friendly website? I'd love to hear about it! Fill out the form below, and I'll get back to you within 72 hours to discuss how we can bring your ideas to life.</p>
          <p>Let's create something great &mdash; reach out today!</p>
        </div>
        <form id="contact-form" className="contact-form" action="https://formsubmit.co/5ad9be0a6931540c37c47d5e84cee4d2" method="POST">
          <div className="contact-form-row">
            {/* After submitting the form, send users to the Thanks page. */}
            <input type="hidden" name="_next" value="https://wandamccrae.com/freelance/thanks" />
            {/* Use the table template from FormSubmit for emails */}
            <input type="hidden" name="_template" value="table" />
            {/* Custom subject line */}
            <input type="hidden" name="_subject" value="Freelance Web Developer Inquiry" />
            <label htmlFor="name">Your Name<span className="required-field">*</span>: </label>
            <input
              className="form-input"
              // onChange={handleChange}
              type="text" id="name"
              name="name"
              // value={contactFormData.name}
              required
            />
          </div>
          <div className="contact-form-row">
            <label htmlFor="email">Your Email<span className="required-field">*</span>: </label>
            <input
              className="form-input"
              // onChange={handleChange}
              type="email"
              id="email"
              name="email"
              // value={contactFormData.email}
              required
            />
          </div>
          <label htmlFor="name">Message<span className="required-field">*</span>:</label>
          <textarea
            className="message-field"
            // onChange={handleChange}
            id="message"
            name="message"
            // value={contactFormData.message}
            required
          />
          <p><span className="required-field">*</span>Required field.</p>
          <button type="submit" className="contact-me">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )

};

export default Contact;
