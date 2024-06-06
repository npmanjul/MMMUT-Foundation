import React from 'react';
import './contactbox.css';
import phoneicon from '../assets/phone-fill.png';
import emailicon from '../assets/mail-line.png';
import addressicon from '../assets/map-pin.png'


const Contactbox = () => {
    return (
        <>
                <div className='contact-detail'>
                    <div className='contact-box'>
                        <div className='contact-icon-img'>
                            <img src={phoneicon} />
                        </div>
                        <div className='contact-img-title'>
                            Call Us
                        </div>
                        <div className='contact-img-details'>
                            9876543210
                        </div>
                    </div>

                    <div className='contact-box'>
                        <div className='contact-icon-img'>
                            <img src={emailicon} />
                        </div>
                        <div className='contact-img-title'>
                            Email Us
                        </div>
                        <div className='contact-img-details'>
                            iic@mmmut.ac.in     
                        </div>
                    </div>
                    
                    <div className='contact-box'>
                        <div className='contact-icon-img'>
                            <img src={addressicon} />
                        </div>
                        <div className='contact-img-title'>
                            Address
                        </div>
                        <div className='contact-img-details'>
                            Gorakhpur , U.P    
                        </div>
                    </div>
                </div>

            
        </>
    )
}

export default Contactbox