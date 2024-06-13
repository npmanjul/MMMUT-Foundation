import React from 'react';
import './startupcard.css'
import pdv from '../assets/startup/logopdv.png';
import pioneer from '../assets/startup/infotech.png'

const Startupcard = () => {
  return (
    <>
        <div className='startup-container'>
        <a href='https://www.pushpakdroneviman.in/'>
        <div className='startup-box'>
          <div className='startup-img'>
            <img src={pdv}/>
          </div>
          <div className='startup-title'>
          Pushpak Drone Viman Pvt. LtD
          </div>
        </div>
        </a>

        <a href='https://www.pioneerinfotech.co.in/index.html'>
        <div className='startup-box'>
          <div className='startup-img'>
            <img src={pioneer}/>
          </div>
          <div className='startup-title'>
          Pioneer Infotech
          </div>
        </div>
        </a>
      </div>
    </>
  )
}

export default Startupcard