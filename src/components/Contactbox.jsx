import React from 'react';
import './contactbox.css';
import phoneicon from '../assets/Contactus/customer-service.png';
import addressicon from '../assets/Contactus/map.png'
import arrow from '../assets/Contactus/right-arrow.png'


const Contactbox = () => {
    return (
        <>
            <div className='contact-detail'>
                
                <div className='contact-box'>
                    <div className='contact-box-top_heading'>
                        <div className='contact-box-top_heading_box'>
                        Help Center
                        <div className='contact-box-top_icon'>
                            <img src={arrow}/>
                        </div>
                        </div>
                       
                    </div>
                    <div className='contact-box_lower'>
                        <div className='contact-box_contant'>

                            <div className='contact-box_contant_detail'>
                                <div className='contact-box_contant_heading'>Get in Touch</div>
                                <div className='contact-box_contant_txt'>+91 9876543210</div>
                                <div className='contact-box_contant_txt'>mmmutfoundation@mmmut.ac</div>
                            </div>
                            <div className='contact-box_contant_icon'>
                                <img src={phoneicon} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='contact-box'>
                    <div className='contact-box-top_heading'>
                    <div className='contact-box-top_heading_box'>
                    Track Locations
                        <div className='contact-box-top_icon'>
                            <img src={arrow}/>
                        </div>
                        </div>
                    </div>
                    <div className='contact-box_lower'>
                        <div className='contact-box_contant'>

                            <div className='contact-box_contant_detail'>
                                <div className='contact-box_contant_heading'>Locate Us</div>
                                <div className='contact-box_contant_txt'>MMMUT, Gorakhpur , Uttar Pradesh, India</div>
                                
                            </div>
                            <div className='contact-box_contant_icon'>
                                <img src={addressicon} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Contactbox