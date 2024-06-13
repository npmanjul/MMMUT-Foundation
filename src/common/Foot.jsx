import React from 'react';
import './foot.css'
import footericon from '../assets/footerlogo.png';
import facebook from '../assets/facebook-fill.png';
import twitter from '../assets/twitter-x-fill.png';
import LinkedIn from '../assets/linkedin-fill.png';
import youtube from '../assets/youtube-fill.png';
import instagram from '../assets/instagram-line.png';
import phoneNo from '../assets/phone-fill.png';
import emailaddress from '../assets/mail-line.png';


const Foot = () => {
  return (
    <>
      <div className='footer_top_main_container'>
        <div className='footer-container'>
          <div className='footer-container-top'>
            <div className='footer-left'>
              <div className='footer-logo-box'>
                <div className='footer-logo-img'><img src={footericon} /></div>
                <div className='footer-logo-title'>MMMUT Foundation</div>
              </div>
            </div>
            <div className='footer-box'>
              <div className='footer-center'>
                <div className='footer-navigation-heading'>Quick Navigation</div>
                <div className='footer-navigation'>Home</div>
                <div className='footer-navigation'>Startup</div>
                <div className='footer-navigation'>About Us</div>
                <div className='footer-navigation'>Apply</div>
                <div className='footer-navigation'>Contact Us</div>
              </div>
              <div className='footer-right'>
                <div className='footer-address'>
                  <div className='footer-address-heading'>Address</div>
                  <div className='footer-address-details'>MMMUT, Gorakhpur , Uttar Pradesh, India</div>
                </div>
                <div className='footer-contact'>
                  <div className='footer-contact-heading'>Contact</div>
                  <div className='footer-emailaddress'>mmmutfoundation@gmail.com</div>
                  <div className='footer-phoneno'>9876543210</div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-container-buttom'>
            <div className='footer-line'></div>
            <div className='socialmedialogos'>
              <div className='circle'><img src={facebook} /></div>
              <div className='circle'><img src={twitter} /></div>
              <div className='circle'><img src={LinkedIn} /></div>
              <div className='circle'><img src={youtube} /></div>
              <div className='circle'><img src={instagram} /></div>
            </div>
            <div className='copyright-txt'>©2024 MMMUT Foundation, All Right Reserved</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Foot;