import React from 'react'
import './contact.css'
import Contactbox from '../components/Contactbox'
import GoogleMap from '../components/GoogleMap'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='contactus_herosection'>
        Contact Us
        </div>
        <div className='contact-upperbox'>
          <Contactbox />
        </div>
        <div className='contact-lowerbox'>
          <ContactForm />
        </div>
        <div className='contact-buttombox'>
          <GoogleMap />
        </div>
      </div>



    </>
  )
}

export default Contact