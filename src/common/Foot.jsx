import React from 'react';
import './foot.css'
import footericon from '../assets/iconfoot.png';
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
      <div className='footer-main'>
        <div className='footer-main-left'>

          <div className='footer-main-left-top'>
            <div className='footer-icon-img'><img src="./img/mmmut_logo.png" /></div>
            <div className='footer-logo-title'>"Creativity is thinking up new things. Innovation is doing new things." <div className='quote-writer'>- Theodore Levitt</div></div>
          </div>

          <div className='footer-main-left-buttom'>
            <div className='followus-heading'>Follow Us</div>
            <div className='footer-main-left-buttom-socialmediaicon'>
              <div className='footer-social-icon'><img src={facebook} /></div>
              <div className='footer-social-icon'><img src={twitter} /></div>
              <div className='footer-social-icon'><img src={LinkedIn} /></div>
              <div className='footer-social-icon'><img src={youtube} /></div>
              <div className='footer-social-icon'><img src={instagram} /></div>
            </div>
          </div>
        </div>
        <div className='footer-main-center'>
          <div className='footer-main-center-heading'>
            Get In Touch
          </div>
          <div className='footer-main-center-address'>
          मदन मोहन मालवीय प्रौद्योगिकी विश्वविद्यालय, गोरखपुर, उत्तर प्रदेश
          </div>
          <div className='footer-main-center-phoneno'>
            <div className='phone-img'><img src={phoneNo} /></div>
            <div>+91 92355 01654</div>
          </div>
          <div className='footer-main-center-email' >
            <div className='footer-main-center-email-box'>
              <div className='email-img'><img src={emailaddress} /></div>
              <div>connect.mmmut.ac.in</div>
            </div>
            <div className='footer-main-center-email-box'>
              <div className='email-img'><img src={emailaddress} /></div>
              <div>support.mmmut.ac.in</div>
            </div>
          </div>
        </div>
        <div className='footer-main-right'>
          <div className='footer-main-right-quicklink-box'>
            <div className='footer-main-right-heading'>
              Quick Navigation
            </div>
            <div className='footer-main-right-quick-link'>
              <div>Home</div>
              <div>Start Us</div>
              <div>About Us</div>
              <div>Contact</div>
            </div>
          </div>
          <div className='footer-main-right-teamquote'>
            Creative Team <br/> Behind MMMUT FOUNDATION
          </div>
        </div>
      </div>
    </>
  )
}

export default Foot;