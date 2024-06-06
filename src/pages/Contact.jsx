import React from 'react'
import './contact.css'
import Contactbox from '../components/Contactbox'
import GoogleMap from '../components/GoogleMap'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-upperbox'>
          <Contactbox />
        </div>
        <div className='contact-lowerbox'>
          <GoogleMap />
          <ContactForm />
        </div>
      </div>



    </>
  )
}

export default Contact