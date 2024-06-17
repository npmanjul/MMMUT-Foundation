import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactform.css';
import formImg from '../assets/Contactus/image.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('adkumargmail', 'template_o3q8fxc', formData, 'Qf2Vq9GGZ7_QZOAUI')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully');
        setFormData({
          name: '',
          number: '',
          email: '',
          country: '',
          message: ''
        });
      }, (error) => {
        console.error('FAILED...', error);
        alert('Error sending email');
      });
  };

  return (
    <div className='contactform_main_box'>
      <div className='contactform_upper_container'>
        <img src={formImg} alt="Contact Form" />
      </div>
      <div className='contactform_container'>
        <form onSubmit={handleSubmit} className='contactform_area'>
          <div className='input-area'>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-area'>
            <label htmlFor="number">Phone No.:</label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder='Enter your phone No.'
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-area'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-area'>
            <label htmlFor="country">Purpose:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select the Purpose</option>
              <option value="Purpose of Visit">Purpose of Visit</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className='input-area'>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              placeholder='Please enter your message...'
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='btn-area'>
            <input type="submit" value="Submit" className='submit-btn' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
