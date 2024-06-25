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
import { NavLink } from 'react-router-dom';


const Foot = () => {
  return (
    <>
      <div className='footer_top_main_container'>
        <div className='footer-container'>
          <div className='footer-container-top'>
            <div className='footer-left'>
              <div className='footer-logo-box'>
                <div className='footer-logo-img'><NavLink to="/" className="active-state"><img src={footericon} /></NavLink></div>
                <div className='footer-logo-title'>MMMUT Foundation</div>
              </div>
            </div>
            <div className='footer-box'>
              <div className='footer-center'>
                <div className='footer-navigation-heading'>Quick Navigation</div>
                <div className='footer-navigation'><NavLink to="/" className="active-state">Home</NavLink></div>
                <div className='footer-navigation'><NavLink to="/startup" className="active-state">Startup</NavLink></div>
                <div className='footer-navigation'><NavLink to="/about" className="active-state">About Us</NavLink></div>
                <div className='footer-navigation'><NavLink to="/apply" className="active-state">Apply</NavLink></div>
                <div className='footer-navigation'><NavLink to="/contact" className="active-state" >Contact Us</NavLink></div>
              </div>
              <div className='footer-right'>
                <div className='footer-address'>
                  <div className='footer-address-heading'>Address</div>
                  <div className='footer-address-details'><a href="https://www.google.com/maps/place/Madan+Mohan+Malaviya+University+Of+Technology/@26.73143,83.433128,16z/data=!4m6!3m5!1s0x39915ca3e2aa136b:0xc039bdf0211338a9!8m2!3d26.7314295!4d83.4331276!16zL20vMDQ0NWN4?hl=en&entry=ttu" target='_blank'>MMMUT, Gorakhpur , Uttar Pradesh, India</a></div>
                </div>
                <div className='footer-contact'>
                  <div className='footer-contact-heading'>Contact</div>
                  <div className='footer-emailaddress'><a href="mailto:example@example.com">mmmutfoundation@gmail.com</a>
                  </div>
                  <div className='footer-phoneno'><a href="tel:+1234567890" class="contact-link">9876543210</a></div>
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