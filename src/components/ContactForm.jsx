import React from 'react';
import './contactform.css';
import formImg from '../assets/Contactus/image.png'

const ContactForm = () => {
  return (
    <>
      <div className='contactform_main_box'>
        <div className='contactform_upper_container'>
        <img src={formImg}/>
        </div>
        
        <div className='contactform_container'>
        <form action="/submit" method="post" className='contactform_area'>

          <div className='input-area'>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='Enter your name' required />
          </div>


          <div className='input-area'>
            <label for="password">Phone No. :</label>
            <input type="number" id="number" name="number" placeholder='Enter your phone No.' required />
          </div>


          <div className='input-area'>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder='Enter your email' required />
          </div>

          <div className='input-area'>
            <label for="country">Purpose :</label>
            <select id="country" name="country" required>
              <option value="">Select the Purpose</option>
              <option value="us">Purpose of Visit</option>
              <option value="us">Feedback</option>
            </select>
          </div>

          <div className='input-area'>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" placeholder='Please enter your message...'></textarea>
          </div>

          <div className='btn-area'>
            <input type="submit" value="Submit" className='submit-btn' />
          </div>
        </form>
      </div>
      </div>

    </>
  )
}

export default ContactForm